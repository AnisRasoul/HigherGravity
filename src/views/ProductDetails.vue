<template>
  <div>
    <navbar/>
    <CardDetails class="my-20"/>
    <footing/>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import footing from '@/components/footing.vue';
import CardDetails from '@/components/CardDetails.vue';
import StoreCard from '../components/StoreCard.vue'

export default {
components: {
    navbar,footing,CardDetails,StoreCard,
},
computed: {
  selectedShirt(){
        return store.shirts((item) => item.id === Number(route.params.id))
      }
}




}
</script>
