<template>
    <div>
        <div class="text-center sm:text-left">
            <h1 class="text-4xl sm:text-5xl font-extrabold uppercase">{{ title }}</h1>
            <h3 class="text-lg sm:text-2xl mt-3 uppercase" style="letter-spacing: 2px;">{{ description }}</h3>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center my-10 sm:my-20">
            <div class="flex sm:flex-row space-x-10">
                <span class="mr-2 mb-2 sm:mb-0 font-black text-xs md:text-base">Filter:</span>
                <a href="#" class="mr-2 text-xs md:text-base">Availability<span class="mdi mdi-chevron-down"></span></a> 
                <a href="#" class="text-sm sm:text-base">Price <span class="mdi mdi-chevron-down"></span></a>
            </div>
            <div class="flex sm:flex-row space-x-5 md:mt-0 mt-5 text-xs md:text-base">
                <span class="mr-1 mb-2 sm:mb-0  font-black">Sort By:</span>
                <a href="#" class="mr-2 ">Date, new to old <span class="mdi mdi-chevron-down"></span></a> 
                <a href="#" class="">3 products</a>
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
        }
    }
}
</script>

<style>

</style>