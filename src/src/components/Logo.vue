<template>
<v-container>
    <router-link to="/" class="yellow">
        <v-img
            style="max-width: 200px; max-height: 130px;"
            contain
            :src="require('@/assets/logo.png')"
            :alt="altLogo"
            height="100%">
        </v-img>
    </router-link>
</v-container>
</template>

<script>
    export default {
        name: 'Logo',
        props: [
            'logo',
            'altLogo',
        ],
    }
</script>