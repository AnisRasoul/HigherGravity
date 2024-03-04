<template>
  <div>
    <navbar/>
    <CardDetails class="my-20" @imageClicked="handleImageClicked"/>
    <footing/>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import footing from '@/components/footing.vue';
import CardDetails from '@/components/CardDetails.vue';

export default {
components: {
    navbar,footing,CardDetails,
},


}
</script>

<style>

</style>