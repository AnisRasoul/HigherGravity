<template>
    <div class="my-44">
      <div class="bg-white flex flex-col w-[40%] mx-auto">
        <a class="text-white px-6 py-1 mx-auto my-4" href="/"> 
          <img src="@/assets/HG logo.svg" class="w-28">
        </a>
        <h2 class="text-5xl md:w-[70%] mb-3 mx-auto text-primary uppercase text-center font-[Anger]">Admin Login</h2>
        <DynamicForm :schema="formSchema" :on-submit="onSubmit">
          <template #submit-button>
            <Button class="bg-black text-white text-xl font-semibold w-full" type="submit">Sign in</Button>
          </template>
        </DynamicForm>
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
  