<template>
    <v-container>
        <router-link to="/articles" class="no-link pb-10">
            <div class="d-flex align-center">
                <v-icon large color="orange">mdi-chevron-left</v-icon>
                <h2 class="white--text">Zurück zur Bücheransicht</h2>
            </div>
        </router-link>

        <v-card class="mt-10">
            <v-card-title>{{ book.title }}</v-card-title>
            <v-card-text>
            <p><b>Autor:</b> {{ book.author }}</p>
            <p><b>ISBN:</b> {{ book.isbn }}</p>
            <p><b>Veröffentlichungsdatum:</b> {{ book.publication_date }}</p>
            <p><b>Zustand:</b> {{ book.condition }}</p>
            <p><b>Genre:</b> {{ book.genre }}</p>
            <p class="red--text"><b>Preis:</b> {{ book.price }}</p>
            <p><b>Auflage:</b> {{ book.auflage }}</p>
            <p><b>Verlag:</b> {{ book.publisher }}</p>
            <p><b>Zusammenfassung:</b> {{ book.summary }}</p>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="$store.state.wishlist.append(article)">Zur Merkliste hinzufügen</v-btn>
                <v-btn color="primary" @click="buyNow()">Direkt Kaufen</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
</template>
  
<script>
    import axios from 'axios';

    export default {
        name: 'ArticleView',
        mounted(){
            const articleID = this.$route?.params?.id;

            axios.get(`/api/article/${articleID}`)
                .then(response => {
                    if(!response.data) return
                    const article = response.data?.article;
                    this.$store.state.article = article;
                })
                .catch(err => {
                    console.error(`Das Buch mit der ID "${articleID}" konnte nicht gefunden werden.`);
                });
        },
        methods: {
            buyNow(){
                return;
            }
        },
    };
</script>
  
<style scoped>
    .book-image {
        height: 300px;
        object-fit: cover;
    }
</style>