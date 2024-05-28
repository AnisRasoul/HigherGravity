<template>
  <div class="md:min-h-screen md:grid md:grid-cols-10">
    <!-- Left Panel with Gradient Background -->
    <div class="Login md:col-span-6 md:p-20 md:text-white md:flex md:flex-col md:justify-center md:space-y-10 hidden">
      <h1 class="text-8xl -tracking-tighter font-[Anger]">Higher Gravity</h1>
      <p class="text-3xl mt-3 tracking-[5px] uppercase">Be the first to shine, discover whats new in higher gravity</p>
      <Button class="mt-6 bg-white text-black w-[20%] text-xl py-6 rounded-[30px]">
        Read More
      </Button>
    </div>

    <!-- Right Panel with Form -->
    <div class="bg-white p-12 flex flex-col justify-center md:col-span-4 mx-auto">
      <a class="text-white px-6 py-1 mx-auto my-4" href="/"> 
        <img src="@/assets/HG logo.svg" class="w-28">
      </a>
      <h2 class="text-5xl md:w-[70%] mb-3 mx-auto text-primary uppercase text-center font-[Anger] tracking-[8px]">Login to your account</h2>
      <DynamicForm :schema="formSchema" :on-submit="onSubmit">
        <template #submit-button>
          <Button class="bg-black text-white w-full text-xl font-semibold" type="submit">Sign in</Button>
        </template>
      </DynamicForm>

      <div class="flex md:mx-[10%] mx-[9%] space-x-3 items-center my-5">
        <h1>Dont have account?</h1>
        <router-link to="register" class="text-primary text-center hover:underline font-bold">
          Register
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/button/Button.vue';
import axios from 'axios';
import * as Yup from 'yup';
import DynamicForm from '@/components/DynamicForm.vue';
import { Mail, Lock, User } from 'lucide-vue-next';

export default {
  components: {
    Button,
    DynamicForm,
    Mail,
    Lock,
    User,
  },
  data() {
    return {
      formSchema: {
        fields: [
          {
            label: 'Your email',
            name: 'email',
            as: 'input',
            icon: Mail,
            type: 'email',
            placeholder: 'Your email',
            rules: Yup.string().email('Invalid email address').required('Email is required'),
          },
          {
            label: 'Password',
            name: 'password',
            as: 'input',
            icon: Lock,
            placeholder: 'Password',
            type: 'password',
            rules: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
          },
        ],
      },
      userEmail: '',
      userPassword: ''
    };
  },
  methods: {
    onSubmit(values) {
      this.userEmail = values.email;
      this.userPassword = values.password;
      this.login();
    },
    async login(){
      try {
        const res = await axios.post('http://localhost:3000/api/Auth/login', {
          email: this.userEmail, // Corrected
          password: this.userPassword, // Corrected
        });
        localStorage.setItem('token', res.data.token);
        console.log('Login successful:', res.data);
        this.$router.push('/');
      } 
      catch (error) {
        alert(`Error during login: ${error.response?.data?.message || error.message}`);
      }
    }
  }
};
</script>

<style>
.Login {
  background-image: url('@/assets/imgs/login.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
