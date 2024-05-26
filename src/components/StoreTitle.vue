<template>
    <div>
        <div class="text-center sm:text-left">
            <h1 class="text-4xl sm:text-5xl font-extrabold uppercase">{{ title }}</h1>
            <h3 class="text-lg sm:text-2xl mt-3 uppercase" style="letter-spacing: 2px;">{{ description }}</h3>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center my-10 sm:my-20">
            <div class="flex sm:flex-row space-x-14 items-center">
                <span class="sm:mb-0 font-black text-xs md:text-base">Filter:</span>
                <a href="#" class="text-xs md:text-base flex items-center">Availability<span class="mdi mdi-chevron-down"></span></a> 
                <a href="#" class="text-sm sm:text-base flex items-center">Price <span class="mdi mdi-chevron-down"></span></a>
            </div>
            <div class="flex sm:flex-row space-x-8 md:mt-0 mt-5 text-xs md:text-base">
                <span class="sm:mb-0  font-black">Sort By:</span>
                <a href="#" class="flex items-center">Date, new to old <span class="mdi mdi-chevron-down"></span></a> 
                <a href="#" class="flex items-center">{{productscount}} products</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        productscount : {
            type: Number,
            required: true
        }
    }
}
</script>

<style>

</style>