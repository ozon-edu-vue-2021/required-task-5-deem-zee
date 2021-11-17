import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'; 

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    actions: {
        fetchProducts({commit}) {
            return axios('https://random-data-api.com/api/food/random_food?size=30', {
                method: "GET",
            }).then((products) =>{
                commit("setProducts", products.data);
                for(let product of products.data) {
                   product.price = Math.floor(getRandomArbitrary(50, 200));
                }

                return products;
            })
        },

        addProductToCart(context, product) {
            context.commit('pushProductToCart', product)
        },


    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        
        pushProductToCart(state, cartItem) {
            state.cart.push(cartItem)
        },

    },
    getters: {
        availableProducts(state) {
            return state.products;
        },

        cartProducts(state) {
            return state.cart.map(
                product => {
                return {
                    dish: product.dish,
                    price: product.price,
                    description: product.description,
                }
            })
        },
        cartTotal(state, getters) {
            let total = 0;
            getters.cartProducts.forEach(product => {
                total += product.price;
            })
            return total;
        },
        checkOut(state, getters) {
            let summarize = '';
            getters.cartProducts.forEach(product => {
                summarize += product.dish +'\n';
            })
            return summarize;
        },
    }

});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }