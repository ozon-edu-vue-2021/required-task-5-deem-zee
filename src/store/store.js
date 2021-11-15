import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'; 

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [],
    },
    actions: {
        GET_PRODUCTS({commit}) {
            return axios('https://random-data-api.com/api/food/random_food?size=30', {
                method: "GET",
            }).then((products) =>{
                commit("SET_PRODUCTS", products.data);
                return products;
            })
        }
    },
    mutations: {
        SET_PRODUCTS: (state, products) => {
            state.products = products;
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    }

});
