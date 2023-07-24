<template>
    <v-footer app>
        <v-row class="text-center">
            <v-col cols="12">
                <p>&copy; {{ new Date().getFullYear() }} Projektarbeit <b>RobinBook</b></p>
            </v-col>
            <v-col cols="12">
                <v-btn v-for="(item, i) in footer"
                    :key="i"
                    text
                    color="primary"
                    :to="item?.to">{{ item?.title }}
                </v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            footer: [],
        },
        data: () => ({
        }),
    }
</script>