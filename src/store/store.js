import { createStore } from 'vuex';
import products from '@/store/modules/products'
import user from '@/store/modules/user'
const store = createStore({
  modules: {
    products,
    user
  }
});

export default store;
