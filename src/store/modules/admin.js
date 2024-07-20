import axios from "axios";
export default {

    state:  {  
    admin : {},
    products : [],
    orders : [],
    users : [], 
      },
      mutations: {
        SET_ADMIN_DATA(state, adminData) {
            state.admin = adminData;
            localStorage.setItem('admin', JSON.stringify(adminData));
            localStorage.setItem('token', adminData.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${adminData.token}`;
        },
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        ADD_PRODUCT(state, product) {
            state.products.push(product);
        },
        UPDATE_PRODUCT(state, updatedProduct) {
            const index = state.products.findIndex(product => product.id === updatedProduct.id);
            if (index !== -1) {
                state.products[index] = updatedProduct;
            }
        },
        DELETE_PRODUCT(state, id) {
            state.products = state.products.filter(product => product.id !== id);
        },
        SET_ORDERS(state, orders) {
            state.orders = orders;
        },
        SET_USERS(state, users) {
            state.users = users;
        },
        CLEAR_ADMIN_DATA(state) {
            state.admin = null;
            localStorage.removeItem('admin');
            axios.defaults.headers.common['Authorization'] = null;
            location.reload();
        },
    },
    
    actions: {
        async login({ commit }, credentials) {
            return axios
                .post('http://localhost:3000/api/Auth/login', credentials)
                .then(({ data }) => {
                    commit('SET_ADMIN_DATA', data);
                });
        },
        async logout({ commit }) {
            commit('CLEAR_ADMIN_DATA');
        },
        async getProducts({ commit }) {
            return axios
                .get('http://localhost:3000/api/product')
                .then(({ data }) => {
                    commit('SET_PRODUCTS', data);
                });
        },
        async addProduct({ commit }, product) {
            return axios
                .post('http://localhost:3000/api/product', product)
                .then(({ data }) => {
                    commit('ADD_PRODUCT', data);
                });
        },
        async deleteProduct({ commit }, id) {
            return axios
                .delete(`http://localhost:3000/api/product/${id}`)
                .then(() => {
                    commit('DELETE_PRODUCT', id);
                });
        },
        async updateProduct({ commit }, product) {
            return axios
                .put(`http://localhost:3000/api/product/${product.id}`, product)
                .then(({ data }) => {
                    commit('UPDATE_PRODUCT', data);
                });
        },
        async getOrders({ commit }) {
            return axios
                .get('http://localhost:3000/api/order')
                .then(({ data }) => {
                    commit('SET_ORDERS', data);
                });
        },
        async getUsers({ commit }) {
            return axios
                .get('http://localhost:3000/api/user')
                .then(({ data }) => {
                    commit('SET_USERS', data);
                });
        },
        async deleteUser({ commit }, id) {
            return axios
                .delete(`http://localhost:3000/api/user/${id}`)
                .then(() => {
                    commit('SET_USERS', id);
                });
        },
    },
    
}