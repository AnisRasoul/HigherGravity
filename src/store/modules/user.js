import axios from 'axios';

export default {
    state: {
        user: JSON.parse(localStorage.getItem('user')) || {},
    },
    mutations: {
        SET_USER_DATA(state, userData) {
            state.user = userData;
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('token', userData.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
        },
        CLEAR_USER_DATA(state) {
            state.user = {};
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            axios.defaults.headers.common['Authorization'] = null;
            location.reload();
        },
        SET_USER_DETAILS(state, details) {
            Object.assign(state.user, details);
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        UPDATE_USER_DATA(state, details) {
            state.user = details;
            localStorage.setItem('user', JSON.stringify(state.user));
        },
    },
    actions: {
        async register({ commit }, credentials) {
            try {
                const { data } = await axios.post('http://localhost:3000/api/Auth/register', credentials);
                commit('SET_USER_DATA', data);
            } catch (error) {
                console.error('Registration error:', error);
            }
        },
        async login({ commit }, credentials) {
            try {
                const { data } = await axios.post('http://localhost:3000/api/Auth/login', credentials);
                commit('SET_USER_DATA', data);
            } catch (error) {
                console.error('Login error:', error);
            }
        },
        logout({ commit }) {
            commit('CLEAR_USER_DATA');
        },
        adduserDetails({ commit }, details) {
            commit('SET_USER_DETAILS', details);
        },
        async updateuserDATA({ commit }, details) {
            try {
                const { data } = await axios.post('http://localhost:3000/api/Auth/update', details);
                commit('UPDATE_USER_DATA', data);
            } catch (error) {
                console.error('Update error:', error);
            }
        }
    },
    getters: {
        loggedIn(state) {
            return !!state.user.token;
        }
    }
};
