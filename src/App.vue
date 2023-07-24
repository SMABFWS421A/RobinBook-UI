<template>
    <v-app>
        <Header :headerLinks="headerLinks"></Header>
        <Navigation
            :navigationItems="navigationItems">
        </Navigation>
        <v-main class="primary" fluid>
            <router-view></router-view>
        </v-main>
        <Footer
            :footer="footer">
        </Footer>
    </v-app>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Navigation from '@/components/Navigation.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        name: 'App',
        components: {
            Header,
            Navigation,
            Footer,
        },
        data: () => ({
            logo: require('@/assets/logo.png'),
            imprint: {},
            headerLinks: [
                {
                    title: 'Alle Bücher',
                    to: '/articles',
                },
                {
                    title: 'Merkliste',
                    to: '/wishlist',
                },
                {
                    title: 'Informationen',
                    to: '/informationen',
                },
                {
                    title: 'Profil',
                    to: '/profil',
                    icon: 'mdi-account'
                },
            ],
            navigationItems: [
                {
                    title: 'Startseite',
                    to: '/',
                    inFooter: false,
                },
                {
                    title: 'Imprint',
                    to: '/imprint',
                    inFooter: true,
                },
                {
                    title: 'Kontakt',
                    to: '/about',
                    inFooter: true,
                },
            ],
        }),
        computed: {
            footer(){
                let tempFooter = this.navigationItems;
                tempFooter = tempFooter.filter(item => item.inFooter === true);

                return tempFooter;
            }
        }
    }
</script>

<style lang="scss">
    #app{
        font-family: Avenir, Helvetica, Arial, sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #eee;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    ._text-h1, ._text-h2, ._text-h3,._text-h4, ._text-h5, ._text-h6, ._text-p, ._text-span{
        font-family: Avenir, Helvetica, Arial, sans-serif !important;
    }

    ._text-h1{font-size: 2rem !important;}
    ._text-h2{font-size: 1.8rem !important;}
    ._text-h3{font-size: 1.65rem !important;}
    ._text-h4{font-size: 1.5rem !important;}
    ._text-h5{font-size: 1.4rem !important;}
    ._text-h6{font-size: 1.1rem !important;}
    ._text-span{font-size: 0.75rem !important;}
    ._text-p{font-size: 1.1rem !important;}

    nav{
        padding: 30px;
        a{
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .wrapper{
        width: 100%;
        max-width: 1480px;
    }

    textarea{
        outline: none;
        resize: none !important;
        width: 100%;
        color: #eee;
    }

    .no-link{
        color: rgb(249, 249, 249) !important;
        text-decoration: none;
    }
</style>