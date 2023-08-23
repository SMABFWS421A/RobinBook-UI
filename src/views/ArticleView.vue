<template>

    <v-container>
    <v-layout row wrap>
      <v-flex v-for="(book, index) in books" :key="index" xs12 sm6 md4>
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
            <p><b>Zuasammenfassung:</b> {{ book?.summary }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </template>
  
<script>
    import books from '@/data/books.json'

    export default {
        name: 'ArticleView',
        data: () => ({
            books,
        }),
    };
</script>  