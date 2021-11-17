<template>
    <div>
        <h2>Товары в корзине</h2>
        <ul>
            <li v-for="(product, index) in cart" :key="index">
                <h3>{{product.dish}}</h3>
                <p>{{product.description}}</p>
                <p>Цена: {{product.price}} &#8381;</p>
            </li>
            <p>Общая стоимость: {{total}} &#8381;</p>
        </ul>
    </div>
</template>

<script>
export default {

    computed: {
        cart() {
           return this.$store.getters.cartProducts
    },
        total() {
            return this.$store.getters.cartTotal
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

p{
    width: 45%;
    /* text-align: center; */
    margin:10px 25%;
    overflow: hidden;
    height: 60px;
}
</style>