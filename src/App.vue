<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
  <RouterView />
  </div>
</template>
<style>
.body {
  font-family: 'Zabal', sans-serif;
}
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
