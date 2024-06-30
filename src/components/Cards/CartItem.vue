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
         
            <p class="text-[#A0A0A0] uppercase">Size: {{ cardSize }}</p>
            <p class="text-[#A0A0A0] uppercase">Color: </p>
            <p  class="text-[#A0A0A0] uppercase">Quantity: {{ cardQuantity }}</p>
          </div>
        </div>
        </router-link>
      </div>
      <div class="flex space-x-6 justify-center items-center md:ml-0 ml-[60%]">
       
        <h1 class="font-extrabold"> ${{ cardPrice }}  USD</h1> 
        <button @click="removeFromCart">
          <span class="mdi mdi-trash-can-outline text-2xl"></span>
        </button>
      </div>
    </div>
  </template>
  

  <script>
import CounterButton from '../ui/CounterButton.vue';
import store from '@/store';
import { useToast } from '@/components/ui/toast/use-toast';
import { ToastAction } from '@/components/ui/toast'
import { Toaster } from '@/components/ui/toast';
import { h } from 'vue';

export default {
  components: {
    CounterButton
  },
  props: {
    cardId: Number,
    cardImage: String,
    cardDesc: String,
    cardPrice: Number,
    cardSize : String,
    cardColor: String,
    cardQuantity: Number
  },
  methods: {
    removeFromCart() {
      this.$store.dispatch('removeFromCart', this.cardId);
         this.showToast('Removed from Cart');
    },
    showToast(title, description, action) {
      const { toast } = useToast();
      toast({
        title: title,
        description: description,
        action: action,
      });
    },
  }
}
</script>


<style>

</style>