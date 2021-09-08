<template>
    <v-card-title class="pb-2 title-line">
        <v-divider class="mr-2"></v-divider>
        <slot>
            <span> {{ title }} </span>
        </slot>
        <v-divider class="ml-2"></v-divider>
    </v-card-title>
</template>

<script>
export default {
    name: 'TitledLine',

    props: {
        title: {
            type: String,
        },
    },
}
</script>
