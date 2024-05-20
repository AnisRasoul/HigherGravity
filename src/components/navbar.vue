<template>
  <div class="sticky">

    <div class="sticky justify-end md:flex" style="font-family: Zabal;">
        <div class="flex md:justify-start justify-around md:space-x-0 space-x-52 font-extrabold md:text-base text-xs">
          <div class="text-black md:px-2 md:py-2">USD $ | United States <span class="mdi mdi-chevron-down md:ml-3"></span></div>
          <div class="text-black md:px-2 md:py-2">English <span class="mdi mdi-chevron-down md:ml-3"></span></div>
        </div>
          <h3 class="py-2 mx-auto font-extrabold md:ml-[28%] ml-24">Welcome to higher gravity store</h3>
    </div>

  <nav class="p-1 flex justify-between items-center bg-[#151516]">
    <div class="md:flex items-center">
  <span @click="showMenu = !showMenu" class="absolute md:hidden right-2 top-24 cursor-pointer text-white text-5xl">
    <i class="mdi mdi-menu"></i>
  </span>
  <a class="text-white px-6 py-1 mr-9" href="/"> 
    <img src="../assets/HG logo.svg" alt="">
  </a>
  <ul class="md:flex" :class="showMenu ? '' : 'hidden'"> 
    <li><div class="text-white px-4 py-2 mr-4"><a href="#">MEN</a></div></li>
    <li><div class="text-white px-4 py-2 mr-4"><a href="#">WOMEN</a></div></li>
    <li><div class="text-white px-4 py-2 mr-4"><a href="#">ACCESSORY</a></div></li>
    <li><div class="text-white px-4 py-2 mr-4"><a href="#">GET HELP <span class="mdi mdi-chevron-down ml-3"></span></a></div></li>
  </ul>
</div>


    <div class="flex items-center">
      <!--Search input-->
      <div class="bg-[#333333] p-1 rounded-full items-center w-full max-w-[400px] mx-auto hidden sm:flex">
        <span class="mdi mdi-magnify mx-3 text-xl text-white"></span>
        <input class="bg-transparent outline-none border-0 text-white placeholder-gray-400 w-full" placeholder="Search" type="search" />
      </div>
      <!--Search input-->

      <a href="/cart" class="text-white md:px-4 md:py-2 h-10 mb-2 md:mb-0 w-20"><img src="../assets/icons/Combined-Shape.svg" alt=""></a>
     <a href="/login" class="text-white md:px-4 md:py-2 mr-8 mb-2 md:mb-0 h-10 w-20"><img src="../assets/icons/PROFIL ICON.svg" alt=""></a>
     </div>
  </nav>
  </div>
</template>

<script>

export default {
  data(){
    return {
      showMenu: false,
    }
  }
}
</script>

<style>
  .box input {
    border: 0;
    background-color: rgba(0, 255, 255, 0);
  }
  .box-container {
    display: inline-block;
    border: solid rgba(0, 0, 0, 0) 2px;
    border-radius: 20px;
    background-color: #a0a0a02d;
    text-align: center;
    justify-content: center;
  }
</style>