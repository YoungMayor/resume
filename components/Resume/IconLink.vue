<template>
    <v-list-item dense class="list" :href="href">
        <v-list-item-icon class="mr-0 my-0">
            <v-icon v-text="icon" color="teal" small></v-icon>
        </v-list-item-icon>
        <v-list-item-content class="py-0">
            <span class="text">
                {{ text }}
            </span>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    name: 'ResumeIconList',

    props: {
        icon: {
            type: String,
        },
        text: {
            type: String,
        },
        href: {
            type: String,
        },
    },
}
</script>

<style>
.list {
    padding: 0;
    min-height: 11px;
}
.text {
    font-size: 11px;
}
</style>
