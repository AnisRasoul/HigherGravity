<template>
  <Form @submit="handleSubmit">
    <div
      v-for="{ as, name, label, icon, placeholder, type, options, ...attrs } in schema.fields"
      :key="name"
      class="space-y-5 md:w-[50%] w-full mx-auto my-5"
    >
      <div class="flex items-center space-x-3 border border-black px-6 py-3 rounded-[5px]">
        <component :is="icon" v-if="icon" />
        <template v-if="as === 'select'">
          <Field as="select" :id="name" :name="name" v-bind="attrs" class="text-xl border-none outline-none w-full">
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
          </Field>
        </template>
        <template v-else>
          <Field :as="as" :id="name" :name="name" v-bind="attrs" :placeholder="placeholder" :type="type" class="text-xl border-none outline-none w-full" />
        </template>
      </div>
      <ErrorMessage :name="name" class="text-red-500" />
    </div>
    <slot name="submit-button">
      <!-- Default button if slot is not provided -->
      <button class="bg-black text-white text-xl font-semibold" type="submit">Submit</button>
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
