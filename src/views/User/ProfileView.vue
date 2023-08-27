<template>
    <v-simple-table dense class="custom-table round-lg primary lighten-2">
        <template v-slot:default>

            <thead>
                <tr>
                    <th class="custom-header">Persönliche Informationen</th>
                    <th class="custom-header"> <v-btn class="button" fab dark x-small color="orange" to="/updateProfile">
                            <v-icon dark>
                                mdi-pencil
                            </v-icon>
                        </v-btn></th>



                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p class="row1"><b>Vorname:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.Firstname }}</p>
                    </td>
                    
                </tr>
                <tr class="mx-auto">
                    <td>
                        <p class="row1"><b>Nachname:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.Lastname }}</p>
                    </td>

                </tr>
                <tr>
                    <td>
                        <p class="row1"><b>Straßenname:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.Street_name }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><b>Hausnummer:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.House_number }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><b>PLZ:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.Zipcode }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><b>Stadt:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.State }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><b>E-Mail:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.Mail_address }}</p>
                    </td>
                </tr>
            </tbody>

            





        </template>
    </v-simple-table>
</template>
 
 
 
<script>

import axios from 'axios';



export default {
    name: 'Profile',
    data: () => ({
        
    }),

    created() {
    axios.get(`http://localhost:3000/api/get_user_by_id/${this.$store.state.id}`).then(response => {
      this.$store.state.user = response.data; // Annahme: Die API antwortet mit den Benutzerdaten
    });
  }
};




</script>
<style>
.custom-header {

    padding-left: 10px;
    height: 1cm;


}

.v-simple-table__row>*:not(:first-child) {
    padding-left: 20px;

}

.row1 {
    color: white;
}</style>