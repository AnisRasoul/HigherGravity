<template>
    <div>
   <navbar/>
        <!--First page-->
        <div class="hero h-screen bg-cover bg-no-repeat bg-center brightness-65" style="background-image: url('../assets/imgs/bg1.png');">
    <div class="hero flex justify-center items-center flex-col"> <!-- Added flex-col -->
        <a href="#" class="text-white border-2 border-white text-3xl px-10 py-3 bg-opacity-50 bg-black hover:text-black hover:bg-white hover:border-black hover:bg-opacity-40">EXPLORE</a>
    </div>
</div>

         <!--second page-->
         <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 mx-10 my-10">
    <!-- Right side (text) -->
    <div class="flex items-center justify-center text-center sm:order-2"> <!-- Swap order for small screens -->
        <div class="p-8">
            <h2 class="header md:text-[80px] text-[50px] ">The world of Higher gravity</h2>
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
 <!--third page-->
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

<!-- Fourth Page -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 mx-10 my-10">
    <!-- Right side (text) -->
    <div class="flex items-center justify-center text-center md:order-2">
        <div class="p-8">
            <h2 class="header md:text-[80px] text-[50px] ">Unleash your Style’s Potential</h2>
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

<!--Footer-->
  <h1 class="text-center md:text-9xl text-5xl md:my-40 my-20 font-[Anger] font-medium md:tracking-[4rem] tracking-[9px]">Higher gravity</h1>
      <img src="../assets/imgs/young-women-wearing-2000s-fashion 1.png" class="max-w-full h-auto my-28 block mx-auto">
      <footing/>
</div>
 
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import navbar from '../components/navbar.vue'
import footing from '../components/footing.vue'
import HGButton from '@/components/ui/HGButton.vue';
export default {
    components: {
      Swiper,SwiperSlide,
      navbar, footing,HGButton
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },  


}
</script>

<style>
    body{
        background-color: white ;
    }
    li{
        font-family: Zabal;
    }
    @font-face {
        font-family: Zabal;
        src: url(../assets/fonts/ZabalDEMO-Regular.otf);
    }
    @font-face {
       font-family: Anger;
       src: url(../assets/fonts/AngerStyles.ttf)
    }
   
     .hero{
        height: 100vh;
        background-image: url('../assets/imgs/bg1.png');
        background-size: cover ;
        background-repeat: no-repeat;
        filter: brightness(65%);
    }
    @media (max-width: 1000px) {
  .hero {
    height: 50vh; /* Adjust height for smaller screens */
    background-size: cover;
    background-position: center; /* Change background size for smaller screens if needed */
    filter: brightness(65%); /* Adjust brightness for smaller screens if needed */
  }
 }
    .header{
        font-family: Anger;

        letter-spacing: 2px;
        
    }
    .FAQ{
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
 
</style>../components/ui/HG-Button.vue