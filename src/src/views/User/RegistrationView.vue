<template>
    <v-container>
          <v-card>
            <v-img
                :src="require('@/assets/logo.png')"
                height="100"
                contain>
            </v-img>
            <v-card-title>Registrierung</v-card-title>
            <v-card-text>
              <v-form ref="form" @submit="register">
                <v-text-field
                  v-model="firstName"
                  label="Vorname"
                  required>
                </v-text-field>
                <v-text-field
                  v-model="lastName"
                  label="Nachname"
                  required>
                </v-text-field>
                <v-text-field
                  v-model="email"
                  label="E-Mail"
                  required>
                </v-text-field>
                <v-text-field
                  v-model="address"
                  label="Adresse"
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
                    <v-btn text @click="cancel">Abbrechen</v-btn>
                  </v-col>
                  <v-col cols="6" class="text-right">
                    <v-btn color="primary" @click="register">Registrieren</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
    </v-container>
  </template>
  
<script>
    export default {
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                password: '',
            };
        },
        methods: {
            register() {
                // Hier kannst du die Logik für die Registrierung implementieren
                // Du kannst die eingegebenen Werte über die entsprechenden Datenobjekte abrufen
                // Beispiel: 
                // const newUser = {
                //   firstName: this.firstName,
                //   lastName: this.lastName,
                //   email: this.email,
                //   address: this.address,
                //   password: this.password
                // };
                // ... Weiterverarbeitung der Daten
            },
            cancel() {
                // Hier kannst du die Logik für den Abbrechen-Button implementieren
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