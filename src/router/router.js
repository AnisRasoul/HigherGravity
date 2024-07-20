import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/newin',
    name: 'newin',
    component: () => import('../views/New.vue'),
  },
  {
    path: '/shirts',
    name: 'shirts',
    component: () => import('../views/Shirts.vue'),
  },
  {
    path: '/pants',
    name: 'pants',
    component: () => import('../views/Pants.vue'),
  },
  {
    path: '/details/:id',
    name: 'productdetails',
    component: () => import('../views/ProductDetails.vue'),
    props: true,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue'),
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/Payment.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/userAuth/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/userAuth/Register.vue'),
  },
  {
    name: 'userdashboard',
    path: '/user/dashboard',
    component: () => import('../views/userDashboard/Dashboard.vue'),
    children: [
      {
        name: 'orders',
        path: 'orders',
        component: () => import('../views/userDashboard/Orders.vue'),
      },
      {
        name: 'userProfile',
        path: 'profile',
        component: () => import('../views/userDashboard/Profile.vue'),
      },
      {
        name: 'purchases',
        path: 'purchases',
        component: () => import('../views/userDashboard/Purchases.vue'),
      },
    ],
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('@/views/AdminAuth/AdminLogin.vue'),
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: () => import('../views/AdminDashboard/Dashboard.vue'),
    meta: {
      requiresAuth: false,
    },
    redirect: '/dashboard/home',
    children: [
      {
        name: 'dashboardhome',
        path: 'home',
        component: () => import('../views/AdminDashboard/home.vue'),
      },
      {
        name: 'profile',
        path: 'products',
        component: () => import('../views/AdminDashboard/products.vue'),
      },
      {
        name: 'Users',
        path: 'users',
        component: () => import('../views/AdminDashboard/Users.vue'),
      },
      {
        name: 'Orders',
        path: 'orders',
        component: () => import('../views/AdminDashboard/Orders.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
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

export default router;
