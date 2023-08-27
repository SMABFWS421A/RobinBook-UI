<template>
    <v-simple-table dense class="custom-table round-lg primary lighten-2">
        <template v-slot:default>

            <thead>
                <tr>
                    <th class="custom-header">Persönliche Informationen</th>
                    <th class="custom-header"> <v-btn @click ="saveProfile, send" x-small color="orange" dark>
                            Änderungen speichern
                        </v-btn></th>



                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p class="row1"><b><label for="firstName">Vorname:</label></b></p>
                    </td>
                    <td>
                        <p class="row1"><input type="text" id="firstName" v-model="$store.state.user.firstName"></p>
                    </td>

                </tr>
                <tr class="mx-auto">
                    <td>
                        <p class="row1"><label for="lastName">Nachname:</label></p>
                    </td>
                    <td>
                        <p class="row1"><input type="text" id="lastName" v-model="$store.state.user.lastName"></p>
                    </td> 

                </tr>
                <tr>
                    <td>
                        <p class="row1"><label for="streetname">Straßenname:</label></p>
                    </td>
                    <td>
                        <p class="row1"><input type="text" id="streetname" v-model="$store.state.user.streetname"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><label for="houseNumber">Hausnummer:</label></p>
                    </td>
                    <td>
                        <p class="row1"><input type="text" id="houseNumber" v-model="$store.state.user.houseNumber"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><label for="zipCode">PLZ:</label></p>
                    </td>
                    <td>
                        <p class="row1"><input type="text" id="zipCode" v-model="$store.state.user.zipCode"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><label for="state">Stadt:</label></p>
                    </td>
                    <td>
                        <p class="row1"><input type="text" id="state" v-model="$store.state.user.state"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><label for="eMail">E-Mail:</label></p>
                    </td>
                    <td>
                        <p class="row1"><input type="text" id="eMail" v-model="$store.state.user.eMail"></p>
                    </td>
                </tr>
            </tbody>






        </template>
    </v-simple-table>
</template>
 
 
 
<script>

import axios from 'axios';

export default {
   /* data() {
        return {
            profile: {
                firstName: '',
                lastName: '',
                streetname: '',
                houseNumber: '',
                zipCode: '',
                state: '',
                eMail: ''
            }
        };
    },*/
    methods: {
        saveProfile() {
            //hier Logik für das Speichern der neuen Daten eingeben.
           
            const person123 = { firstName:this.$store.state.user.firstName,
                                lastName:this.$store.state.user.lastName,
                                streetname:this.$store.state.user.streetname,
                                houseNumber:this.$store.state.user.houseNumber,
                                zipCode:this.$store.state.user.zipCode,
                                state:this.$store.state.user.state,
                                eMail:this.$store.state.user.eMail}
           alert("Änderungen wurden gespeichert");


        },

       

        send(data){
        //     axios
        //         .post("/api/add_user", this.$store.state.user)
        //         .then(response => {
        //             alert("Daten erfolgreich gesendet:",response.data);
        //         })
        //         .catch(error => {alert("Senden der Daten nicht erfolgreich:", error);}); 
         }
    },

    
    
}
</script>
<style>.row1 {

    color: white;

}</style>