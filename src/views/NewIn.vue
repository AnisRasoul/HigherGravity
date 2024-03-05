<template>
    <div>
        <navbar/>
        <div class="mx-20 my-10">
           <StoreTitle :title="pageTitle" :description="pageDescription"/>
            <div class="flex justify-center items-center my-20 flex-wrap sm:flex-nowrap">
                <StoreCard v-for="card in newcards" :key="card.id"
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

            pageTitle: 'NEW IN',
            pageDescription: "BE THE FIRST TO SHINE, DISCOVER WHAT'S NEW IN HIGHER GRAVITY!"
        }
    },
    computed:{
        newcards(){
            return this.$store.state.newcards
        }
    }
}
</script>

<style>
body{
    font-family: Zabal;
}
</style>
