<template>
    <v-app>
        <v-dialog
            :value="true"
            persistent
            width="300"
            :overlay-opacity="1"
            v-if="!data_loaded"
        >
            <v-card color="primary">
                <v-card-text class="white--text">
                    Initialising Application, please wait

                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>

        <template v-else>
            <v-app-bar app clipped-right flat height="72">
                <v-app-bar-title> Resume Builder </v-app-bar-title>
            </v-app-bar>

            <v-main>
                <v-sheet class="pa-3" height="100%">
                    <Nuxt />
                </v-sheet>
            </v-main>

            <v-footer
                app
                color="primary darken-4"
                class="white--text text-caption d-flex justify-space-around"
                height="48"
                inset
            >
                <span> &copy; 2020 All Rights Reserved </span>

                <span> Meyoron Aghogo </span>
            </v-footer>
        </template>
    </v-app>
</template>

<script>
export default {
    name: "DefaultLayout",

    data() {
        return {
            drawer: false,
            data: {},
            data_loading: false,
            data_loaded: false,

            skills_loaded: false,

            loading_cv_download: false,
        };
    },

    methods: {
        //
    },

    computed: {
        //
    },

    async created() {
        this.data_loading = true;

        return await new Promise(() => {
            setTimeout(() => {
                this.data_loading = false;
                this.data_loaded = true;
            }, 1000);
        });
    },
};
</script>
