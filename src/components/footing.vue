<template>
 <div>
   <div class="md:flex md:justify-around md:items-center">
     <!-- input -->
      <div>
      <h2 class="text-lg font-semibold text-center">Subscribe to our emails:</h2>
      <div class="mt-4 flex border-b border-black ml-20 pb-3 md:w-auto w-[55%] ">
        <input class="border-r-0 outline-none" placeholder="Email" type="email" />
          <ArrowRightCircle class="text-2xl" />
      </div>
    </div>
    <!-- icons -->
    <div class="flex justify-center mb-8 mt-5 md:mt-20">
      <Instagram class="text-3xl mx-4 md:mx-3" />
      <Twitter class="text-3xl mx-4 md:mx-3" />
      <Linkedin class="text-3xl mx-4 md:mx-3" />
    </div>
       </div  >
       <div class="md:border-b md:border-black md:w-full md:my-10 hidden"></div>
         <!-- Payment -->
       <div class="flex justify-center items-center">
       
  <div class="flex">
    <img src="../assets/footer-pay/AMEX.svg" class="mx-3">
    <img src="../assets/footer-pay/ApplePay.svg" class="mx-3">
    <img src="../assets/footer-pay/GooglePay.svg" class="mx-3">
    <img src="../assets/footer-pay/PayPal.svg" class="mx-3">
    <img src="../assets/footer-pay/visa-logo.svg">
    <img src="../assets/footer-pay/obl.svg" class="mx-3">
    <img src="../assets/footer-pay/pay.svg" class="mx-3">
  </div>
</div>
   <!-- credits -->
<div class="text-center my-5">
©2024, HigherGravity Owned by Zeery, Developed by Anis Rasoul •<a href="#">Refund policy</a> • <a href="">Privacy policy</a> • <a href="#">Terms of service</a> • <a href="#">Shipping policy</a> • <a href="#">Contact information</a>
</div>
  </div>

</template>

<script>
import { Instagram } from 'lucide-vue-next';
import { Linkedin } from 'lucide-vue-next';
import { Twitter } from 'lucide-vue-next';

import { ArrowRightCircle } from 'lucide-vue-next';
export default {
components: {
  Instagram,
  Linkedin,
  Twitter,
  ArrowRightCircle
}
}
</script>
