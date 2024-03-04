<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md md:shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <a href="/productdetails" @click="handleClick" >
        <img class="w-full" :src="currentImage" alt="Card Image" @mouseenter="changeImage" @mouseleave="restoreImage" :style="{ opacity: imageOpacity }">
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="font-bold tracking-tight text-gray-900 dark:text-white">{{ cardDesc }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ cardPrice }}</p>
      </div>
    </div>
  </template>
  
  <script>
export default {
  props: {
    cardImage: String,
    hoverImage: String,
    cardDesc: String,
    cardPrice: String,
  },
  data() {
    return {
      currentImage: this.cardImage,
      imageOpacity: 1 
    };
  },
  methods: {
    changeImage() {
      this.imageOpacity = 0;
      setTimeout(() => {
        this.currentImage = this.hoverImage;
        this.imageOpacity = 1;
      }, 200); 
    },
    restoreImage() {
      this.imageOpacity = 0;
      setTimeout(() => {
        this.currentImage = this.cardImage;
        this.imageOpacity = 1;
      }, 200);
    },
    handleClick() {
      this.$store.dispatch('selectCardDetails', {
        image: this.cardImage,
        description: this.cardDesc,
        price: this.cardPrice
      });
    },
  }
};
</script>

<style>
img {
  transition: opacity 0.3s ease-in;
}
</style>
  