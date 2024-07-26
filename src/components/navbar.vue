<template>
  <div class="sticky">
    <div class="sticky bg-white" style="font-family: Zabal;">
      <h3 class="md:p-2 p-1 font-bold md:tracking-[1px] md:text-base text-xs text-center">
        Welcome to higher gravity store
      </h3>
    </div>

    <nav class="p-1 flex justify-between items-center bg-primary">
      <div class="md:flex items-center">
        <span @click="showMenu = !showMenu" class="absolute sm:hidden right-5 top-12 text-[#d3cece]">
          <Menu class="size-8"/>
        </span>
        <a class="text-white md:px-6 md:py-1 md:mr-9" href="/"> 
          <img src="@/assets/HG logo.svg" class="h-16">
        </a>

        <ul class="md:flex hidden uppercase text-white space-x-16"> 
          <li><a href="/newin">Newin</a></li>
          <li><a href="/shirts">Shirts</a></li>
          <li><a href="/pants">Pants</a></li>
          <li><a href="/accessory">ACCESSORY</a></li>
          <li><a href="/help">GET HELP</a></li>
          <button v-if="isAuthenticated" @click="logout" class="flex space-x-3">
           <p>Logout</p> <LogOut/>
          </button>
         </ul>
      </div>
      <div class="flex justify-center items-center md:mr-28 mr-32 mt-4 space-x-4">
        <div class="md:bg-[#333333] md:p-1 md:rounded-full md:items-center md:w-full md:max-w-[200px] md:mb-1 sm:flex hidden">
          <Search class="text-white md:size-4 size-6 mx-2" />
          <input class="bg-transparent outline-none border-0 text-white placeholder-gray-400 w-full hidden sm:block" placeholder="Search" type="search" />
        </div>
        <div class="flex text-white space-x-8 size-8 items-center mb-2 relative">
          <a href="/cart" class="relative">
            <ShoppingBag/>
            <span v-if="cart.length > 0" class="absolute top-3 right-0 left-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center z-10">{{ cart.length }}</span>
          </a>
          <template v-if="isAuthenticated">
            <a href="/user/dashboard"><UserRound/></a>
          </template>
          <template v-else>
            <a href="/login"><UserRound/></a>
          </template> 
        </div>
      </div>
    </nav>

    <transition @enter="enter" @leave="leave">
      <div v-if="showMenu" class="fixed inset-0 bg-primary bg-opacity-1 mt-10">
        <span @click="showMenu = false" class="absolute top-12 right-10 cursor-pointer text-white">
          <X class="size-6"/>
        </span>
        <searchBar/>
        <ul class="space-y-10 my-20 mx-10 uppercase text-white">
          <li><a href="/newin">Newin</a></li>
          <li><a href="/shirts">Shirts</a></li>
          <li><a href="/pants">Pants</a></li>
          <li><a href="/accessory">ACCESSORY</a></li>
          <li><a href="/help">GET HELP</a></li>
          <li v-if="isAuthenticated"><a href="/dashboard">Dashboard</a></li>
        </ul>
        <button class="text-white absolute top-[90%] right-10" v-if="isAuthenticated">
          <LogOut class="size-6" @click="logout"/>
        </button>
      </div>
    </transition>
  </div>
</template>


<script>
import { Menu, UserRound, ShoppingBag, Search, ChevronDown, X, LogOut  } from 'lucide-vue-next';
import { gsap } from 'gsap';
import searchBar from './searchBar.vue';
import products from '@/store/modules/products';

export default {
  components: { Menu, UserRound, ShoppingBag, Search, ChevronDown, X, LogOut, searchBar  },
  data() {
    return {
      showMenu: false,
      isAuthenticated: false,
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
    },
    checkAuthentication() {
      const token = localStorage.getItem('token');
      this.isAuthenticated = !!token; // Convert token existence to boolean
    },
    logout() {
      localStorage.removeItem('token');
      this.isAuthenticated = false;
      location.reload()
    }
  },
 mounted() {
    this.checkAuthentication();
  },
  computed: {
    cart() {
      return products.state.cart;
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
