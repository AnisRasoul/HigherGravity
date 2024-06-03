<template>
    <div class="w-screen h-screen flex">
      <!-- Side bar -->
      <div class="w-[400px] h-full bg-gray-200 text-white" v-show="showSide">
        <div class="h-[50px] bg-gray-900 flex justify-start  items-center ">
          <div class="px-[20px]">
            <div class="flex items-center">
            <a href="/"><h1 class="text-4xl font-extrabold">Higher Gravity</h1></a>
  
    </div>
          </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
        <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
          <div class="flex flex-col space-y-[10px]">
            <!-- Loop through the sidebar links dynamically -->
            <router-link
              v-for="(link, index) in sidebarLinks"
              :key="index"
              :to="link.route"
              class="inline-flex items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <component :is="link.icon" class="mr-2 w-[25px] h-[25px]" />
              {{ link.label }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
      <div class="w-full h-full bg-gray-400">
        <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
          <!-- Hambuger menu -->
          <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-[25px] h-[25px]">
              <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>

        </div>
        <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
          <div class="border border-gray-300 rounded-md p-[20px] h-full">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <!-- Main  -->
    </div>
  </template>
  <script>
import { CircleUserRound, BedSingle, SquarePlus } from 'lucide-vue-next';

export default {
  components: {
    CircleUserRound,
    BedSingle,
    SquarePlus,
  },
  data() {
    return {
      showSide: true,
      sidebarLinks: [
        { route: '/dashboard/home',  label: 'dashboard' },
        { route: '/dashboard/products', label: 'products' },
        { route: '/dashboard/create', label: 'users' },
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