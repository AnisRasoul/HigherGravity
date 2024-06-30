<template>
  <div class="md:min-h-screen md:grid md:grid-cols-10">
    <!-- Left Panel with Gradient Background -->
    <div class="Login md:col-span-6 md:p-20 md:text-white md:flex md:flex-col md:justify-center md:space-y-10 hidden">
      <h1 class="text-8xl -tracking-tighter font-[Anger]">Higher Gravity</h1>
      <p class="text-3xl mt-3 tracking-[5px] uppercase">Be the first to shine, discover what's new in higher gravity</p>
      <Button class="mt-6 bg-white text-black w-[20%] text-xl py-6 rounded-[30px]">
        Read More
      </Button>
    </div>

    <!-- Right Panel with Form -->
    <div class="bg-white p-12 flex flex-col justify-center md:col-span-4">
      <a class="text-white px-6 py-1 mx-auto my-4" href="/"> 
        <img src="@/assets/HG logo.svg" class="w-28">
      </a>
      <h2 class="text-5xl md:w-[70%] mb-3 mx-auto text-primary uppercase text-center font-[Anger] tracking-[8px]">CREATE An Account</h2>
      <DynamicForm :schema="formSchema" :on-submit="onSubmit">
        <template #submit-button>
          <Button class="bg-black text-white w-full text-xl font-semibold " type="submit">Sign up</Button>
        </template>
      </DynamicForm>
      <div class="flex md:mx-[10%] mx-[9%] space-x-3 items-center my-5">
        <h1>Already Have an account?</h1>
        <router-link to="login" class="text-primary text-center hover:underline font-bold">
          Login
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
import { Mail, Lock, User, Phone, MapPin  } from 'lucide-vue-next';
  
export default {
  components: {
    Button,
    DynamicForm,
    Mail,
    Lock,
    User,
    Phone,
    MapPin 
  },
  data() {
    return {
      formSchema: {
        fields: [
          {
            label: 'Username',
            name: 'username',
            as: 'input',
            icon: User,
            type: 'text',
            placeholder: 'Enter your username',
            rules: Yup.string().required('username is required'),
          },
          {
            label: 'Address',
            name: 'address', // Corrected to 'address'
            as: 'input',
            icon: MapPin ,
            type: 'text',
            placeholder: 'Enter your address here',
            rules: Yup.string().required('address is required'),
          },
          {
            label: 'Phone',
            name: 'phone',
            as: 'input',
            icon: Phone,
            type: 'text',
            placeholder: 'Enter your Phone number',
            rules: Yup.string().required('phone is required'),
          },
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
      userName: '',
      userEmail: '',
      userPassword: '',
      userAddress: '',
      userPhone: '',
    };
  },
  methods: {
    onSubmit(values) {
      this.userName = values.username;
      this.userEmail = values.email;
      this.userPassword = values.password;
      this.userAddress = values.address ;
      this.userPhone = values.phone
      this.register();
    },
    async register() {
      try {
        const res = await axios.post('http://localhost:3000/api/Auth/register', {
          username: this.userName,
          email: this.userEmail,
          password: this.userPassword,
          address: this.userAddress,
          phone: this.userPhone
        });
  
        console.log('Post test successful:', res.data);
        this.$router.push('/login');
      } catch (error) {
        alert(error);
      }
    }
  },
};
</script>
  
<style>
.Login {
  background-image: url('@/assets/imgs/login.png');
  background-repeat: no-repeat ;
  background-size: cover;
}
</style>
