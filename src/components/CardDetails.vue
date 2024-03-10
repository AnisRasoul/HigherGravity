<template>
    <div class="bg-white" >
      <div class="md:flex max-w-4xl mx-auto items-center">
        <div class="flex flex-col space-y-4 items-center">

          <img alt="T-shirt with graphic" class="md:w-[530px] md:h-[300px" src="https://i.imgur.com/kNz04e9.png" width="300" />
          <div class="md:grid grid-cols-4 gap-2 hidden">
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
          <h1 class="text-3xl font-bold">{{ cardDesc }}</h1>
          <p class="mt-4 text-sm text-gray-600">
            Semi-oversized fit, screen printed graphic and embroidery detail at front. Cinder label with HIGHERGRAVITY
            zigzag embroidery.
          </p>
          <div class="mt-4">
            <p class="text-lg font-semibold">Price:</p>
            <p class="text-lg">{{ cardPrice}}</p>
          </div>
          <div class="mt-4">
            <p class="text-lg font-semibold">Select Size:</p>
            <div class="flex space-x-5 my-1">
              <Button class="bg-white text-dark p-2 md:px-5 px-3 border border-black rounded hover:bg-black hover:text-white">XS</Button>
              <Button class="bg-white text-dark p-2 md:px-5 px-3 border border-black rounded hover:bg-black hover:text-white">S</Button>
              <Button class="bg-white text-dark p-2 md:px-5 px-3 border border-black rounded hover:bg-black hover:text-white">M</Button>
              <Button class="bg-white text-dark p-2 md:px-5 px-3 border border-black rounded hover:bg-black hover:text-white">L</Button>
              <Button class="bg-white text-dark p-2 md:px-5 px-3 border border-black rounded hover:bg-black hover:text-white">XL</Button>
              <Button class="bg-white text-dark p-2 md:px-5 px-3 border border-black rounded hover:bg-black hover:text-white">2XL</Button>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-lg font-semibold">Quantity:</p>
            <div class="flex items-center space-x-10">
                <CounterButton/>
              <Button class="bg-white text-black md:px-16 px-8 md:py-2 py-3 border border-black font-extrabold"> <span class="mdi mdi-cart-outline mr-3 text-lg"></span>Add to Cart</Button>
            </div>
          </div>
          <div class="flex space-x-4 mt-4">
            <Button class="bg-black text-white md:px-40 px-32 py-5 font-extrabold md:text-2xl" style="letter-spacing: 2px;">BUY IT NOW</Button>
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
import StoreCard from '../components/StoreCard.vue'
import CounterButton from '../components/ui/CounterButton.vue'
export default {

  components:{
    StoreCard, CounterButton
  },

data() {
  return {
    cards:[
      { id: "1", cardImage:"https://i.imgur.com/4VIBsSW.png", hoverImage: "https://i.imgur.com/IR7GgQx.png", cardDesc: "HigherGravity classy light blue shirt.", cardPrice: "$29.99 USD", },
      { id: "2", cardImage:"https://i.imgur.com/t6Iakck.png", hoverImage: "https://i.imgur.com/HGxFEfE.png", cardDesc: "HigherGravity dark blue ocean jersey.", cardPrice: "$25.00 USD", },
      { id: "3", cardImage:"https://i.imgur.com/MONyixl.png", hoverImage: "https://i.imgur.com/sb6AqDJ.png", cardDesc: "HigherGravity Retro Sport Beige Shirt.", cardPrice: "$25.00 USD", },
      ],
  }
},


  }

</script>

<style>
body{
    font-family: Zabal;
}

.smallimg{
    aspect-ratio: 75/100;
    object-fit: cover;
}
</style>