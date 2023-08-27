<template>
    <v-container>
        <v-banner class="rounded-lg" elevation="5" color="primary lighten-2">
            <h1 class="mt-2" style="color: white">
                Erstelle dein eigenes Inserat:</h1>

            <v-form ref="form" v-model="valid" lazy-validation class="mt-4">
                <v-text-field v-model="isbn" :counter="13" :rules="isbnRules" label="ISBN" required></v-text-field>

                <v-text-field v-model="title" :counter="35" :rules="titleRules" label="Buch Titel" required></v-text-field>

                <v-text-field v-model="author" :counter="35" :rules="authorRules" label="Autor | Verlag"
                    required></v-text-field>

                <v-text-field v-model="genre" :counter="20" :rules="genreRules" label="Genre" required></v-text-field>

                <v-text-field v-model="datumDerVeröffentlichung" :counter="10" :rules="DateRules"
                    label="Datum der Veröffentlichung" required></v-text-field>

                <v-text-field v-model="auflage" :counter="15" :rules="auflageRules" label="Auflage" required></v-text-field>

                <v-text-field v-model="summary" :counter="100" :rules="summaryRules"
                    label="Buch Zusammenfassung / Buchrücken Text" required></v-text-field>

                <v-text-field v-model="price" :counter="7" :rules="priceRules" label="Preis [xxx,xx€]"
                    required></v-text-field>

                <v-select v-model="select" :items="items" :rules="[v => !!v || 'Zustand ist ein Pflichfeld']"
                    label="Zustand" required></v-select>

                <v-checkbox v-model="checkbox" :rules="[v => !!v || 'Den Nutzungsbedingungen muss zugestimmt werden!']"
                    label="Nutzungsbedingungen von RobinBook zustimen?" required></v-checkbox>

                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate, send">
                    Veröffentlichen
                </v-btn>

                <v-btn color="error" class="mr-4" @click="reset">
                    Eingaben zurücksetzten
                </v-btn>

                <v-btn color="warning" to="/">
                    Abbrechen
                </v-btn>
            </v-form>
        </v-banner>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        isbn: '',
        isbnRules: [
            v => !!v || 'Buch ISBN ist ein Pflichtfeld',
            v => (v && v.length <= 13) || 'Jede ISBN ist auf 13 Zeichen limitiert.',
        ],
        title: '',
        titleRules: [
            v => !!v || 'Buch Titel ist ein Pflichtfeld',
            v => (v && v.length <= 35) || 'Der Buchtitel darf nicht länger als 35 Zeichen sein.',
        ],
        author: '',
        authorRules: [
            v => !!v || 'Buch Titel ist ein Pflichtfeld',
            v => (v && v.length <= 35) || 'Der Buchtitel darf nicht länger als 35 Zeichen sein.',
        ],
        genre: '',
        genreRules: [
            v => !!v || 'Das Genre ist ein Pflichtfeld',
            v => (v && v.length <= 20) || 'Das Genre darf nicht länger als 20 Zeichen sein.',
        ],
        datumDerVeröffentlichung: '',
        datumDerVeröffentlichungRules: [
            v => !!v || 'Das Veröffentlichungsdatum ist ein Pflichtfeld',
            v => (v && v.length <= 10) || 'Das Veröffentlichungsdatum ist auf 10 Zeichen limitiert.',
        ],
        auflage: '',
        auflageRules: [
            v => !!v || 'Auflage ist ein Pflichtfeld',
            v => (v && v.length <= 15) || 'Die Buch Auflage ist auf 15 Zeichen limitiert.',
        ],
        summary: '',
        summaryRules: [
            v => !!v || 'Buch zusammenfassung ist ein Pflichtfeld',
            v => (v && v.length <= 100) || 'Die Zusammenfassung ist auf 100 Zeichen limitiert.',
        ],
        price: '',
        priceRules: [
            v => !!v || 'Der Buch Preis ist ein Pflichtfeld',
            v => (v && v.length <= 7) || 'Der Preis ist auf 7 Zeichen limitiert. ( Preis [xxx,xx€] )',
        ],
        select: null,
        items: [
            'Neuware',
            'Neuwertig',
            'Leicht gebraucht',
            'Normal gebraucht',
            'Stark gebraucht',
        ],
        checkbox: false,
    }),

    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
    },

    send(data){
            axios
            .post("/api/add_book",this.$store.state.article)
            .then(response => {alert("Daten erfolgreich gesendet:",response.data);})
            .catch(error => {alert("Senden der Daten nicht erfolgreich:", error);}); 
        }

    }

</script>