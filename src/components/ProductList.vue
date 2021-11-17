<template>
    <div id="product-list">
        <h2>Product List</h2>
        <ul>
            <li v-for="(product, index) in products" v-bind:key="index">
                <h3>{{product.dish}}</h3>
                <p>{{product.description}}</p>
                <p>Цена: {{product.price}} &#8381;</p>
                <button @click="addProductToCart(product)">В корзину</button>
            </li>
        </ul>
    </div>
</template>

<script>

import {store} from "../store/store"

export default {

    computed: {
        products() {
            return store.getters.availableProducts
        }
    },
    created() {
       store.dispatch('fetchProducts');
    },
    methods: {
         addProductToCart(product) {
           this.$store.dispatch('addProductToCart', product)
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
}
ul{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
li{
    width: 30%;
    border: 1px solid black;
    display: block;
    margin: 10px;
}
button {
    border: 1px solid white;
    border-radius: 5px;
    margin: 5px;
    background: rgb(15, 224, 154);
    height: 30px;
    cursor: pointer;
}
p{
    width: 45%;
    /* text-align: center; */
    margin:10px 25%;
    overflow: hidden;
    height: 60px;
}
</style>