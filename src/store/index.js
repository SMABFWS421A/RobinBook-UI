import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        url: 'http://192.168.178.83:8080',
        isNavigation: false,
        projectName: 'RobinBook',
        id:3,


        articles: [],
        article: {},


        user: {
            firstName: `test`,
            lastName:'test',
            streetname:'test',
            houseNumber:'test',
            zipCode:'test',
            state:'test',
            eMail:'test'
        },

        wishlist: {},
        
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
});