
<template>
    <a :href="href" class= "bg-white text-black border-2 border-black text-xl md:text-3xl px-5 md:px-10 md:py-2 inline-block mt-5 hover:bg-black hover:text-white hover:border-white uppercase">
      <slot></slot>
    </a>
  </template>
  
  <script>
  export default {
    props: {
      href: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  