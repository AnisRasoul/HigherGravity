<template>
    <div>
        <navbar/>
        <div class="mx-20 my-10">
           <StoreTitle :title="pageTitle" :description="pageDescription"/>
            <div class="flex justify-center items-center my-20 flex-wrap sm:flex-nowrap">
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
    components:{
        navbar, footing, StoreTitle, StoreCard
    },
    data() {
        return {
            cards:[
                { id: "1", cardImage:"https://i.imgur.com/4VIBsSW.png", hoverImage: "https://i.imgur.com/IR7GgQx.png", cardDesc: "HigherGravity classy light blue shirt.", cardPrice: "$29.99 USD", },
                { id: "2", cardImage:"https://i.imgur.com/t6Iakck.png", hoverImage: "https://i.imgur.com/HGxFEfE.png", cardDesc: "HigherGravity dark blue ocean jersey.", cardPrice: "$25.00 USD", },
                { id: "3", cardImage:"https://i.imgur.com/MONyixl.png", hoverImage: "https://i.imgur.com/sb6AqDJ.png", cardDesc: "HigherGravity Retro Sport Beige Shirt.", cardPrice: "$25.00 USD", },
            ],
            pageTitle: 'NEW IN',
            pageDescription: "BE THE FIRST TO SHINE, DISCOVER WHAT'S NEW IN HIGHER GRAVITY!"
        }
    },
}
</script>

<style>
body{
    font-family: Zabal;
}
</style>
