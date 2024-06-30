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
      name: 'userdashboard',
      path: '/user/dashboard',
      component:()=> import('../views/userDashboard/Dashboard.vue'),
      children: [
        {
          name: 'orders',
          path: '/user/dashboard/orders',
          component:()=> import('../views/userDashboard/Orders.vue')
        },
        {
          name: 'userProfile',
          path: '/user/dashboard/profile',
          component:()=> import('../views/userDashboard/Profile.vue')
        },
        {
          name: 'purchases',
          path: '/user/dashboard/purchases',
          component:()=> import('../views/userDashboard/Purchases.vue')
        }
      ]
    },


    // Admin routes
    {
      path: '/Admin',
      name: 'Admin',
      component: () => import('@/views/AdminAuth/AdminLogin.vue'),
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component:()=> import('../views/AdminDashboard/Dashboard.vue'),
      meta: {
        requiresAuth: false
      },
      redirect: '/dashboard/home',
      children: [
         {
          name: 'dashboardhome',
          path: '/dashboard/home',
          component:()=> import ('../views/AdminDashboard/home.vue')
        },
        {
          name: 'profile',
          path: '/dashboard/products',
          component:() => import('../views/AdminDashboard/products.vue')
        },
        {
          name: 'Users',
          path: '/dashboard/users',
          component:() => import('../views/AdminDashboard/Users.vue')
        },
        {
          name: 'Orders',
          path: '/dashboard/orders',
          component:() => import('../views/AdminDashboard/Orders.vue')
        }
      ]
    },

    

  ]
})
router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.post('http://localhost:3000/api/Auth/verifyToken', { token });
        return next();
      } catch (error) {
        console.error('Invalid token:', error);
        return next('/Login');
      }
    }
    return next('/Login');
  }
  next();
});

export default router
