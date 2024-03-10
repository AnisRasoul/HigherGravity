<template>
 <div class="flex space-x-5 items-center bg-white text-black py-2 border border-black font-extrabold">

        <button @click="decrement" class="text-black p-2 px-5 rounded">-</button>
            <p class="text-lg">{{ count }}</p>
        <button @click="increment" class="text-black p-2 px-5 rounded">+</button>
</div>
</template>

<script>
export default {
data() {
    return {
        count: 1,
    }
},
methods:{
    increment() {
          if (this.count < 15) {
            this.count++;
          }
        },
        decrement() {
          if (this.count > 1) {
            this.count--;
          }
        },

    }
}
</script>
