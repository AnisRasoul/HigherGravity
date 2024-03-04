<template>
    <div>
      <navbar/>
      <div class="mx-20 my-10">
        <StoreTitle :title="pageTitle" :description="pageDescription"/>
  
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
      <footing/>
    </div>
  </template>
  
  <script>
  import navbar from '@/components/navbar.vue';
  import footing from '@/components/footing.vue';
  import StoreCard from '@/components/StoreCard.vue';
  import StoreTitle from '@/components/StoreTitle.vue';
  
  export default {
    components: {
      navbar,
      footing,
      StoreCard,
      StoreTitle
    },
    data() {
      return {
        cards: [
          { id: "1", cardImage:"https://i.imgur.com/LAsQyF9.png",hoverImage:"https://i.imgur.com/yiejq9a.png" , cardDesc: "HigherGravity Deadly Ghost T-SHIRT.", cardPrice: "$29.99 USD" },
          { id: "2", cardImage:"https://i.imgur.com/LNC3JVa.png",hoverImage:"https://i.imgur.com/ubyDakU.png" , cardDesc: "HigherGravity Narcissist Dominator White T-SHIRT.", cardPrice: "$20.00 USD" },
          { id: "3", cardImage:"https://i.imgur.com/YDxkpCx.png",hoverImage: "https://i.imgur.com/emlamom.png", cardDesc: "HigherGravity Playlit Paradise White T-SHIRT.", cardPrice: "$20.00 USD" },
          { id: "4", cardImage:"https://i.imgur.com/JlGcslv.png",hoverImage: "https://i.imgur.com/kNz04e9.png", cardDesc: "HigherGravity Serendipity Takers Black Washed T-SHIRT.", cardPrice: "$29.99 USD" },
          { id: "5", cardImage:"https://i.imgur.com/NDafwIv.png",hoverImage: "https://i.imgur.com/AkDUOqL.png", cardDesc: "HigherGravity Serendipity Takers Black Washed T-SHIRT.", cardPrice: "$29.99 USD" },
          { id: "6", cardImage:"https://i.imgur.com/AKer12b.png", hoverImage:"https://i.imgur.com/ENcH3j2.png" ,cardDesc: "HigherGravity Classy Vintage T-SHIRT.", cardPrice: "$20.00 USD" },
          { id: "7", cardImage:"https://i.imgur.com/iIGAgnm.png", hoverImage:"https://i.imgur.com/y8i8CbZ.png" ,cardDesc: "HigherGravity Lost Cause Vintage White T-SHIRT.", cardPrice: "$25.00 USD" },
          { id: "8", cardImage:"https://i.imgur.com/oYfOysg.png", hoverImage:"https://i.imgur.com/m6srkPT.png" ,cardDesc: "HigherGravity Ghost Kiss Dark Washed Vintage T-SHIRT.", cardPrice: "$25.00 USD" },
          { id: "9", cardImage:"https://i.imgur.com/rG3HRAH.png", hoverImage:"https://i.imgur.com/gJgg84a.png" ,cardDesc: "HigherGravity Lost Souls Dark Washed T-SHIRT.", cardPrice: "$25.00 USD" },
        ],
        pageTitle: 'T-SHIRTS',
        pageDescription: "Life's too short for boring t-shirts. Spice up your closet today!"
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  