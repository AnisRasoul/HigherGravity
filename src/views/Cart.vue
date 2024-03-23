<template>
    <div>
  <navbar/>
  
  <div class="flex justify-between mx-14 my-14 items-center">

  <div class="text-center sm:text-left">
            <h1 class="text-4xl sm:text-5xl font-black">Your Cart </h1>
            <h3 class="text-lg sm:text-2xl mt-3" style="letter-spacing: 2px;">Fashion Finds Await Checkout in Your Cart!</h3>
  </div>
  <a href="#" class="underline font-semibold text-[#5E5E5E]">Continue Shopping</a>
  </div>
  <div class="grid grid-cols-3 justify-items-center gap-24">
    <h1 class="uppercase text-[#5E5E5E] font-bold ">Product</h1>
    <h1 class="uppercase text-[#5E5E5E] font-bold ml-80 ">quantity</h1>
    <h1 class="uppercase text-[#5E5E5E] font-bold ml-20 ">total</h1>
  </div>
  <div>
    <CartItem/>
  </div>
  <footing/>
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import footing from '@/components/footing.vue';
import CounterButton from '../components/ui/CounterButton.vue'
import CartItem from '../components/CartItem.vue'

export default {
components: {
    navbar, footing,CounterButton,CartItem
}, 
}

</script>

<style>

</style>