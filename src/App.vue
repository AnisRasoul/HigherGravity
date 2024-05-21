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
