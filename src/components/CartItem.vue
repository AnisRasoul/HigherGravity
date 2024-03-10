<template>
  <div class="flex justify-around items-center">
    <div>
        <div class="flex items-center">
            <div>
                <img src="https://i.imgur.com/gwutwO9.png">
            </div>

            <div>
                <h1>HigherGravity Overdyed Baggy Jeans.</h1>
                <p class="text-[#A0A0A0]">$35.50 USD</p>
                <p class="text-[#A0A0A0]">Size: XL</p>
                <p class="text-[#A0A0A0]">Color: Blue</p>
            </div>

        </div>

    </div>
    
       <CounterButton/>
  
    <div>
        <h1 class="font-extrabold">$35.50 USD</h1>
    </div>
  </div>
</template>

<script>
import CounterButton from '../components/ui/CounterButton.vue'
export default {
    components: {
        CounterButton
}, 
}
</script>

<style>

</style>