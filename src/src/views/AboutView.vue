<template>
    <v-container class="about">
        <h1>Kontaktieren Sie uns gerne</h1>
    <div>
        <v-card class="mx-auto mb-5" v-for="(participant, i) in participants" :key="i">
            <v-card-title>{{ participant?.firstName }} {{ participant?.lastName }}</v-card-title>
            <v-card-text class="my-0 py-0">Vorname: {{ participant?.firstName }}</v-card-text>
            <v-card-text class="my-0 py-0">Nachname: {{ participant?.lastName }}</v-card-text>
            <v-card-text class="my-0 py-0">übernommene Tätigkeit(en): {{ participant?.role }}</v-card-text>
            <v-card-text class="my-0 py-0 pb-5">
                E-Mail-Adresse: 
                <a :href="`mailto:${participant?.mail}`">{{ participant?.mail }}</a>
            </v-card-text>
        </v-card>
    </div>
    </v-container>
</template>

<script>
    import participants from '@/data/participants.json';

    export default {
        name: 'AboutView',
        data: () => ({
            participants,
        }),
    }
</script>