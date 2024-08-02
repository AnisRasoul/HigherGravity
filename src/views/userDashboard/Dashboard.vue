<template>
<div>
  <Navbar/>
  <div class="flex px-10 h-screen">

      <div class="md:w-[300px] md:text-black md:border-r md:border-black md:space-y-12 md:pt-12 md:mt-1 md:pr-25 md:block hidden">
          <div>
              <p class="uppercase font-primary font-extrabold text-2xl">good morning</p>
              <p class="text-sm">{{ user.email }}</p>
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

      <div class="w-full h-full bg-white md:p-20 p-8">
            <router-view></router-view>
      </div>

  </div>
    <Footing/>
</div>
   
  </template>
  <script>
import Footing from '@/components/footing.vue';
import Navbar from '@/components/navbar.vue';
import user from '@/store/modules/user';
export default {
  components: {
      Navbar,
      Footing
    },
  data() {
    return {
      user : user.state.user,
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