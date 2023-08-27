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


    // * Article
            {
                path: '/create',
                name: 'CreateArticleView',
                component: () => import('../views/CreateArticleView.vue'),
            },
            {
                path: '/article/:id',
                name: 'Collection',
                component: () => import('../views/ArticleView.vue'),
            },
            {
                path: '/articles',
                name: 'Articles',
                component: () => import('../views/ArticlesView.vue'),
            },



    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue'),
    },

    {
        path: '/wishlist',
        name: 'Wishlist',
        component: () => import('../views/WishlistView.vue'),
    },
    {
        path: '/payment',
        name: 'Payment',
        component: () => import('../views/ShoppingCart.vue'),
    },


    {
        path: '/profil',
        name: 'Profil',
        component: () => import('../views/User/ProfileView.vue'),
    },
    {
        path: '/updateProfile',
        name: 'UpdateProfile',
        component: () => import('../views/User/ChangeProfileView.vue'),
    },

    
    
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/User/LoginView.vue'),
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import('../views/User/RegistrationView.vue'),
    },
    {
        path: '/imprint',
        name: 'Imprint',
        component: () => import('../views/ImprintView.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;