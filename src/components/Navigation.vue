<template>
<v-navigation-drawer
    v-model="$store.state.isNavigation"
    prominent
    disable-resize-watcher
    app
    left>
        <v-list nav rounded>
            <v-list-item
                v-for="(item, i) in navigationItems"
                :key="i"
                class="text-center"
                @click="$store.state.isNavigation = !$store.state.isNavigation"
                :to="item?.to"
                :href="item?.href"
                color="blue">
                    <v-list-item-content>
                        <v-list-item-title>                            
                            {{ item.title }}</v-list-item-title>
                    </v-list-item-content>
            </v-list-item>
        </v-list>
</v-navigation-drawer>
</template>

<script>
    export default {
        name: 'Navigation',
        props: [
            'navigationItems',
        ],
    }
</script>