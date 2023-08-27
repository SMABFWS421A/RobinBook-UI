<template>
    <v-container fluid>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
            <v-card>
                <v-img
                    :src="require('@/assets/logo.png')"
                    height="100"
                    contain>
                </v-img>
                <v-card-title class="orange--text">Login</v-card-title>
                    <v-form ref="form" @submit="login">
                        <v-text-field
                            v-model="email"
                            label="E-Mail"
                            required>
                        </v-text-field>
                        <v-text-field
                            v-model="password"
                            label="Passwort"
                            type="password"
                            required>
                        </v-text-field>
                        <v-row>
                        <v-col cols="6">
                            <v-btn text @click="forgotPassword">Passwort vergessen?</v-btn>
                        </v-col>
                        <v-col cols="6" class="text-right">
                            <v-btn color="primary" @click="login">Login</v-btn>
                        </v-col>
                        </v-row>
                    </v-form>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
  
<script>
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
            };
        },
        methods: {
            login() {
                // Hier kannst du die Logik für die Login-Funktion implementieren
                // Du kannst die eingegebenen Werte über this.email und this.password abrufen
                // Beispiel: if (this.email === 'benutzer' && this.password === 'passwort') { ... }
            },
            forgotPassword() {
                // Hier kannst du die Logik für die "Passwort vergessen" Funktion implementieren
            },
        },
    };
    </script>
    
    <style scoped>
    .v-card {
        max-width: 400px;
        margin: 0 auto;
        margin-top: 100px;
        padding: 20px;
    }
    .text-right {
        text-align: right;
    }
</style>