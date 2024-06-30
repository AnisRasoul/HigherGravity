<template>
    <div>
  <navbar/>
  <div v-if="cartProduct.length">
  <div  class="md:flex flex flex-col md:justify-between md:mx-14 my-14 items-center ">
  <div class="md:text-center text-left">
            <h1 class="text-4xl sm:text-5xl font-black text-center">Your Cart </h1>
            <h3 class="text-lg sm:text-2xl mt-3">Fashion Finds Await Checkout in Your Cart!</h3>
  </div>
  <a href="/pants" class="underline font-semibold text-[#5E5E5E] text-center mt-6">Continue Shopping</a>
  </div>
<div class="mb-48 border-t border-b border-[#A0A0A0]">
  <div>
    <CartItem v-for="item in cartProduct" class="my-16"
    :key="item.id" 
    :item="item" 
    :cardImage="item.cardImage"
    :cardId="item.id" 
    :cardDesc="item.cardDesc" 
    :cardPrice="item.totalPrice"
    :cardSize ="item.size"
    :cardColor="item.color"
    :cardQuantity="item.quantity"
    />
  </div>
</div>
  </div>
 <div v-else class="flex flex-col items-center justify-center h-full space-y-5 my-80  md:border-[#A0A0A0]">
  <p class="uppercase font-bold text-xl text-center">Your cart is empty. Explore HigherGravity's best sellers and exclusive offers.</p>
  <HGButton href="/" class="mt-4">Shop now</HGButton>
</div>
<footing/>
<Toaster/>
    </div>
    
</template>

<script>
import navbar from '@/components/navbar.vue';
import footing from '@/components/footing.vue';
import CounterButton from '../components/ui/CounterButton.vue'
import CartItem from '@/components/Cards/CartItem.vue';
import HGButton from '@/components/ui/HGButton.vue';
import { useToast } from '@/components/ui/toast/use-toast';
import { ToastAction } from '@/components/ui/toast'
import { Toaster } from '@/components/ui/toast';
import { h } from 'vue';

export default {
components: {
    navbar, footing,CounterButton,CartItem,HGButton,ToastAction,Toaster
}, 
mounted() {
  console.log(this.cartProduct);
},
computed: {
  cartProduct() {
    return this.$store.state.cart.sort((a, b) => b.id - a.id);
    }
},
}

</script>

<style>

</style>