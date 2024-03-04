<template>
    <div class="bg-white" >
      <div class="flex max-w-4xl mx-auto">
        <div class="flex flex-col space-y-4">
          <img
            alt="T-shirt with graphic"
            class="w-[300px] h-[400px] object-cover bigimg"
            height="400"
            src=""
            width="300"
          />
          <div class="grid grid-cols-4 gap-2">
            <img
              alt="T-shirt thumbnail"
              class="w-[75px] h-[100px] object-cover smallimg"
              height="100"
              src=""
             
              width="75"
            />
            <img
              alt="T-shirt thumbnail"
              class="w-[75px] h-[100px] object-cover"
              height="100"
              src=""
            
              width="75"
            />
            <img
              alt="T-shirt thumbnail"
              class="w-[75px] h-[100px] object-cover"
              height="100"
              src=""
             
              width="75"
            />
            <img
              alt="T-shirt thumbnail"
              class="w-[75px] h-[100px] object-cover"
              height="100"
              src=""
            
              width="75"
            />
          </div>
        </div>
        <div class="flex flex-col pl-8">
          <h1 class="text-3xl font-bold">{{ DetailDesc }}</h1>
          <p class="mt-4 text-sm text-gray-600">
            Semi-oversized fit, screen printed graphic and embroidery detail at front. Cinder label with HIGHERGRAVITY
            zigzag embroidery.
          </p>
          <div class="mt-4">
            <p class="text-lg font-semibold">Price:</p>
            <p class="text-lg">{{ DetailPrice }}</p>
          </div>
          <div class="mt-4">
            <p class="text-lg font-semibold">Select Size:</p>
            <div class="flex space-x-5 my-1">
              <Button class="bg-white text-dark p-2 px-5 border border-black rounded hover:bg-black hover:text-white">XS</Button>
              <Button class="bg-white text-dark p-2 px-5 border border-black rounded hover:bg-black hover:text-white">S</Button>
              <Button class="bg-white text-dark p-2 px-5 border border-black rounded hover:bg-black hover:text-white">M</Button>
              <Button class="bg-white text-dark p-2 px-5 border border-black rounded hover:bg-black hover:text-white">L</Button>
              <Button class="bg-white text-dark p-2 px-5 border border-black rounded hover:bg-black hover:text-white">XL</Button>
              <Button class="bg-white text-dark p-2 px-5 border border-black rounded hover:bg-black hover:text-white">2XL</Button>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-lg font-semibold">Quantity:</p>
            <div class="flex items-center space-x-10">
                <div class="flex space-x-5 items-center bg-white text-black py-2 border border-black font-extrabold">

                    <button @click="decrement" class="text-black p-2 px-5 rounded">-</button>
                     <p class="text-lg">{{ count }}</p>
                    <button @click="increment" class="text-black p-2 px-5 rounded">+</button>
                </div>
              <Button class="bg-white text-black px-16 py-2 border border-black font-extrabold"> <span class="mdi mdi-cart-outline mr-3 text-lg"></span>Add to Cart</Button>
            </div>
          </div>
          <div class="flex space-x-4 mt-4">
            <Button class="bg-black text-white px-40 py-5 font-extrabold text-2xl" style="letter-spacing: 2px;">BUY IT NOW</Button>
          </div>
          <div class="flex space-x-10 mt-4">
           
            <p class="text-sm underline">  <span class="mdi mdi-export-variant"></span>Share</p>
            <p class="text-sm underline">SHIPPING POLICY</p>
          
          </div>
         
        </div>
      </div>
      <h1 class="text-black text-3xl underline flex justify-center font-extrabold mt-20 uppercase" style="letter-spacing: 2px;">You May also like</h1>
      <div class="flex justify-center items-center my-20 flex-wrap">
          <StoreCard v-for="card in cards" :key="card.id"
            :card-image="card.cardImage"
            :hover-image="card.hoverImage" 
            :card-desc="card.cardDesc"
            :card-price="card.cardPrice"
            class="mx-5 my-5 sm:w-1/2 lg:w-1/3"
          />
        </div>
    </div>
</template>

<script>
import StoreCard from '@/components/StoreCard.vue'
export default {
components: {
    StoreCard
},
data() {
      return {
        DetailImage:'',
        DetailDesc:'',
        DetailPrice:'',
       
        count:1
      }
    },
methods: {
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
        handleImageClicked(cardImage, cardDesc, cardPrice) {
          this.DetailDesc = cardDesc,
          this.DetailPrice = cardPrice,
          this.DetailImage = cardImage
      },
      
 }
 }
</script>

<style>
body{
    font-family: Zabal;
}
.bigimg{
    aspect-ratio: 300/400;
    object-fit: cover;
}
.smallimg{
    aspect-ratio: 75/100;
    object-fit: cover;
}
</style>