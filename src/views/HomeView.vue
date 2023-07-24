<template>
    <v-container>
        <SearchBar></SearchBar>
        <h1>DAS IST DIE STARTSEITE</h1>
        <h2>Hier könnte eine Übersicht aller Bücher sein.</h2>
    </v-container>
</template>

<script>
    import SearchBar from '@/components/SearchBar.vue';

    export default {
        name: 'HomeView',
        components: {
            SearchBar
        },
        data: () => ({
        }),
    }
</script>