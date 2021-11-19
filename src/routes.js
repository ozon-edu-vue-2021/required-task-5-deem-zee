import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';
import Fav from './components/Fav.vue';

export default [
    {path: '/', component: ProductList},
    {path: '/cart', component: Cart},
    {path: '/fav', component: Fav}
]