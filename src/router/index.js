import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewIn from '../views/NewIn.vue'
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
      component: HomeView
    },
    {
      path: '/newin',
      name: 'newin',
      component: NewIn
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
      component: ProductDetails
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },

  ]
})

export default router
