<template>
  <div>
    <navbar/>
    <div class="md:grid md:grid-cols-2 md:mx-20 mx-10 my-10 border-t border-[#A0A0A0]">
      <div class="md:border-r md:border-[#A0A0A0]">
        <div class="md:flex items-center space-x-5 md:mt-24 hidden">
          <button class="rounded px-10 py-3 bg-[#FFD159]"><img src="../assets/icons/paypal.svg" alt="Paypal"></button>
          <button class="bg-[#1434CB] rounded px-12 py-3"><img src="../assets/icons/visa.svg" alt="Visa"></button>
          <button class="bg-black rounded px-12 py-2"><img src="../assets/icons/gpay.svg" alt="Gpay"></button>
        </div>

        <Form class="md:w-2/3 space-y-6 my-10" @submit="onSubmit" :validation-schema="validationSchema">
          <div class="space-y-6">
            <div class="mb-6">
              <label class="text-2xl font-[Zabal] font-bold">Contact</label>
              <Field name="email" type="email" placeholder="eg: user@mail.com" class="text-xl border border-black px-3 py-2 w-full"/>
              <ErrorMessage name="email" class="text-red-700 text-sm" />
              <div class="flex items-center space-x-2 mt-2">
                <Field name="newsAndOffers" type="checkbox" id="terms" />
                <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email me with news and offers
                </label>
              </div>
              <ErrorMessage name="newsAndOffers"  class="text-red-700 text-sm"/>
            </div>

            <div>
              <label class="text-2xl font-[Zabal] font-bold">Delivery</label>
              <div class="mt-2">
                <Field name="country" class="text-xl border border-black px-3 py-2 w-full" as="select">
                  <option value="" disabled selected>Country/Region</option>
                  <option v-for="(item, index) in selectItems" :key="index" :value="item.value">
                    {{ item.text }}
                  </option>
                </Field>
                <ErrorMessage name="country" class="text-red-700 text-sm" />
              </div>
              <div class="md:flex md:space-x-10 md:space-y-0 space-y-2 md:my-6 my-3">
                <div class="md:flex items-center space-x-3">
                <Field name="firstname" type="text" placeholder="First name" class="text-xl border border-black px-3 py-2 w-full" />
                <ErrorMessage name="firstname" class="text-red-700 text-sm" />
                </div>
                <div class="md:flex items-center space-x-3">  
                  <Field name="lastname" type="text" placeholder="Last name" class="text-xl border border-black px-3 py-2 w-full" />
                <ErrorMessage name="lastname" class="text-red-700 text-sm" /></div>
             
              </div>
              <div class="md:flex items-center space-x-3  ">
                <div class="relative w-full max-w-sm items-center mt-2">
                  <Field name="address" id="search" type="search" placeholder="Address" class="text-xl border border-black px-3 py-2 pl-10 w-full" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <Search class="size-4 text-muted-foreground" />
                  </span>
                </div> 
                <ErrorMessage name="address" class="text-red-700 text-sm" />
              </div>
              <div class="md:flex md:space-x-5 mt-2 items-center">
                <Field name="postalCode" type="text" placeholder="Postal code" class="text-xl border border-black px-3 py-2 w-full" />
                <ErrorMessage name="postalCode" class="text-red-700 text-sm" />
                <Field name="city" type="text" placeholder="City" class="text-xl border border-black px-3 py-2 w-full" />
                <ErrorMessage name="city" class="text-red-700 text-sm" />
              </div>
              <div class="relative md:w-[68%] items-center mt-2">
                <Field name="phoneNumber" type="tel" placeholder="phone number" class="text-xl border border-black px-3 py-2 pl-10 w-full" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                  <Info class="size-4 text-muted-foreground" />
                </span>
              </div>
              <ErrorMessage name="phoneNumber" class="text-red-700 text-sm"/>
            </div>
          </div>

          <div class="mt-6">
            <h1 class="font-bold text-2xl">Shipping method</h1>
            <div class="flex items-center md:space-x-20 my-5">
              <p>Enter your shipping address to view available shipping methods.</p>
              <Info class="md:size-4 size-10 text-muted-foreground" />
            </div>
            <h1 class="font-bold text-2xl">Payment</h1>
            <p class="my-5">All transactions are secure and encrypted.</p>
            <div class="font-[Zabal]">
              <div class="border border-[#A0A0A0] flex items-center justify-between md:w-[68%] py-5 px-5">
                <div class="flex items-center space-x-2">
                  <input type="radio" id="r1" name="paymentMethod" value="default" />
                  <label for="r1">Receiving using Yalidine EXPRESS</label>
                </div>
                <img src="../assets/icons/yalidine.svg" alt="Yalidine">
              </div>

              <div class="border border-[#A0A0A0] flex items-center justify-between md:w-[68%] py-5 px-5">
                <div class="flex items-center space-x-2">
                  <input type="radio" id="r2" name="paymentMethod" value="comfortable" checked />
                  <label for="r2">PayPal</label>
                </div>
                <img src="../assets/icons/paypal.svg" class="h-6" alt="PayPal">
              </div>

              <div class="border border-[#A0A0A0] flex items-center justify-between md:w-[68%] py-5 px-5">
                <div class="flex items-center space-x-2">
                  <input type="radio" id="r3" name="paymentMethod" value="compact" />
                  <label for="r3">Home delivery</label>
                </div>
                <Home/>
              </div>
              
              <Collapsible v-model="isOpen" >
               <div class="border border-[#A0A0A0] flex items-center justify-between md:w-[68%] py-5 px-5">
               
               
                   <CollapsibleTrigger class="flex items-center space-x-2">
                  <input type="radio" id="r4" name="paymentMethod" value="Creditcard" />
                  <label for="r4">Credit card</label>
                   </CollapsibleTrigger>
                <div class="flex items-center">
                  <img src="../assets/footer-pay/visa-logo.svg" alt="Visa">
                  <img src="../assets/footer-pay/obl.svg" alt="OBL">
                  <img src="../assets/footer-pay/AMEX.svg" alt="AMEX">
                </div>
              </div>  
                <CollapsibleContent class="border border-[#A0A0A0] md:w-[68%]">
                <div class="p-4 space-y-3 text-sm">
                  <div class="relative items-center mt-2">
                <Field name="phoneNumber" type="tel" placeholder="Card number" class=" border border-black px-3 py-2 pl-10 w-full" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                  <Info class="size-4 text-muted-foreground" />
                </span>
              </div>
              <ErrorMessage name="phoneNumber" class="text-red-700 text-sm"/>
              <div class="md:flex md:space-x-5 md:space-y-0 space-y-3 mt-2 items-center">
                <Field name="postalCode" type="text" placeholder="Expires on" class=" border border-black px-3 py-2 w-full" />
                <ErrorMessage name="postalCode" class="text-red-700 text-sm" />
                <Field name="city" type="text" placeholder="Security code" class=" border border-black px-3 py-2 w-full" />
                <ErrorMessage name="city" class="text-red-700 text-sm" />
              </div>
              <div class="relative items-center mt-2">
                <Field name="phoneNumber" type="tel" placeholder="Name on card" class=" border border-black px-3 py-2 pl-10 w-full" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                  <Info class="size-4 text-muted-foreground" />
                </span>
              </div>
              <ErrorMessage name="phoneNumber" class="text-red-700 text-sm"/>
              <div class="flex items-center space-x-2 mt-2">
                <Field name="newsAndOffers" type="checkbox" id="terms" v-model="newsAndOffers" />
                <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                 use shipping address as billing address
                </label>
              </div>
            </div>
               </CollapsibleContent>
              </Collapsible>
             
            </div>
          </div>

          <div class="my-5">
            <h1 class="font-bold text-2xl">Remember me</h1>
            <div class="md:w-[68%] py-5 px-5 border border-[#A0A0A0] flex items-center space-x-3 my-3">
              <input type="checkbox" id="remember" />
              <label for="remember" class="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Save my information for a faster checkout
              </label>
            </div>
          </div>
          <button class="rounded py-5 bg-[#47A6FF] md:w-[68%] w-full text-white text-2xl" @click="Purchase">Pay now</button>
        </Form>
      </div>

      <div class="my-10">
        <div v-if="!cartProduct.length" class="flex flex-col items-center justify-center my-10">
  <h1 class="md:text-6xl text-3xl font-[Zabal] text-center">Empty Cart ...</h1>
