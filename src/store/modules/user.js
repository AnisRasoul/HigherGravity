import axios from "axios"

export default {
    state: {
        user : {}
    },
    mutations: {
        SET_USER_DATA(state,userData){
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            localStorage.setItem('token', res.data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
        },
        CLEAR_USER_DATA(state){
            state.user = null
            localStorage.removeItem('user')
            axios.defaults.headers.common['Authorization'] = null
            location.reload()
        }

    },
    actions: {
    async register ({commit}, credentials) {
            return axios
            .post('http://localhost:3000/api/Auth/register', credentials)
            .then(({data})=>{
                commit('SET_USER_DATA',data)
            })
        },
        async login ({commit}, credentials) {
            return axios
            .post('http://localhost:3000/api/Auth/login', credentials)
            .then(({data})=>{
                commit('SET_USER_DATA',data)
            })
        },
        logout ({commit}) {
            commit('CLEAR_USER_DATA')
        }

    },
    getters: {
      loggedIn (state) {
        return !!state.user
      }
    }
}