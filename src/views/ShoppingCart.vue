<template>
    <v-container>
        <v-banner class="rounded-lg" elevation="5" color="primary lighten-2">

            <h1 class="mt-2" style="color: white">
                Ihr Einkaufswagen:</h1>

            <v-row class="mt-4">
                <v-col v-for="book in books" :key="book.title">
                    <v-card class="mx-auto">
                        <v-img :src="book.url" height="200px"></v-img>

                        <v-card-title>
                            <v-list-item-title class="headline">{{ book.title }}</v-list-item-title>
                        </v-card-title>

                        <v-card-subtitle class="subtitile my-0 py-0">{{ book.author }}</v-card-subtitle>
                        <v-card-subtitle class="my-0 py-0">{{ book.price }}</v-card-subtitle>

                        <v-card-actions>
                            <v-btn class="mb-2" dark small color="yellow darken-2" to="/payment">
                                <v-icon dark>mdi-cart-arrow-down</v-icon>
                                PayPal
                            </v-btn>

                            <v-spacer></v-spacer>

                            <v-btn icon @click="show = !show">
                                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="show">
                            <v-divider></v-divider>
                                <v-card-text>{{ book.summary }}</v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-banner>
    </v-container>
</template>

<script>
    import SearchBar from '@/components/SearchBar.vue';

    export default {
        name: 'HomeView',
        components: {
            SearchBar
        },
        data: () => ({
            books: [
                {
                    id: '1',
                        url:'https://placekitten.com/g/260/200',
                        title: 'Harry Potter und der Stein der Weisen',
                        author: 'J. K. Rowling | Cornelsen Verlag',
                        summary: 'Harry Potter erfährt an seinem elften Geburtstag, dass er ein Zauberer ist, und wird an die Hogwarts-Schule für Hexerei und Zauberei eingeladen. Dort entdeckt er eine Welt voller Magie, Freundschaft und Abenteuer. Zusammen mit seinen neuen Freunden Ron und Hermine erlebt er aufregende Unterrichtsstunden, entdeckt seine besonderen Fähigkeiten und stößt auf mysteriöse Rätsel. Doch bald erfährt er von einem geheimnisvollen Stein der Weisen, der unermessliche Macht verleihen soll. Gemeinsam mit seinen Freunden begibt sich Harry auf eine gefährliche Reise, um den Stein zu finden und das Böse zu besiegen, das darauf aus ist, ihn zu stehlen. Eine magische und mitreißende Geschichte über Mut, Freundschaft und die Kraft des Guten.',
                        price: "24,99€",
                },
            ],
            show: false,
        }),
    }
</script>