</div>
<div v-else>
  <div>
    <CartItem v-for="item in cartProduct" class="my-16 text-sm"
    :key="item.id" 
    :item="item" 
    :cardImage="item.cardImage"
    :cardId="item.id" 
    :cardDesc="item.cardDesc" 
    :cardPrice="item.totalPrice"
    :cardSize ="item.size"
    :cardColor="item.color"
    :cardQuantity="item.quantity"
    />
  </div>
</div>
        <div class="flex md:w-[90%] items-center md:ml-16 space-x-4 text-[#151516]">
    <input type="text" placeholder="Discount code" class="border border-[#A0A0A0] md:text-2xl md:py-7 " />
    <button type="submit" class="border border-[#A0A0A0] rounded md:py-7 md:px-12 py-2 px-5 md:text-2xl" >
      Apply
    </button>
  </div>
  <div class="md:w-[90%] my-5 space-y-4 flex flex-col justify-center md:ml-16 space-x-4 text-[#151516]">
  
    <div class="flex items-center justify-between">
      <h1>Shipping</h1>
      <h1>Enter shipping address</h1>
    </div>
    <div class="flex items-center justify-between">
      <h1>Total</h1>
      <h1 class="font-bold">${{subtotal}} USD</h1>
    </div>
  </div>
      </div>
    </div>
    <footing/>
  </div>
