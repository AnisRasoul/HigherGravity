import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';

const Home = () => import('../views/Home.vue');
const New = () => import('../views/New.vue');
const Shirts = () => import('../views/Shirts.vue');
const Pants = () => import('../views/Pants.vue');
const ProductDetails = () => import('../views/ProductDetails.vue');
const Cart = () => import('@/views/Cart.vue');
const Payment = () => import('../views/Payment.vue');
const Login = () => import('@/views/userAuth/Login.vue');
const Register = () => import('@/views/userAuth/Register.vue');

const UserDashboard = () => import('../views/userDashboard/Dashboard.vue');
const Orders = () => import('../views/userDashboard/Orders.vue');
const UserProfile = () => import('../views/userDashboard/Profile.vue');
const Purchases = () => import('../views/userDashboard/Purchases.vue');

const AdminLogin = () => import('@/views/AdminAuth/AdminLogin.vue');
const AdminDashboard = () => import('../views/AdminDashboard/Dashboard.vue');
const DashboardHome = () => import('../views/AdminDashboard/home.vue');
const Products = () => import('../views/AdminDashboard/products.vue');
const Users = () => import('../views/AdminDashboard/Users.vue');
const AdminOrders = () => import('../views/AdminDashboard/Orders.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/newin',
    name: 'newin',
    component: New,
  },
  {
    path: '/shirts',
    name: 'shirts',
    component: Shirts,
  },
  {
    path: '/pants',
    name: 'pants',
    component: Pants,
  },
  {
    path: '/details/:id',
    name: 'productdetails',
    component: ProductDetails,
    props: true,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    name: 'userdashboard',
    path: '/user/dashboard',
    component: UserDashboard,
    children: [
      {
        name: 'orders',
        path: 'orders',
        component: Orders,
      },
      {
        name: 'userProfile',
        path: 'profile',
        component: UserProfile,
      },
      {
        name: 'purchases',
        path: 'purchases',
        component: Purchases,
      },
    ],
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: AdminLogin,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: AdminDashboard,
    meta: {
      requiresAuth: false,
    },
    redirect: '/dashboard/home',
    children: [
      {
        name: 'dashboardhome',
        path: 'home',
        component: DashboardHome,
      },
      {
        name: 'profile',
        path: 'products',
        component: Products,
      },
      {
        name: 'Users',
        path: 'users',
        component: Users,
      },
      {
        name: 'Orders',
        path: 'orders',
        component: AdminOrders,
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
