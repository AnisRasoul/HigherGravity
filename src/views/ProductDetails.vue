<template>
  <div :key="$route.params.id">
    <navbar />
    <div class="bg-white my-20">
      <div class="md:flex md:justify-center md:items-center">
        <div class="md:flex md:space-x-6 space-x-10 space-y-4">
          <div class="md:block flex md:space-x-0 space-x-2 md:space-y-3 items-center justify-center">
            <!-- Use v-for to render small images -->
            <img
              v-for="(img, index) in selectedProduct.moreImages"
              :key="index"
              @mouseover="changeImage(img)"
              :src="img"
              class="w-[50px] h-[70px] sm:w-[80px] sm:h-[100px] object-cover cursor-pointer"
            />
          </div>
          <!-- Render the big image -->
          <img
            :src="image"
            alt="T-shirt with graphic"
            class="md:block md:w-96 md:h-72 object-cover flex"
            style="width: 320px; height: auto;"
          />
        </div>
        <div class="flex flex-col md:pl-20 md:items-start items-center md:my-0 my-10">
          <router-link :to="{ name: 'productdetails', params: { id: selectedProduct.id } }">
            <h1 class="text-3xl font-bold text-center">{{ selectedProduct.cardDesc }}</h1>
          </router-link>
          <p class="mt-4 text-sm text-gray-600"></p>
          <div class="mt-4 md:block flex space-x-1">
            <p class="text-lg font-extrabold">Price :</p>
            <p class="text-lg font-black">${{ totalPrice }} USD</p>
          </div>
          <div class="mt-4">
            <p class="text-lg font-semibold">Select Size:</p>
            <div class="flex space-x-5 my-1">
              <Button
                v-for="size in sizes"
                :key="size.value"
                :class="{
                  'bg-black text-white': selectedSize === size.value,
                  'bg-white text-dark': selectedSize !== size.value
                }"
                class="p-2 md:px-4 px-2 border border-black rounded hover:bg-black hover:text-white"
                @click="selectSize(size.value)"
                v-model="size.value"
              >
                {{ size.label }}
              </Button>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-lg font-semibold">Quantity:</p>
            <div class="flex items-center space-x-10">
              <div class="flex space-x-5 items-center bg-white text-black  border border-black font-extrabold">
                <button @click="decrement" class="text-black p-2 px-5 rounded">-</button>
                 <p class="text-lg">{{ count }}</p>
                 <button @click="increment" class="text-black p-2 px-5 rounded">+</button>
              </div>
              <Button
                @click="addToCart"
                class="bg-white text-black md:px-16 px-8 md:py-2 py-3 border border-black font-extrabold"
              >
                <span class="mdi mdi-cart-outline mr-3 text-lg"></span>Add to Cart
              </Button>
            </div>
          </div>
          <div class="flex space-x-4 mt-4">
            <Button
              class="bg-black text-white md:px-40 px-32 py-5 font-extrabold md:text-2xl"
              style="letter-spacing: 2px;"
              @click="Buy();"
            >
              BUY IT NOW
            </Button>
          </div>
          <div class="flex space-x-10 mt-4">
            <p class="text-sm underline">
              <span class="mdi mdi-export-variant"></span>Share
            </p>
            <p class="text-sm underline">SHIPPING POLICY</p>
          </div>
        </div>
      </div>
      <h1
        class="text-black text-3xl underline flex justify-center font-extrabold mt-20 uppercase"
        style="letter-spacing: 2px;"
      >
        You May also like
      </h1>
      <div class="flex justify-center items-center my-20 flex-wrap">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="10"
          :auto-height="true"
          :navigation="true"
          :autoplay="{ delay: 1000, disableOnInteraction: false, }"
          :breakpoints="{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }"
          :loop="true"
        >
          <swiper-slide
            v-for="card in suggestedProducts"
            :key="card.id"
            
            @click="navigateToDetails(card.id)"
          >
            <StoreCard
              :card-image="card.cardImage"
              :hover-image="card.hoverImage"
              :card-desc="card.cardDesc"
              :card-price="card.cardPrice"
              class="sm:w-1/2 lg:w-full text-start"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <footing />
    <Toaster />
  </div>
