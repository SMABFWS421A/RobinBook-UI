<template>
<v-app-bar
    app
    clipped-right
    color="orange"
    height="130"
    elevation="9">
        <v-app-bar-nav-icon v-if="1===1 || $vuetify.breakpoint.smAndDown"
            class="mr-1 ml-10 white"
            color="orange"
            @click="$store.state.isNavigation = !$store.state.isNavigation">
        </v-app-bar-nav-icon>
        <Logo
            class="ml-0 pl-0"
            style="max-width: fit-content"
            :logo="logo"
            :altLogo="altLogo">
        </Logo>
        <h1 class="mx-auto text-center">
            <p class="ma-0 white--text" style="font-size: 1.4rem;">Willkommen bei</p>
            <router-link to="/" style="font-size: 3rem;" class="no-link black--text">
                {{ $store.state.projectName }}
            </router-link>
        </h1>

        <HeaderLinks :headerLinks="headerLinks"></HeaderLinks>
</v-app-bar>
</template>

<script>
    import Logo from '@/components/Logo.vue';
    import HeaderLinks from '@/components/Header/Links.vue';

    export default {
        name: 'Header',
        components: {
            Logo,
            HeaderLinks,
        },
        props: [
            'logo',
            'altLogo',
            'headerLinks',
        ],
    }
</script>