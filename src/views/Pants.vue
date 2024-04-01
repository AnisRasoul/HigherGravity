<template>
    <div>
      <navbar/>
      <div class="mx-20 my-10">
        <StoreTitle :title="pageTitle" :description="pageDescription"/>
  
        <div class="flex justify-center items-center my-20 flex-wrap">
          <StoreCard v-for="pant in $store.state.pants" :key="pant.id"
            :card-image="pant.cardImage"
            :hover-image="pant.hoverImage" 
            :card-desc="pant.cardDesc"
            :card-price="pant.cardPrice"
            @click="goToProductPage(pant.id)"
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
  import StoreCard from '@/components/ui/StoreCard.vue';
  import StoreTitle from '@/components/StoreTitle.vue';
  import router from '@/router';
  
  export default {
    components: {
      navbar,
      footing,
      StoreCard,
      StoreTitle
    },
    data() {
      return {
       
        pageTitle: 'Jeans',
        pageDescription: "Get ready to turn heads with our show-stopping JEANS!"
      }
    },

    methods: {
      goToProductPage(id) {
        router.push({ name: 'productdetails', params: { id } })
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  