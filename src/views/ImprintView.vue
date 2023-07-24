<template>
    <v-container>
      <v-card class="impressum-card">
        <v-card-title class="headline">Impressum</v-card-title>
        <p>-----</p>
        <v-text-field v-model="test"></v-text-field>
        
        
        <h1>{{ test }}</h1>
        <p>++++++++++</p>
        <v-card-text>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">Name:</v-list-item-title>
                <v-list-item-subtitle>Max Mustermann</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">Adresse:</v-list-item-title>
                <v-list-item-subtitle>Musterstraße 123, 12345 Musterstadt</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">Telefon:</v-list-item-title>
                <v-list-item-subtitle>+49 123 456789</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">E-Mail:</v-list-item-title>
                <v-list-item-subtitle>max.mustermann@example.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">Webseite:</v-list-item-title>
                <v-list-item-subtitle>www.robinbook.de</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Imprint',
    data: () => ({
        test: "Hallo"
    }),
  };
  </script>
  
  <style scoped>
  .headline {
    font-size: 24px;
    font-weight: bold;
  }
  
  .title {
    font-weight: bold;
  }
  
  .impressum-card {
    max-width: 500px;
    margin: 0 auto;
    padding: 24px;
  }
  </style>
  