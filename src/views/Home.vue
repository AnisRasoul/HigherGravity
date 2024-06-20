<template>
  <div>
    <navbar/>
    <!-- First page -->
    <div class="hero h-screen bg-cover bg-no-repeat bg-center brightness-65" style="background-image: url('../assets/imgs/bg1.png');">
      <div class="hero flex justify-center items-center flex-col"> <!-- Added flex-col -->
        <a href="#" class="text-white border-2 border-white text-3xl px-10 py-3 bg-opacity-50 bg-black hover:text-black hover:bg-white hover:border-black hover:bg-opacity-40">EXPLORE</a>
      </div>
    </div>

    <!-- Second page -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 mx-10 my-10">
      <!-- Right side (text) -->
      <div class="flex items-center justify-center text-center sm:order-2"> <!-- Swap order for small screens -->
        <div class="p-8">
          <h2 id="typewriter-target" class="header md:text-[70px] text-[50px]"></h2>
           <HGButton href="/newin">new in</HGButton>
        </div>
      </div>
      <!-- Left side (image) -->
      <div class="flex items-center justify-center"> <!-- Swap order for small screens -->
        <swiper :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide><img src="../assets/imgs/slide1.png" class="max-w-full h-auto"></swiper-slide>
          <swiper-slide><img src="../assets/imgs/slider2.png" class="max-w-full h-auto"></swiper-slide>
          <swiper-slide><img src="../assets/imgs/slider3.png" class="max-w-full h-auto"></swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- Third page -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 mx-10 my-10">
      <!-- Right side (text) -->
      <div class="flex items-center justify-center text-center">
        <div class="p-8">
          <h2 class="header md:text-[80px] text-[50px] ">Clothes on Cloud Nins9</h2>
          <HGButton href="/shirts">T-SHIRTS</HGButton>
        </div>
      </div>
      <!-- Left side (image) -->
      <div class="flex items-center justify-center">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide><img src="../assets/imgs/slide4.png" class="max-w-full h-auto"></swiper-slide>
          <swiper-slide><img src="../assets/imgs/slider5.png" class="max-w-full h-auto"></swiper-slide>
          <swiper-slide><img src="../assets/imgs/slider6.png" class="max-w-full h-auto"></swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- Fourth page -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 mx-10 my-10">
      <!-- Right side (text) -->
      <div class="flex items-center justify-center text-center md:order-2">
        <div class="p-8">
          <h2 class="header md:text-[80px] text-[50px]">Unleash your Style’s Potential</h2>
          <p class="py-5 text-2xl" style="font-family: Zabal; letter-spacing:5px; color:#A0A0A0"> Take your closet to the highest level</p>
          <HGButton href="/pants">Pants</HGButton>
        </div>
      </div>
      <!-- Left side (image) -->
      <div class="flex items-center justify-center md:order-1">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide><img src="../assets/imgs/slider7.png" class="max-w-full h-auto"></swiper-slide>
          <swiper-slide><img src="../assets/imgs/slider8.png" class="max-w-full h-auto"></swiper-slide>
          <swiper-slide><img src="../assets/imgs/slider9.png" class="max-w-full h-auto"></swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="bg-black py-16 pb-32">
      <h1 class="text-center md:text-9xl text-5xl md:my-40 my-20 font-[Anger] font-medium md:tracking-[4rem] tracking-[9px] text-white">Higher gravity</h1>
      <h1 class="text-center md:text-5xl text-2xl font-[Zabal] font-bold text-white">Frequently Asked Questions</h1>
      <p class="text-center my-10 text-2xl text-white">Dive into the most asked questions about our stellar clothing line, Higher Gravity, and discover the secrets behind our elevated style!</p>
      <!-- Accordion -->
      <Accordion type="single" class="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-3 md:max-w-[70%] max-w-[95%] mx-auto text-white">
        <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value" class="bg-white text-black md:py-10 py-4 px-10 rounded-[15px]">
          <AccordionTrigger class="md:text-2xl font-extrabold">{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>

    <footing class="mt-10"/>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import navbar from '../components/navbar.vue';
import footing from '../components/footing.vue';
import HGButton from '@/components/ui/HGButton.vue';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { gsap } from 'gsap';
import Typewriter from 'typewriter-effect/dist/core';

export default {
  components: { Swiper, SwiperSlide, navbar, footing, HGButton, Accordion, AccordionContent, AccordionItem, AccordionTrigger },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  mounted() {
    gsap.fromTo(
      '.hero', 
      { opacity: 0 }, 
      { opacity: 1, duration: 3 }
    );
    new Typewriter('#typewriter-target', {
    strings: ['The world of Higher gravity'],
    autoStart: true,
    loop: false,
    delay: 100,
  });

},
  data() {
    return {
      accordionItems: [
        { 
          value: 'item-1', 
          title: 'What makes Higher Gravity clothing unique?', 
          content: `At Higher Gravity, we take pride in our commitment to crafting fashion that defies the ordinary. Our clothing blends quality craftsmanship with innovative designs, ensuring you stand out from the crowd with every wear.` 
        },
        { 
          value: 'item-2', 
          title: 'How do I determine the right size for me?', 
          content: 'You can use our size guide, which provides measurements and guidelines for each product to help you find the perfect fit.' 
        },
        { 
          value: 'item-3', 
          title: 'Do you offer international shipping?', 
          content: 'Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary depending on your location.' 
        },
        { 
          value: 'item-4', 
          title: 'How can I track my order?', 
          content: 'Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status and location of your package.' 
        },
        { 
          value: 'item-5', 
          title: 'What is your return/exchange policy?', 
          content: 'We have a flexible return and exchange policy. If you\'re not satisfied with your purchase, you can return or exchange it within [number of days] days of receiving it. Please refer to our Returns & Exchanges page for detailed instructions.' 
        },
        { 
          value: 'item-6', 
          title: 'Are your products ethically made?', 
          content: 'Yes, we are committed to ethical and sustainable practices. Our products are made with environmentally friendly materials and manufactured under fair labor conditions.' 
        }
      ]
    };
  }
}
</script>

<style>
body {
  background-color: white;
}
li {
  font-family: Zabal;
}
@font-face {
  font-family: Zabal;
  src: url(../assets/fonts/ZabalDEMO-Regular.otf);
}
@font-face {
  font-family: Anger;
  src: url(../assets/fonts/AngerStyles.ttf);
}
.hero {
  height: 100vh;
  background-image: url('../assets/imgs/bg1.png');
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(65%);
}
@media (max-width: 1000px) {
  .hero {
    background-color: black;
    height: 95vh; /* Adjust height for smaller screens */
    background-size: cover;
    background-position: 60% center; /* Change background size for smaller screens if needed */
    filter: brightness(65%); /* Adjust brightness for smaller screens if needed */
  }
}
.header {
  font-family: Anger;
  letter-spacing: 2px;
}
.FAQ {
  height: 100vh;
  background-image: url('../assets/imgs/FAQ.png');
  background-position: center;
  background-repeat: no-repeat;
  font-family: Zabal;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-button-next,
.swiper-button-prev {
  background-color: rgba(255, 255, 255, 0.772);
  background-position: center;
  background-repeat: no-repeat;
  padding: 25px;
  border-radius: 100%;
  color: red;
}
.swiper-button-prev {
  background-image: url("../assets/icons/left-arrow.png");
}
.swiper-button-next {
  background-image: url("../assets/icons/right-arrow.png");
}
.swiper-button-next::after,
.swiper-button-prev::after {
  content: "";
}
</style>
