<template>
  <div>
    <navbar/>
    <div class="mx-20 my-10">
      <StoreTitle :title="pageTitle" :description="pageDescription"/>

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
import router from '@/router';
import { mapState } from 'vuex';

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
    ...mapState({
      products: state => state.products
    }),
    pants() {
      return this.products.find(category => category.category === 'pants').items;
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
/* Add your styles here */
</style>
