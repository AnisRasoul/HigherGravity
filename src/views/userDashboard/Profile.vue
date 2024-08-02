<template>
  <div>
    <h1 class="text-xl font-medium underline mb-4">Personal Data and Addresses</h1>
    <Form
      ref="formRef"
      class="space-y-4 my-6 text-black"
      @submit="onSubmit"
      :validation-schema="validationSchema"
      :initial-values="initialValues"
    >
      <div class="space-y-4">
        <div class="space-y-2">
          <label class="text-lg font-bold">Contact</label>
          <Field
            name="email"
            type="email"
            placeholder="e.g., user@mail.com"
            class="text-base border border-gray-300 px-2 py-1 w-full"
          />
          <ErrorMessage name="email" class="text-red-600 text-xs" />
        </div>

        <div class="space-y-2">
          <label class="text-lg font-bold">Delivery</label>
          <Field
            name="country"
            as="select"
            class="text-base border border-gray-300 px-2 py-1 w-full"
          >
            <option value="" disabled>Select Country/Region</option>
            <option v-for="(item, index) in selectItems" :key="index" :value="item.value">
              {{ item.text }}
            </option>
          </Field>
          <ErrorMessage name="country" class="text-red-600 text-xs" />
          <div class="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <Field
              name="firstname"
              type="text"
              placeholder="First name"
              class="text-base border border-gray-300 px-2 py-1 w-full"
            />
            <ErrorMessage name="firstname" class="text-red-600 text-xs" />
            <Field
              name="lastname"
              type="text"
              placeholder="Last name"
              class="text-base border border-gray-300 px-2 py-1 w-full"
            />
            <ErrorMessage name="lastname" class="text-red-600 text-xs" />
          </div>
          <div class="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <div class="relative w-full">
              <Field
                name="address"
                type="search"
                placeholder="Address"
                class="text-base border border-gray-300 px-2 py-1 pl-8 w-full"
              />
            </div>
            <ErrorMessage name="address" class="text-red-600 text-xs" />
            <Field
              name="postalCode"
              type="text"
              placeholder="Postal code"
              class="text-base border border-gray-300 px-2 py-1 w-full"
            />
            <ErrorMessage name="postalCode" class="text-red-600 text-xs" />
            <Field
              name="city"
              type="text"
              placeholder="City"
              class="text-base border border-gray-300 px-2 py-1 w-full"
            />
            <ErrorMessage name="city" class="text-red-600 text-xs" />
          </div>
          <div class="relative">
            <Field
              name="phoneNumber"
              type="tel"
              placeholder="Phone number"
              class="text-base border border-gray-300 px-2 py-1 pl-8 w-full"
            />
            <ErrorMessage name="phoneNumber" class="text-red-600 text-xs" />
          </div>
        </div>

        <button
          type="submit"
          :disabled="!isFormChanged"
          :class="[
            'rounded py-3 w-full text-lg',
            isFormChanged ? 'bg-primary text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
          ]"
        >
          Update Profile
        </button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage ,useForm ,useIsFormDirty,useIsFormValid   } from 'vee-validate';
import * as yup from 'yup';
import user from '@/store/modules/user';
import isEqual from 'lodash/isEqual';

export default {
  /* 
  combine composition api with options api to check if the formisValid if it returns false disable the button
  setup() {
    const isDirty = useIsFormDirty();
    const isValid = useIsFormValid();

    return {
      isDirty,
      isValid
    };
  },*/
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
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
      initialFormValues: {},
    };
  },
  computed: {
    user() {
      return user.state.user;
    },
    validationSchema() {
      return yup.object({
        email: yup.string().required('Required field').email('Enter a valid email'),
        country: yup.string().required('Required field'),
        firstname: yup.string().required('Required field').min(2).max(20),
        lastname: yup.string().required('Required field').min(2).max(20),
        address: yup.string().required('Required field'),
        postalCode: yup.string().required('Required field'),
        city: yup.string().required('Required field'),
        phoneNumber: yup.string().matches(this.PhoneReg, 'Phone number is not valid').required('Required'),
      });
    },
    initialValues() {
      return {
        email: this.user.email || '',
        country: this.user.country || '',
        firstname: this.user.firstname || '',
        lastname: this.user.lastname || '',
        address: this.user.address || '',
        postalCode: this.user.postalCode || '',
        city: this.user.city || '',
        phoneNumber: this.user.phoneNumber || '',
      };
    },
    isFormChanged() {
      return !isEqual(this.$refs.formRef?.values, this.initialFormValues);
    },
  },
  mounted() {
    this.initialFormValues = { ...this.$refs.formRef.meta.initialValues };
    this.$watch(
      () => this.$refs.formRef?.values,
      (newValues) => {
        console.log('Form values changed:', this.isFormChanged);
      },
      { deep: true }
    );
   // console.log(this.isValid);
   // console.log(this.isDirty);
  },
  methods: {
    onSubmit(values) {
      this.$store.dispatch('updateuserDATA', values);
    }
  },
};
</script>





<style>
</style>
