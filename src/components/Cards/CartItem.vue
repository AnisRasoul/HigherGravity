<template>
    <div class="md:flex md:justify-around md:items-center">
      <div>
        <router-link :to="{ name: 'productdetails', params: { id: cardId } }">
        <div class="flex space-x-6 items-center">
          <div>
            <img :src="cardImage" class="w-60 h-76" />
          </div>
  
          <div>
          
              <h1>{{ cardDesc }}</h1>
         
            <p class="text-[#A0A0A0]">${{ cardPrice }} USD</p>
            <p class="text-[#A0A0A0]">Size: XL</p>
            <p class="text-[#A0A0A0]">Color: Blue</p>
          </div>
        </div>
        </router-link>
      </div>
      <div class="flex space-x-6 justify-center items-center">
        <CounterButton />
        <button @click="removeFromCart">
          <span class="mdi mdi-trash-can-outline text-2xl"></span>
        </button>
        <h1 class="font-extrabold">$35.50 USD</h1>
      </div>
    </div>
  </template>
  

  <script>
import CounterButton from '../ui/CounterButton.vue';
import store from '@/store';

export default {
  components: {
    CounterButton
  },
  props: {
    cardId: Number,
    cardImage: String,
    cardDesc: String,
    cardPrice: Number,
  },
  methods: {
    removeFromCart() {
      this.$store.dispatch('removeFromCart', this.cardId);
    }
  }
}
</script>


<style>

</style>