<template>
    <v-container>
      <v-text-field
        v-model="searchQuery"
        :append-icon="searchQuery ? 'mdi-close' : ''"
        @click:append="clearSearch"
        label="Suche"
        solo-inverted
        :placeholder="searchQuery ? '' : 'Suchbegriff eingeben'"
        @focus="clearPlaceholder"
      ></v-text-field>
      <v-list v-if="showResults">
        <v-list-item
          v-for="result in searchResults"
          :key="result.id"
          :title="result.title"
        >
          {{ result.title }}
        </v-list-item>
        <v-list-item v-if="searchResults.length === 0 && searchQuery.length > 0">
          Keine Ergebnisse gefunden.
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        searchResults: [],
        showResults: false,
      };
    },
    watch: {
      searchQuery(newValue) {
        if (newValue.length > 0) {
          // Hier können Sie Ihre eigene Suchlogik implementieren
          // Hier ist ein Beispiel, wie Sie eine statische Liste von Ergebnissen zurückgeben können
          this.searchResults = [
            { id: 1, title: 'Ergebnis 1' },
            { id: 2, title: 'Ergebnis 2' },
            { id: 3, title: 'Ergebnis 3' },
            { id: 4, title: 'Ergebnis 4' },
            { id: 5, title: 'Ergebnis 5' },
          ];
          this.showResults = true;
        } else {
          this.searchResults = [];
          this.showResults = false;
        }
      },
    },
    methods: {
      clearSearch() {
        this.searchQuery = '';
        this.searchResults = [];
        this.showResults = false;
      },
      clearPlaceholder() {
        if (!this.searchQuery) {
          this.$refs.searchField.blur();
        }
      },
    },
  };
  </script>
  