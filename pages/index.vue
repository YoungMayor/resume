<template>
    <v-container fluid>
        <v-data-iterator
            :items="resumes"
            :items-per-page.sync="itemsPerPage"
            no-data-text="Currently no resume available"
        >
            <template v-slot:default="props">
                <v-row>
                    <v-col
                        v-for="resume in props.items"
                        :key="resume.slug"
                        cols="12"
                        sm="6"
                        md="4"
                        lg="3"
                    >
                        <Card :data="resume" />
                    </v-col>
                </v-row>
            </template>

            <template v-slot:no-data>
                <ErrorCard
                    title="No Resume Available."
                    icon="mdi-dots-hexagon mdi-spin"
                    desc="It seems you have no resume available at the moment, please create one and try again"
                />
            </template>
        </v-data-iterator>
    </v-container>
</template>

<script>
export default {
    name: "resumeIndex",

    data() {
        return {
            resumes: [],
            itemsPerPage: 10,
        };
    },

    created() {
        this.$content("resumes")
            .fetch()
            .then((items) => {
                return (this.resumes = items);
            });
    },
};
</script>
