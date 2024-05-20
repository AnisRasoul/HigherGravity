<template>
  <div>
    <navbar/>
    <div class="bg-white my-20">
    <div class="md:flex justify-center mx-auto items-center">
      <div class="md:flex md:space-x-6 space-x-10 space-y-4 items-center">
        <div class="md:block flex md:space-x-0 space-x-2 md:space-y-3 items-center justify-center">
          <!-- Use v-for to render small images -->
          <img v-for="(img, index) in selectedProduct.moreImages" :key="index" @mouseover="changeImage(img)" :src="img" alt="product" class="w-[40px] h-[60px] sm:w-[80px] sm:h-[100px] object-cover cursor-pointer" />
        </div>
        <!-- Render the big image -->
        <img :src="image" alt="T-shirt with graphic" class="md:block flex md:w-96 md:h-72 object-cover" style="width: 300px; height: auto;" />
        </div>
      <div class="flex flex-col pl-8">
        <h1 class="text-3xl font-bold">{{ selectedProduct.cardDesc }}</h1>
        <p class="mt-4 text-sm text-gray-600"></p>
        <div class="mt-4">
          <p class="text-lg font-extrabold">Price:</p>
          <p class="text-lg font-black">${{ selectedProduct.cardPrice.toFixed(2) }} USD</p>
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
    >
      {{ size.label }}
    </Button>
  </div>

        </div>
        <div class="mt-4">
          <p class="text-lg font-semibold">Quantity:</p>
          <div class="flex items-center space-x-10">
              <CounterButton/>
            <Button @click="addToCart" class="bg-white text-black md:px-16 px-8 md:py-2 py-3 border border-black font-extrabold"> <span class="mdi mdi-cart-outline mr-3 text-lg"></span>Add to Cart</Button>
          </div>
        </div>
        <div class="flex space-x-4 mt-4">
          <Button class="bg-black text-white md:px-40 px-32 py-5 font-extrabold md:text-2xl" style="letter-spacing: 2px;"  @click="Buy">BUY IT NOW</Button>
        </div>
        <div class="flex space-x-10 mt-4">
          <p class="text-sm underline">  <span class="mdi mdi-export-variant"></span>Share</p>
          <p class="text-sm underline">SHIPPING POLICY</p>
        </div>
      </div>
    </div>
    <h1 class="text-black text-3xl underline flex justify-center font-extrabold mt-20 uppercase" style="letter-spacing: 2px;">You May also like</h1>
    <div class="flex justify-center items-center my-20 flex-wrap">
      <StoreCard v-for="card in cards" :key="card.id"
                  :card-image="card.cardImage"
                  :hover-image="card.hoverImage" 
                  :card-desc="card.cardDesc"
                  :card-price="card.cardPrice"
                  class="mx-5 my-5 sm:w-1/2 lg:w-1/3"
              />
      </div>
  </div>
    <footing/>
  </div>
</template>

<script>
import store from '@/store'
import StoreCard from '@/components/Cards/StoreCard.vue'
import CounterButton from '../components/ui/CounterButton.vue'
import router from '@/router/router'
import navbar from '@/components/navbar.vue';
import footing from '@/components/footing.vue';
export default {
  components: {
    StoreCard,
    CounterButton,
    navbar,
    footing,
     
  },
  data() {
    return {
      image: null,
      cards: [
        { id: "1", cardImage: "https://i.imgur.com/4VIBsSW.png", hoverImage: "https://i.imgur.com/IR7GgQx.png", cardDesc: "HigherGravity classy light blue shirt.", cardPrice: "$29.99 USD" },
        { id: "2", cardImage: "https://i.imgur.com/t6Iakck.png", hoverImage: "https://i.imgur.com/HGxFEfE.png", cardDesc: "HigherGravity dark blue ocean jersey.", cardPrice: "$25.00 USD" },
        { id: "3", cardImage: "https://i.imgur.com/MONyixl.png", hoverImage: "https://i.imgur.com/sb6AqDJ.png", cardDesc: "HigherGravity Retro Sport Beige Shirt.", cardPrice: "$25.00 USD" },
      ],
      sizes: [
        { value: "xs", label: "XS" },
        { value: "s", label: "S" },
        { value: "m", label: "M" },
        { value: "l", label: "L" },
        { value: "xl", label: "XL" },
        { value: "2xl", label: "2XL" }
      ],
      selectedSize: null
    }
  },
  methods: {
    Buy(){
      this.addToCart()
      router.push({name:'payment' })
    },
    addToCart() {
    this.$store.dispatch('addToCart', this.selectedProduct)
    router.push({ name: 'cart' })
  },
    changeImage(img) {
      this.image = img;
    },
    selectSize(size) {
    this.selectedSize = size;
  }
  },
  computed: {
    selectedProduct() {
      const id = Number(this.$route.params.id);
      for (const category of store.state.products) { // loop through the categories of product
        for (const item of category.items) { // loop in the items
          if (item.id === id) { // if you find the id return the item's data
            return item;
          }
        }
      }
    }
  },
  mounted() {
  if (this.selectedProduct.moreImages.length > 0) {
    this.image = this.selectedProduct.moreImages[0]; // Set the first image as default
  }
},
}
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