</template>

<script>
import { Home, Phone } from 'lucide-vue-next';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import navbar from '../components/navbar.vue';
import footing from '../components/footing.vue';
import CartItem from '@/components/Cards/CartItem.vue';
import { Search } from 'lucide-vue-next';
import { Info } from 'lucide-vue-next';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';
import Purchases from './userDashboard/Purchases.vue';

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    navbar,
    footing,
    CartItem,
    Search,
    Info,
    Home,
    RadioGroup,
    RadioGroupItem,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  },
  computed: {
    cartProduct() {
      return this.$store.state.cart;
    },
    subtotal() {
      return this.cartProduct.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
    },
    validationSchema() {
      return yup.object({
        email: yup.string().required('required field').email('Enter a valid email'),
        country: yup.string().required('required field'),
        firstname: yup.string().required('required field').min(2).max(20),
        lastname: yup.string().required('required field').min(2).max(20),
        address: yup.string().required('Address is required'),
        postalCode: yup.string().required('required field'),
        city: yup.string().required('required field'),
        phoneNumber: yup.string().matches(this.PhoneReg, 'Phone number is not valid').required('Required'),
      });
    },
  },
  data() {
    return {
      isOpen: ref(false),
      selectItems: [
        { value: 'algeria', text: 'Algeria' },
        { value: 'france', text: 'France' },
        { value: 'united-states', text: 'United States' },
        { value: 'united-kingdom', text: 'United Kingdom' },
        { value: 'germany', text: 'Germany' },
        { value: 'spain', text: 'Spain' },
        { value: 'tunisia', text: 'Tunisia' },
        { value: 'morocco', text: 'Morocco' },
      ],
      PhoneReg: /^(00213|\+213|0)(5|6|7)[0-9]{8}$/,
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
    Purchase() {
    const purchases = this.$store.state.cart; 
     this.$store.dispatch('addToPurchased', purchases);
     console.log(this.$store.state.purchased);
    },
  },
};
</script>

