<template>
<div>
  <Navbar/>
  <div class="flex px-10 h-screen">

      <div class="w-[300px] text-black border-r border-black space-y-12 pt-12 mt-1 pr-25">
          <div>
              <p class="uppercase font-[Zabal] font-extrabold text-2xl">good morning</p>
              <p class="text-sm">example@gmail.com</p>
          </div>
            <router-link
              v-for="(link, index) in sidebarLinks"
              :key="index"
              :to="link.route"
              class="flex items-center text-lg hover:underline hover:font-bold"
            >
              {{ link.label }}
            </router-link>
      </div>

      <div class="w-full h-full bg-white p-20">
            <router-view></router-view>
      </div>

  </div>
    <Footing/>
</div>
   
  </template>
  <script>
import Footing from '@/components/footing.vue';
import Navbar from '@/components/navbar.vue';
export default {
  components: {
      Navbar,
      Footing
    },
  data() {
    return {
      sidebarLinks: [
        { route: '/user/dashboard/purchases',  label: 'Purchases' },
        { route: '/user/dashboard/orders', label: 'Orders' },
        { route: '/user/dashboard/profile', label: 'Profile' },
      ],
    };
  },
};
</script>
  
  <style>
  
  </style>