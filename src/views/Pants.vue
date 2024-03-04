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
          { id: "1", cardImage:"https://i.imgur.com/gwutwO9.png",hoverImage:"https://i.imgur.com/qjMhbUS.png", cardDesc: "HigherGravity Flared Fit Biker Jeans.", cardPrice: "$29.99 USD" },
          { id: "2", cardImage:"https://i.imgur.com/a6kPEzM.png", hoverImage:"https://i.imgur.com/SZjD1q9.png",cardDesc: "HigherGravity Flared Fit Biker Jeans.", cardPrice: "$20.00 USD" },
          { id: "3", cardImage:"https://i.imgur.com/B9qTtSy.png ", hoverImage:"https://i.imgur.com/iyQwvh7.png",cardDesc: "HigherGravity Overdyed baggy Jeans.", cardPrice: "$20.00 USD" },
          { id: "4", cardImage:"https://i.imgur.com/PhM88th.png ", hoverImage:"https://i.imgur.com/572Glq7.png",cardDesc: "HigherGravity Baggy Fit Washed Gray Jeans.", cardPrice: "$29.99 USD" },
          { id: "5", cardImage:"https://i.imgur.com/blGADOg.png ", hoverImage:"https://i.imgur.com/X6OvVEK.png",cardDesc: "HigherGravity Flared Fit Belted Jeans.", cardPrice: "$20.00 USD" },
          { id: "6", cardImage:"https://i.imgur.com/5F1s6Kw.png ", hoverImage:"https://i.imgur.com/UvOqQRF.png",cardDesc: "HigherGravity Relaxed Ripped Jeans.", cardPrice: "$25.00 USD" },
          { id: "7", cardImage:"https://i.imgur.com/e8xdcjg.png ", hoverImage:"https://i.imgur.com/Rb8s8q8.png",cardDesc: "HigherGravity Baggy Fit Jeans.", cardPrice: "$25.00 USD" },
          { id: "8", cardImage:"https://i.imgur.com/9kfrJgn.png", hoverImage:"https://i.imgur.com/iGi7rUR.png",cardDesc: "HigherGravity Flared Fit Cargo Jeans.", cardPrice: "$25.00 USD" },
          { id: "9", cardImage:"https://i.imgur.com/ttOJCVY.png ", hoverImage:"https://i.imgur.com/WRgnFDV.png",cardDesc: "HigherGravity Baggy Fit Light Blue Jeans.", cardPrice: "$25.00 USD" },
          { id: "10", cardImage:"https://i.imgur.com/Cus9mFa.png ", hoverImage:"https://i.imgur.com/qLrR2zi.png",cardDesc: "HigherGravity Flared Fit Jeans.", cardPrice: "$25.00 USD" },
          { id: "11", cardImage:"https://i.imgur.com/iLsfzc3.png ", hoverImage:"https://i.imgur.com/f03oSuo.png",cardDesc: "HigherGravity Relaxed Fit Gray Jeans.", cardPrice: "$25.00 USD" },
          { id: "12", cardImage:"https://i.imgur.com/xA0cMUe.png ", hoverImage:"https://i.imgur.com/exI7xwO.png",cardDesc: "HigherGravity Flared Fit Washed Jeans.", cardPrice: "$25.00 USD" },
          { id: "13", cardImage:"https://i.imgur.com/kP0GQox.png ", hoverImage:"https://i.imgur.com/kP0GQox.png",cardDesc: "HigherGravity Cargo Fit Jeans.", cardPrice: "$25.00 USD" },
          

        ],
        pageTitle: 'Jeans',
        pageDescription: "Get ready to turn heads with our show-stopping JEANS!"
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  