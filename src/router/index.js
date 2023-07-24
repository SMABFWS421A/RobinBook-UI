import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/article',
        name: 'Article',
        component: () => import('../views/ArticleView.vue'),
    },
    {
        path: '/collection',
        name: 'Collection',
        component: () => import('../views/ArticlesView.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue'),
    },
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: () => import('../views/User/ProfileView.vue')
    // },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/User/LoginView.vue')
    },
    {
        path: '/imprint',
        name: 'Imprint',
        component: () => import('../views/ImprintView.vue')
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import('../views/User/RegistrationView.vue')
    },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;