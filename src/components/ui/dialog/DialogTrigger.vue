<script setup>
import { DialogTrigger } from "radix-vue";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
</script>

<template>
  <DialogTrigger v-bind="props" class="bg-black text-white px-6 py-2 rounded-[25px]">
    <slot />
  </DialogTrigger>
</template>
