import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import Home from '../views/Home.vue'
import New from '../views/New.vue'
import Shirts from '../views/Shirts.vue'
import Pants from '../views/Pants.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Cart from '@/views/Cart.vue'
import Payment from '../views/Payment.vue'
import Login from '@/views/userAuth/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/newin',
      name: 'newin',
      component: New
    },
    {
      path: '/shirts',
      name: 'shirts',
      component: Shirts
    },
    {
      path: '/pants',
      name: 'pants',
      component: Pants
    },
    {
      path: '/details/:id',
      name: 'productdetails',
      component: ProductDetails,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/userAuth/Register.vue')
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component:()=> import('../views/Dashboard/Dashboard.vue'),
      meta: {
        requiresAuth: true
      },
      redirect: '/dashboard/home',
      children: [
         {
          name: 'dashboardhome',
          path: '/dashboard/home',
          component:()=> import ('../views/Dashboard/home.vue')
        },
        {
          name: 'profile',
          path: '/dashboard/profile',
          component:() => import('../views/Dashboard/profile.vue')
        },
        {
          name: 'create',
          path: '/dashboard/create',
          component:() => import('../views/Dashboard/create.vue')
        }
      ]
    },

    

  ]
})
router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token');
    if (token) {
      // Token exists, consider user authenticated
      // Check if the token is valid
      try {
        await axios.post('http://localhost:3000/api/Auth/verifyToken', { token }); // Adjust the endpoint for token verification
        return next();
      } catch (error) {
        console.error('Invalid token:', error);
        // Token invalid, redirect to login
        return next('/Login');
      }
    }
    // Token does not exist, redirect to login
    return next('/Login');
  }
  next();
});

export default router
