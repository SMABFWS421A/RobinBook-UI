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
                        <p class="row1">{{ $store.state.user.firstName }}</p>
                    </td>
                    <!-- Add more rows as needed -->
                </tr>
                <tr class="mx-auto">
                    <td>
                        <p class="row1"><b>Nachname:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.lastName }}</p>
                    </td>

                </tr>
                <tr>
                    <td>
                        <p class="row1"><b>Straßenname:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.streetName }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><b>Hausnummer:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.houseNumber }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><b>PLZ:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.zipCode }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><b>Stadt:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.state }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="row1"><b>E-Mail:</b></p>
                    </td>
                    <td>
                        <p class="row1">{{ $store.state.user.eMail }}</p>
                    </td>
                </tr>
            </tbody>

            <!-- <v-btn
        class="ma-2 mx-auto primary lighten-2"
        color = "white"
        outlined
        elevation="24"
        small  
        to="/updateProfile">
        <v-icon left> mdi-pencil</v-icon>
        Profil bearbeiten</v-btn>-->





        </template>
    </v-simple-table>
</template>
 
 
 
<script>
export default {
    name: 'Profile',
    data: () => ({
        user: {
            firstName: `Max`,
            lastName: `Mustermann`,
            streetName: `bei Anna Zuhause`,
            houseNumber: `-1`,
            zipCode: `12340`,
            state: `Bergisch Gladbach`,
            eMail: `name@gmail.com`,
        }
    })
}
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