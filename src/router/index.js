import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/New.vue'
import Shirts from '../views/Shirts.vue'
import Pants from '../views/Pants.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Cart from '@/views/Cart.vue'
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

  ]
})

export default router
