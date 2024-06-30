<template>
     <div class="flex px-10 h-screen">

<div class="w-[300px] text-black border-r border-black space-y-12 pt-12 mt-1 pr-25">
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
  </template>
  <script>

export default {
 
  data() {
    return {
      showSide: true,
      sidebarLinks: [
        { route: '/dashboard/home',  label: 'dashboard' },
        { route: '/dashboard/products', label: 'products' },
        { route: '/dashboard/users', label: 'users' },
        { route: '/dashboard/orders', label: 'orders' },
      ],
    };
  },
  methods: {
    toggleSideBar() {
      this.showSide = !this.showSide;
    },
  },
};
</script>
  
  <style>
  
  </style>