<template>
    <nav>
        <v-btn v-for="(item, i) in headerLinks"
            :key="i"
            text
            color="primary"
            class="mr-4"
            :to="item?.to">
                <v-icon v-if="item?.icon"
                    class="mr-2">{{ item.icon }}</v-icon>
                {{ item?.title }}
        </v-btn>
    </nav>
</template>

<script>
    export default {
        name: 'Links',
        props: [
            'headerLinks',
        ],
    }
</script>