import { createStore } from 'vuex';
import products from '@/store/modules/products'
import user from '@/store/modules/user'
import admin from './modules/admin';
const store = createStore({
  modules: {
    products,
    user,
    admin
  }
});

export default store;