</template>

<script>
import store from "@/store/store";
import StoreCard from "@/components/Cards/StoreCard.vue";
import CounterButton from "@/components/ui/CounterButton.vue";
import navbar from "@/components/navbar.vue";
import footing from "@/components/footing.vue";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toast";
import { h } from "vue";
import { Navigation, Pagination,  Autoplay, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import products from "@/store/modules/products";

export default {
  components: {
    StoreCard,
    CounterButton,
    navbar,
    footing,
    Button,
    Toaster,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y , Autoplay],
    };
  },
  data() {
    return {
      count: 1 ,
      image: null,
      selectedSize: null,
      sizes: [
        { value: "xs", label: "XS" },
        { value: "s", label: "S" },
        { value: "m", label: "M" },
        { value: "l", label: "L" },
        { value: "xl", label: "XL" },
        { value: "2xl", label: "2XL" },
      ],
    };
  },
  computed: {
    selectedProduct() {
      const id = Number(this.$route.params.id);
      for (const category of products.state.products) {
        // loop through the categories of product
        for (const item of category.items) {
          // loop in the items
          if (item.id === id) {
            // if you find the id return the item's data
            return item;
          }
        }
      }
      
    },
    totalPrice() {
    return this.count * this.selectedProduct.cardPrice;
  },
    existingProduct() {
      return products.state.cart.find((item) => item.id === this.selectedProduct.id);
    },
    action() {
      return h(
        ToastAction,
        {
          altText: "Remove from cart",
          onClick: () => {
            console.log("Undo clicked");
            this.removeFromCart(this.selectedProduct.id);
          },
        },
        {
          default: () => "Remove from cart",
        }
      );
    },
    suggestedProducts() {
      // Flatten the products array
      const allProducts = products.state.products.flatMap((category) => category.items);

      // Filter out the currently selected product
      const otherProducts = allProducts.filter(
        (item) => item.id !== this.selectedProduct?.id
      );

      // Shuffle the array and return the first 10 items
      const shuffled = otherProducts.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 20);
    },
  },
  methods: {
    increment() {
      if (this.count < 15) {
        this.count++;
      }
    },
    decrement() {
      if (this.count > 1) {
        this.count--;
      }
    },
    changeImage(img) {
      this.image = img;
    },
    selectSize(size) {
      this.selectedSize = size;
    },
    addToCart() {
  if (!this.selectedSize) {
    this.showToast(
      "Missing details",
      `Please select a size first`,
    );
    return; // Exit early if size is not selected
  }

  const productToAdd = { ...this.selectedProduct,  quantity: this.count, size: this.selectedSize, totalPrice: this.totalPrice};
  if (!this.existingProduct) {
    this.$store.dispatch("addToCart", productToAdd);
    this.showToast(
      "Added to your cart",
      `${this.selectedProduct.cardDesc} is now in your cart`,
      this.action
    );
    console.log(productToAdd);
  } else {
    this.showToast(
      "Already in your cart",
      `You can't add a product to your cart more than once`,
      this.action
    );
  }
},
    removeFromCart(id) {
      console.log(`Removing product with ID ${id} from the cart.`);
      this.$store.dispatch("removeFromCart", id);
    },
    Buy() {
      if (!this.existingProduct) {
        this.addToCart();
        this.$router.push({ name: "payment" });
      } else {
        this.$router.push({ name: "payment" });
      }
    },
    showToast(title, description, action) {
      const { toast } = useToast();
      toast({
        title: title,
        description: description,
        action: action,
      });
    },
    navigateToDetails(id) {
      this.$router.push({ name: "productdetails", params: { id } });
      this.count = 1;
      window.scrollTo(0, 0);
    },
   
  },
  mounted() {
    window.scrollTo(0, 0);
        this.image = this.selectedProduct.moreImages[0];
  },
  watch: {
    '$route': {
      immediate: true,
      handler(to, from) {
          this.image = this.selectedProduct.moreImages[0];
          this.selectedSize = '';
      }
    }
  },

};
</script>

<style>
body {
  font-family: Zabal;
}

.smallimg {
  aspect-ratio: 75/100;
  object-fit: cover;
}
</style>
