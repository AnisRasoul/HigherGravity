<template>
  <div class="sticky">
    <div class="sticky justify-end flex bg-white" style="font-family: Zabal;">
      <h3 class="md:p-2 p-1 mx-auto font-black md:tracking-[1px] md:text-xl">Welcome to higher gravity store</h3>
    </div>

    <nav class="p-1 flex justify-between items-center bg-[#151516]">
      <div class="md:flex items-center">
        <span @click="showMenu = !showMenu" class="absolute sm:hidden right-5 top-14 text-[#d3cece]">
          <Menu class="size-8"/>
        </span>
        <a class="text-white md:px-6 md:py-1 md:mr-9" href="/"> 
          <img src="../assets/HG logo.svg" class="md:h-auto h-16">
        </a>

        <ul v-if="menuItems.length > 0" class="md:flex hidden uppercase text-white space-x-16"> 
          <li v-for="(item, index) in menuItems" :key="index">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center md:mr-24 mr-32 mt-4 space-x-4">
        <div class="md:bg-[#333333] md:p-1 md:rounded-full md:items-center md:w-full md:max-w-[200px] mx-auto sm:flex hidden">
          <Search class="text-white md:size-4 size-6 mx-2" />
          <input class="bg-transparent outline-none border-0 text-white placeholder-gray-400 w-full hidden sm:block" placeholder="Search" type="search" />
        </div>
        <div class="flex text-white space-x-8 size-8 items-center mb-2">
          <a href="/cart"><ShoppingBag/></a>
          <a href="/login"><UserRound/></a>
        </div>
      </div>
    </nav>

    <!-- Overlay with menu items -->
    <transition
      @enter="enter"
      @leave="leave"
    >
      <div v-if="showMenu" class="fixed inset-0 bg-[#151516] bg-opacity-1 mt-10">
        <span @click="showMenu = false" class="absolute top-12 right-10 cursor-pointer text-white">
          <X  class="size-6"/>
        </span> 
        <div class="md:bg-[#333333] p-1 rounded-[8px] items-center flex w-[70%] my-12 mx-6">
          <Search class="text-white md:size-4 size-6 mx-2" />
          <input class="bg-transparent outline-none border-0 text-white placeholder-gray-400 w-full sm:block" placeholder="Search" type="search" />
        </div>
        <ul class="space-y-10 my-20 mx-10 uppercase text-white">
          <li v-for="(item, index) in menuItems" :key="index">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { Menu, UserRound, ShoppingBag, Search, ChevronDown, X } from 'lucide-vue-next';
import { gsap } from 'gsap';

export default {
  components: { Menu, UserRound, ShoppingBag, Search, ChevronDown, X },
  data() {
    return {
      showMenu: false,
      menuItems: [
        { text: 'Newin', link: '/newin' },
        { text: 'Shirts', link: '/shirts' },
        { text: 'Pants', link: '/pants' },
        { text: 'ACCESSORY', link: '/accessory' },
        { text: 'GET HELP', link: '/help' }
      ]
    };
  },
  methods: {
    enter(el, done) {
      gsap.fromTo(el, { opacity: 0, x: -300 }, { opacity: 1, x: 0, duration: 0.5, onComplete: done });
      // Get all the list items within the ul
      const listItems = el.querySelectorAll('li');
      // Sequentially fade in each list item
      gsap.fromTo(
        listItems,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: (index) => index * 0.1, // Delay each item by 0.1s
          ease: 'power2.inOut', // Optional easing function
        }
      );
    },
    leave(el, done) {
      gsap.fromTo(el, { opacity: 1, x: 0 }, { opacity: 0, x: -300, duration: 0.5, onComplete: done });
    }
  }

};
</script>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 50;
}

.size-8 {
  width: 2rem;
  height: 2rem;
}

.bg-opacity-50 {
  backdrop-filter: blur(5px);
}
</style>
