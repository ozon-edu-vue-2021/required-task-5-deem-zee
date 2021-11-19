<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Товары</router-link></li>
            <li><router-link to="/cart" exact>Корзина</router-link></li>
            <li><router-link to="/fav" exact>Избранное</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style>
ul{
    text-align: center;
    list-style-type: none;
    margin: 0 auto;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color:#444;
}

</style>