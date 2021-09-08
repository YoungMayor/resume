<template>
    <v-card :to="data.slug" nuxt :ripple="false">
        <v-img
            class="white--text align-end"
            height="400px"
            :src="$resume.avatarURL(data.avatar)"
            gradient="to top right, #000000, #00000000"
        >
            <v-card-title class="white--text text-h4">
                {{ data.name }}
            </v-card-title>
        </v-img>
    </v-card>
</template>

<script>
export default {
    name: "ResumeCard",

    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>
