<template>
  <div>
    <navbar/>
    <div class="mx-10 my-10">
      <StoreTitle :title="pageTitle" :description="pageDescription" :productscount="pants.length"/>

      <div class="flex justify-center items-center my-20 flex-wrap">
        <StoreCard v-for="pant in pants" :key="pant.id"
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
import StoreCard from '@/components/Cards/StoreCard.vue';
import StoreTitle from '@/components/StoreTitle.vue';
import router from '@/router/router';
import store from '@/store/store';

export default {
  components: {
    navbar,
    footing,
    StoreCard,
    StoreTitle
  },
  data() {
    return {
      pageTitle: 'PANTS',
      pageDescription: "Get ready to impress with our stylish PANTS!"
    }
  },
  computed: {
   pants(){
    return store.getters.pants
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
body{
    font-family: Zabal;
}
/* Add your styles here */
</style>
