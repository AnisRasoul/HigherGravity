<template>
    <div>
      <navbar/>
      <div class="mx-20 my-10">
        <StoreTitle :title="pageTitle" :description="pageDescription"/>
  
        <div class="flex justify-center items-center my-20 flex-wrap">
          <StoreCard v-for="shirt in shirts" :key="shirt.id"
            :card-image="shirt.cardImage"
            :hover-image="shirt.hoverImage" 
            :card-desc="shirt.cardDesc"
            :card-price="shirt.cardPrice"
            @click="goToProductPage"
            class="mx-5 my-5 sm:w-1/2 lg:w-1/3"
          />
        </div>
      </div>
      <footing/>
    </div>
  </template>
  
  <script>
  import navbar from '@/components/navbar.vue';
  import footing from '@/components/footing.vue';
  import StoreCard from '@/components/StoreCard.vue';
  import StoreTitle from '@/components/StoreTitle.vue';

  
  export default {
    components: {
      navbar,
      footing,
      StoreCard,
      StoreTitle
    },
    data() {
      return {
        pageTitle: 'T-SHIRTS',
        pageDescription: "Life's too short for boring t-shirts. Spice up your closet today!"
      }
    },
    computed:{
      shirts(){
        return this.$store.state.shirts
      }
    },

  }
  </script>
  
  <style>
  
  </style>
  