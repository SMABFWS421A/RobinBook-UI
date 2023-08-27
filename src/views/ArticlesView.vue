<template>
    <v-container :class="triggered ? 'red' : 'green'">
        <v-row>
            <v-col v-for="(book, index) in books" :key="index" cols="4">
                <v-card>
                    <v-card-title>
                        <h2>{{ book?.title }}</h2>
                    </v-card-title>
                    <v-card-text>
                        <p><b>Autor:</b> {{ book?.author }}</p>
                        <p><b>ISBN:</b> {{ book?.isbn }}</p>
                        <!-- <p><b>Seitenzahl:</b> {{ book.pages }}</p> -->
                        <p><b>Veröffentlichungsdatum:</b> {{ book?.publication_date }}</p>
                        <p><b>Zustand:</b> {{ book?.condition }}</p>
                        <p><b>Genre:</b> {{ book?.genre }}</p>
                        <p class="red--text"><b>Preis:</b> {{ book?.price }}</p>
                        <p><b>Auflage:</b> {{ book?.auflage }}</p>
                        <p><b>Verlag:</b> {{ book?.publisher }}</p>
                        <p><b>Zusammenfassung:</b> {{ book?.summary }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <h1 id="end">ENDE</h1>
  </v-container>
</template>
  
<script>
    import books from '@/data/books.json';

    export default {
        name: 'ArticleView',
        craeted(){
            axios.get('/data/books')
                .then(response => {
                    console.log('response', response);
                    const articles = response?.books;

                    if(!articles) return;

                    this.$store.state.articles = articles;
                })
                .catch(err => {
                    console.error('Es konnten keine Bücher gefunden werden, bitte versuchen Sie es später erneut.');
                });
        },
        mounted(){
            axios.get(`/api/get_all_books`)
                .then(response => {
                    if(!response.data) return
                    const article = response.data?.articles;
                    this.$store.state.article = article;
                })
                .catch(err => {
                    console.error("Aktion konnte nicht durchgeführt werden");
                });



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