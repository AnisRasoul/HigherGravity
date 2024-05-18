<template>
    <Form @submit="handleSubmit">
      <div
        v-for="{ as, name, label, icon, placeholder, type, ...attrs } in schema.fields"
        :key="name"
        class="space-y-5 md:w-[50%] w-full mx-auto my-10"
      >
        <div class="flex items-center space-x-3 border border-black px-6 rounded-[5px]">
          <component :is="icon" />
          <Field :as="as" :id="name" :name="name" v-bind="attrs" :placeholder="placeholder" :type="type" class="text-xl border-none outline-none w-full" />
        </div>
        <ErrorMessage :name="name" class="text-red-500" />
      </div>
      <slot name="submit-button">
        <!-- Default button if slot is not provided -->
        <button class="bg-black text-white text-xl font-semibold w-[40%]" type="submit">Submit</button>
      </slot>
    </Form>
  </template>
  
  <script>
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'DynamicForm',
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    props: {
      schema: {
        type: Object,
        required: true,
      },
    },
    methods: {
      handleSubmit(values) {
        this.$emit('submit', values);
      }
    }
  });
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  