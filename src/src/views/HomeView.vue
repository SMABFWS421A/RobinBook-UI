<template>
    <v-container>
        <SearchBar></SearchBar>

            <h1>Herzlich Willkommen!</h1>
            <h2 class="mb-3">Starte jetzt deine Reise bei RobinBook und erstelle dein erstes Inserat.</h2>
            
            <v-btn
                class="mb-9"
                dark
                medium
                color="orange"
                to="/create"
            >
                <v-icon dark>mdi-plus</v-icon>
                Neues Inserat erstellen
            </v-btn>
        
        <v-banner
            class="rounded-lg"
            elevation="5"
            color="primary lighten-2"
        >
            
            <h1 
                class="mt-2"
                style="color: white"
            >
                Unsere Empfehlungen:</h1>

            <v-row class="mt-2">
                <v-col v-for="book in books" :key="book.id">
                    <v-card
                        class="mx-auto"
                        max-width="260"
                    >
                        <v-img
                        :src="book.url"
                        height="200px"
                        ></v-img>

                        <router-link :to="`/article/${book.id}`">
                            <v-card-title>
                                <v-list-item-title>{{ book.title }}</v-list-item-title>
                            </v-card-title>
                        </router-link>

                        <v-card-subtitle class="subtitile">
                            {{ book.author }}
                        </v-card-subtitle>

                        <v-card-actions>
                        <v-btn
                            color="orange lighten-2"
                            text
                            small
                            to="/wishlist"
                        >
                        <v-icon dark>mdi-plus</v-icon>
                            Merkliste
                        </v-btn>

                        <v-btn
                            color="orange lighten-2"
                            text
                            small
                            to="/payment"
                        >
                        <v-icon dark>mdi-cart-arrow-down</v-icon>
                            Kaufen
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                            icon
                            @click="bookIdShown=book.id"
                        >
                            <v-icon>{{ bookIdShown === book.id ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                        <div v-show="bookIdShown === book.id">
                            <v-divider></v-divider>

                            <v-card-text>
                                {{ book.summary }}
                            </v-card-text>
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
                },
                {
                    id: '2',
                    url:'https://placekitten.com/260/200',
                    title: 'Percy Jackson – Diebe im Olymp',
                    author: 'Rick Riordan ⎥ Carlsen Verlag',
                    summary: 'Percy Jackson ist ein ganz normaler Junge, der an einer ganz normalen Schule Probleme hat. Aber als er erfährt, dass er der Sohn des Poseidon, des Meeresgottes, ist, ändert sich sein Leben schlagartig. Mit seinen neuen Freunden, der klugen Annabeth und dem satyrischen Grover, begibt sich Percy auf eine gefährliche Reise, um den gestohlenen Blitz des Zeus zurückzuholen und einen Krieg zwischen den Göttern zu verhindern. Denn nur er kann das drohende Unheil abwenden und die Welt der Menschen vor der Zerstörung bewahren. Eine aufregende und humorvolle Abenteuergeschichte voller griechischer Mythologie und spannender Herausforderungen.',
                },
                {  
                    id: '3',
                    url:'https://placekitten.com/g/260/200',
                    title: 'Herr der Ringe - Die Gefährten',
                    author: 'J.R.R. Tolkien ⎥ Klett-Cotta Verlag',
                    summary: 'In einer fernen Zeit, in einem unerforschten Teil der Welt, liegt der Eine Ring, den der dunkle Herrscher Sauron einst schuf. Wer ihn besitzt, kann die Macht über ganz Mittelerde erlangen. Doch der Ring ging verloren, und viele Jahrhunderte später fällt er dem Hobbit Frodo Beutlin in die kleinen Hände. Gemeinsam mit einigen Gefährten begibt er sich auf eine gefährliche Reise, um den Ring zu vernichten und die Welt vor der drohenden Dunkelheit zu bewahren. Doch die Schatten sind lang, und der Weg ist voller Gefahren. Eine epische Schlacht zwischen Gut und Böse beginnt, und Frodo muss herausfinden, ob er stark genug ist, die Bürde des Rings zu tragen und das Schicksal Mittelerdes zu entscheiden.',
                },
                {
                    id: '4',
                    url:'https://placekitten.com/260/200',
                    title: 'Minecraft Redstone Guide',
                    author: 'Off. Minecraft Team ⎥ MOJANG',
                    summary: 'Entdecken Sie die faszinierende Welt von Redstone in Minecraft! Dieser umfassende Guide führt Sie in die Geheimnisse und Möglichkeiten von Redstone ein, dem vielseitigen Element in Minecraft, mit dem Sie komplexe Mechanismen, Automatisierungen und coole Redstone-Geräte bauen können.',
                },
            ],
            bookIdShown: 0,
        }),
    }
</script>