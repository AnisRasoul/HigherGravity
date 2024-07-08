<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Toaster from '@/components/ui/toast/Toaster.vue'

</script>

<template>
  <div>
  <RouterView />
  <Toaster />
  </div>
</template>
<style>
@font-face {
  font-family: Zabal;
  src: url('@/assets/fonts/ZabalDEMO-Regular.otf');
  font-display: swap;
}

@font-face {
  font-family: Anger;
  src: url('@/assets/fonts/AngerStyles.ttf');
  font-display: swap;
}
</style>
