<template>
    <v-container>
        <v-card>
            <v-card-title>Impressum</v-card-title>
            <v-list dense>
                <v-list-item v-for="(item, i) in imprint" :key="i">
                    <v-list-item-content>
                        <v-list-item-title class="title">{{ item?.title }}:</v-list-item-title>
                        <v-list-item-subtitle>{{ item?.value }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>
  
<script>
  export default {
    name: 'Imprint',
    data: () => ({
        imprint: [
            {
                title: 'Name',
                value: 'Max Mustermann',
            },
            {
                title: 'Adresse',
                value: 'Musterstraße 123, 12345 Musterstadt',
            },
            {
                title: 'Telefon',
                value: '+49 123 456789',
            },
            {
                title: 'E-Mail',
                value: 'max.mustermann@example.com',
            },
            {
                title: 'Webseite',
                value: 'https://robinbook.de',
            },
        ],
    }),
  };
  </script>