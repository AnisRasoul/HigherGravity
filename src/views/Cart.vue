<template>
    <div>
  <navbar/>
  <div class="md:flex md:justify-between md:mx-14 my-14 items-center ">
  <div class="text-center sm:text-left">
            <h1 class="text-4xl sm:text-5xl font-black">Your Cart </h1>
            <h3 class="text-lg sm:text-2xl mt-3">Fashion Finds Await Checkout in Your Cart!</h3>
  </div>
  <a href="/pants" class="underline font-semibold text-[#5E5E5E] text-center">Continue Shopping</a>
  </div>
  <div v-if="!cartProduct.length" class="flex flex-col items-center justify-center h-full space-y-5 mb-48 border-t border-[#A0A0A0]">
  <h1 class="md:text-6xl text-3xl font-[Zabal] text-center">Empty Cart ...</h1>
  <HGButton href="/pants" class="mt-4">Shop now</HGButton>
</div>
<div v-else class="mb-48 border-t border-[#A0A0A0]">
  <div>
    <CartItem v-for="item in cartProduct" class="my-16"
    :key="item.id" 
    :item="item" 
    :cardImage="item.cardImage"
    :cardId="item.id" 
    :cardDesc="item.cardDesc" 
    :cardPrice="item.cardPrice"/>
  </div>
</div>

<footing/>
    </div>
    
</template>

<script>
import navbar from '@/components/navbar.vue';
import footing from '@/components/footing.vue';
import CounterButton from '../components/ui/CounterButton.vue'
import CartItem from '@/components/Cards/CartItem.vue';
import HGButton from '@/components/ui/HGButton.vue';

export default {
components: {
    navbar, footing,CounterButton,CartItem,HGButton
}, 
mounted() {
  console.log(this.cartProduct);
},
computed: {
  cartProduct() {
      return this.$store.state.cart;
    }
}
}

</script>

<style>

</style>