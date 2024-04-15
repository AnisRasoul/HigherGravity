<template>
  <div>
    <navbar/>
    <div class="grid grid-cols-2 mx-20 my-10 border-t border-[#A0A0A0]">
      <div class="border-r border-[#A0A0A0]">
        <div class="flex items-center space-x-5 mt-24">
          <button class="rounded px-10 py-3 bg-[#FFD159]"><img src="../assets/icons/paypal.svg"></button>
          <button class="bg-[#1434CB] rounded px-12 py-3"><img src="../assets/icons/visa.svg"></button>
          <button class="bg-black rounded px-12 py-2"><img src="../assets/icons/gpay.svg"></button>
        </div>
    
        <form class="w-2/3 space-y-6 my-10" @submit="onSubmi">
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel class="text-2xl font-[Zabal] font-bold">Contact</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter input" v-bind="componentField" />
              </FormControl>
              <Checkbox id="terms" />
              <label
                for="terms"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email me with news and offers
              </label>
              <FormMessage />
            </FormItem>
          </FormField>
        </form>

        <form class="w-2/3 space-y-6 my-10" @submit="onSubmi">
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel class="text-2xl font-[Zabal] font-bold">Delivery</FormLabel>
              <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Country/Region" />
            </SelectTrigger>
            <div class="flex space-x-5 items-center">
              <Input type="text" placeholder="First name" />
              <Input type="text" placeholder="Last name" />
            </div>
            <div class="relative w-full max-w-sm items-center">
            <Input id="search" type="search" placeholder="Address" class="pl-10" />
            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
             <Search class="size-4 text-muted-foreground" />
             </span>
             </div>

             <div class="flex space-x-5 items-center">
              <Input type="email" placeholder="Postal code" />
              <Input type="email" placeholder="City" />
            </div>

            <div class="relative w-[68%] items-center">
            <Input type="tel" placeholder="Enter your phone number" class="pl-10" />
            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
             <Info class="size-4 text-muted-foreground" />
             </span>
             </div>
          </FormControl>
          <SelectContent class="bg-white text-black border">
    <SelectGroup class="border border-[#A0A0A0]">
      <!-- Iterate over selectItems array using v-for -->
      <SelectItem v-for="(item, index) in selectItems" :key="index" :value="item.value">
        {{ item.text }}
      </SelectItem>
    </SelectGroup>
  </SelectContent>
        </Select>

            </FormItem>
          </FormField>
        </form>
        <h1 class="font-bold text-2xl">Shipping method</h1>
        <div class="flex items-center space-x-20 my-5">
          <p>Enter your shipping address to view available shipping methods.</p>
          <Info class="size-4 text-muted-foreground" />
        </div>
        <h1 class="font-bold text-2xl">Payment</h1>
        <p class="my-5">All transactions are secure and encrypted.</p>
      <RadioGroup default-value="comfortable" class="font-[Zabal]">

    <div class="border border-[#A0A0A0] flex items-center justify-between w-[68%] py-5 px-5">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="r1" value="default" />
      <Label for="r1">Receiving using Yalidine EXPRESS</Label>
    </div>
    <img src="../assets/icons/yalidine.svg" alt="">
    </div>

    <div class="border border-[#A0A0A0] flex items-center space-x- justify-between w-[68%] py-5 px-5">
  <div class="flex items-center space-x-2">
    <RadioGroupItem id="r2" value="comfortable" />
    <Label for="r2">PayPal</Label>
  </div>
  <img src="../assets/icons/paypal.svg" class="h-6">
</div>

<div class="border border-[#A0A0A0] flex items-center space-x- justify-between w-[68%] py-5 px-5">
  <div class="flex items-center space-x-2">
    <RadioGroupItem id="r3" value="compact" />
    <Label for="r3">Home delivery</Label>
  </div>
  <Home class="size-7 text-muted-foreground"/>
</div>


<div class="border border-[#A0A0A0] flex items-center space-x- justify-between w-[68%] py-5 px-5">
  <div class="flex items-center space-x-2">
    <RadioGroupItem id="r4" value="Creditcard" />
    <Label for="r4">Credit card</Label>
  </div>
  <div class="flex items-center">
    <img src="../assets/footer-pay/visa-logo.svg">
    <img src="../assets/footer-pay/obl.svg" >
    <img src="../assets/footer-pay/AMEX.svg" >
  </div>
</div>

  </RadioGroup>
  <div class="my-5">
    <h1 class="font-bold text-2xl">Remember me</h1>
    <div class="w-[68%] py-5 px-5 border border-[#A0A0A0] flex  items-center space-x-3 my-3">
    <Checkbox id="terms" />
              <label
                for="terms"
                class=" font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
              Save my informations for a faster checkout
              </label>
    </div>
    <button class="rounded py-5 bg-[#47A6FF] w-[68%] text-white text-2xl">Pay now</button>
  </div>
      </div>
      
      
      <div class="my-10">
        <div v-if="!cartProduct.length" class="flex flex-col items-center justify-center my-10">
  <h1 class="md:text-6xl text-3xl font-[Zabal] text-center">Empty Cart ...</h1>
</div>
<div v-else>
  <div>
    <CartItem v-for="item in cartProduct" class="my-16"
    :key="item.id" 
    :item="item" 
    :cardImage="item.cardImage"
    :cardId="item.id" 
    :cardDesc="item.cardDesc" 
    :cardPrice="item.cardPrice"/>
  </div>
</div>
        <div class="flex w-[90%] items-center ml-16 space-x-4 text-[#151516]">
    <Input type="text" placeholder="Discount code" class="border border-[#A0A0A0] text-2xl py-7" />
    <Button type="submit" class="border border-[#A0A0A0] rounded py-7 px-12 text-2xl" >
      Apply
    </Button>
  </div>
  <div class="w-[90%] my-5 space-y-4 flex flex-col justify-center ml-16 space-x-4 text-[#151516]">
    <div class="flex items-center justify-between">
      <h1>Subtotal</h1>
      <h1>$65,49 USD</h1>
    </div>
    <div class="flex items-center justify-between">
      <h1>Shipping</h1>
      <h1>Enter shipping address</h1>
    </div>
    <div class="flex items-center justify-between">
      <h1>Total</h1>
      <h1>$65,49 USD</h1>
    </div>
  </div>
      </div>
    </div>

    <footing/>
  </div>
</template>

<script>
  import { Home } from 'lucide-vue-next';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import navbar from '../components/navbar.vue'
import footing from '../components/footing.vue'
import CartItem from '@/components/Cards/CartItem.vue';
import { Search } from 'lucide-vue-next'
import { Info } from 'lucide-vue-next'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
export default {
  components: {
    navbar,
    footing,
    CartItem,
    Button,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Checkbox,
    Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Search,
  Info,Home,
  RadioGroup, RadioGroupItem
  },
  computed: {
    cartProduct() {
      return this.$store.state.cart;
    }
  },
  data() {
    return {
      selectItems:[
        { value: 'algeria', text: 'Algeria' },
  { value: 'france', text: 'France' },
  { value: 'united-states', text: 'United States' },
  { value: 'united-kingdom', text: 'United Kingdom' },
  { value: 'germany', text: 'Germany' },
  { value: 'spain', text: 'Spain' },
  { value: 'tunisia', text: 'Tunisia' },
  { value: 'morocco', text: 'Morocco' }
]
    }
  },
}
</script>

<style>
/* Add your styles here */
</style>
