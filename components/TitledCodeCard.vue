<template>
    <v-card>
        <TitleLined :title="title" />

        <div
            class="d-block pa-4 grey darken-3 rounded-lg font-weight-thin text-subtitle-1"
        >
            <v-badge
                color="teal transparent--text"
                bordered
                :offset-x="25"
                :offset-y="-20"
                content="####"
            ></v-badge>

            <slot />
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'TitledCodeCard',

    props: {
        title: {
            type: String,
            default: null,
        },
    },
}
</script>
