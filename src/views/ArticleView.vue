<template>
    <v-container>
        <router-link to="/articles" class="no-link pb-10">
            <div class="d-flex align-center">
                <v-icon large color="orange">mdi-chevron-left</v-icon>
                <h2 class="white--text">Zurück zur Bücheransicht</h2>
            </div>
        </router-link>

        <v-card class="mt-10">
            <v-card-title>{{ article.Title }}</v-card-title>
            <v-card-text>
            <p><b>Autor:</b> {{ article.Author }}</p>
            <p><b>ISBN:</b> {{ article.ISBN }}</p>
            <p><b>Veröffentlichungsdatum:</b> {{ article.Publication_date }}</p>
            <p><b>Zustand:</b> {{ article.State }}</p>
            <p><b>Genre:</b> {{ article.Genre }}</p>
            <p class="red--text"><b>Preis:</b> {{ article.Price }}</p>
            <p><b>Auflage:</b> {{ article.Edition }}</p>
            <p><b>Verlag:</b> {{ article.Publisher }}</p>
            <p><b>Zusammenfassung:</b> {{ article.Summary }}</p>
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

            axios.get(`http://localhost:3000/api/article/${articleID}`)
                .then(response => {
                    if(!response.data) return
                    const article = response.data;
                    this.$store.state.article = article;
                    console.log(this.$store.state.article)
                })
                .catch(err => {
                    console.error(`Das Buch mit der ID "${articleID}" konnte nicht gefunden werden.`);
                });
        },
        computed:{
            article(){
                return this.$store.state.article;
            }
        },
        methods: {
            buyNow(){
                const articleID = this.$route?.params?.id;
                axios.delete(`http://localhost:3000/api/delete_book/${articleID}`)
                    .then(response => {
                        console.log(response.data.message);
                    })
                    .catch(error => {
                        console.error('Error:', error.response.data.error);
                    });
            }
        },
    };
</script>
  
<style scoped>
    .article-image {
        height: 300px;
        object-fit: cover;
    }
</style>