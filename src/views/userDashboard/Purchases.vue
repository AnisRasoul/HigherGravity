<template>
  <div>
    <h1 class="text-2xl font-medium underline">My purchases :</h1>
    <div v-if="purchased.length" class="flex flex-wrap">
      <StoreCard
        v-for="product in purchased"
        :key="product.id"
        :card-image="product.cardImage"
        :hover-image="product.hoverImage"
        :card-desc="product.cardDesc"
        :card-price="product.cardPrice"
        :purchased="true"
        class="mx-5 my-5 sm:w-1/2 lg:w-1/3 custom-store-card"
      />
    </div>
    <div v-else class="text-center my-32">
      <p class="mb-5 text-4xl">No purchases yet.</p>
      <div class="flex text-xl items-center space-x-2 justify-center">
         <p>Take a tour around our shop and</p><router-link class="cursor-pointer font-semibold underline " to="/" >Discover our products</router-link>
  
      </div>
     </div>
  </div>
</template>

<script>
import products from '@/store/modules/products';
import StoreCard from '@/components/Cards/StoreCard.vue';
export default {
  components: {
    StoreCard
  },
  computed: {
    purchased() {
      return products.state.purchased.flat();
    }
  },
  created() {
    console.log(this.purchased);
    this.$store.dispatch('products/fetchProducts');
  }
};
</script>

<style scoped>
.custom-store-card img {
  width: 100px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
}
</style>
