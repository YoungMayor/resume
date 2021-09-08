<template>
    <v-app light>
        <v-sheet class="resume-page" min-height="100vh" min-width="100vw">
            <Nuxt />
        </v-sheet>
    </v-app>
</template>

<script>
export default {
    name: "ResumeLayout",

    data() {
        return {
            //
        };
    },

    computed: {
        //
    },

    head() {
        return {
            title: "Resume Download",
            meta: [
                {
                    name: "viewport",
                    content: "initial-scale=unset",
                },
            ],
        };
    },

    created() {
        this.$vuetify.theme.isDark = false;
    },
};
</script>

<style>
.resume-page {
    min-width: 210mm;
    display: flex;
    background-color: whitesmoke !important;
}

.resume-page > * {
    width: 210mm;
    display: block;
    background-color: white;
    margin: 0 auto;
    padding: 0.5in;
}

@page {
    size: auto;

    margin: 0.5in 0in;
}
</style>
