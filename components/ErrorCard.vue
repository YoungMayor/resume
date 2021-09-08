<template>
    <div
        :style="{
            height: '100%',
        }"
        class="d-flex"
    >
        <v-sheet class="text-center flex my-auto">
            <span class="text-h6"> {{ title }} </span>

            <v-divider class="transparent"></v-divider>

            <v-icon class="text-h1"> {{ icon }} </v-icon>

            <v-divider class="mx-12 my-10"></v-divider>

            <span class="text-caption">
                {{ desc }}
            </span>

            <div></div>

            <v-btn class="mt-10" :to="returnLink" nuxt color="success">
                <v-icon left>
                    {{ returnIcon }}
                </v-icon>
                <span>
                    {{ returnText }}
                </span>
            </v-btn>
        </v-sheet>
    </div>
</template>

<script>
export default {
    name: "ErrorCard",

    props: {
        title: {
            type: String,
            default: "Oops!",
        },
        icon: {
            type: String,
            default: "mdi-hammer-wrench",
        },
        desc: {
            type: String,
            default: "An error occurred",
        },
        returnText: {
            type: String,
            default: "Go back home",
        },
        returnIcon: {
            type: String,
            default: "mdi-keyboard-backspace",
        },
        returnLink: {
            type: String,
            default: "/",
        },
    },
};
</script>
