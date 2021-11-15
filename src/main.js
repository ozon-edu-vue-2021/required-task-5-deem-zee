import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes.js';
import {store} from './store/store.js' 

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history',
});

new Vue({
    store: store,
    render: (h) => h(App),
    router: router,
}).$mount('#app');
