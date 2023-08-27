<template>
    <v-container :class="triggered ? 'red' : 'green'">
        <v-row>
            <v-col v-for="(article, i) in articles" :key="i" cols="4">
                <v-card class="mt-10">
                        <v-card-title>{{ article.Title }}</v-card-title>
                        <v-card-text>
                        <p><b>Autor:</b> {{ article.Author }}</p>
                        <p><b>ISBN:</b> {{ article.ISBN }}</p>
                        <p><b>Veröffentlichungsdatum:</b> {{ (article.Publication_date).substring(0, 10) }}</p>
                        <p><b>Zustand:</b> {{ article.State }}</p>
                        <p><b>Genre:</b> {{ article.Genre }}</p>
                        <p class="red--text"><b>Preis:</b> {{ article.Price }}</p>
                        <p><b>Auflage:</b> {{ article.Edition }}</p>
                        <p><b>Verlag:</b> {{ article.Publisher }}</p>
                        <p><b>Zusammenfassung:</b> {{ article.Summary }}</p>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" @click="$store.state.wishlist.append(article)">Zur Merkliste hinzufügen</v-btn>
                            <v-btn color="primary" @click="buyNow(article.Book_id)">Details</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <h1 id="end">ENDE</h1>
  </v-container>
</template>
  
<script>
    import books from '@/data/books.json';
    import axios from 'axios';

    export default {
        name: 'ArticleView',
        created(){
            axios.get(`http://localhost:3000/api/get_all_books`)
                .then(response => {
                    if(!response.data) return;
                    const articles = response.data;
                    this.$store.state.articles = articles;
                })
                .catch(err => {
                    console.error("Aktion konnte nicht durchgeführt werden");
                });
        },
        computed: {
            articles(){
                return this.$store.state.articles;
            },
        },
        methods: {
            buyNow(_articleID) {
                this.$router.push('/article/' + _articleID)
            },

        },
        mounted(){
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 1,
            };

            const self = this;

            const observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if(entry.isIntersecting) return self.triggered = true;
                    return self.triggered = false;
                });
            }, options);

            observer.observe(document.querySelector('#end'));
        },
        data: () => ({
            books,
            triggered: false,
        }),
    };
</script>  