<template>
    <div id="product-list">
        <h2>{{title}}</h2>
        <ul>
            <li v-for="product in products" v-bind:key="product.id">
                <p>{{product.dish}}</p>
                <p>{{product.description}}</p>
                <p>{{product.price}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Товары'
        }
    },
    computed: {
        products() {
            console.log(this.$store.state.products[0])
            return this.$store.state.products;
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
</style>