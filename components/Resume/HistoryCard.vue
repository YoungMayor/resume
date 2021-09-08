<template>
    <div class="history-card">
        <h2 class="history-title">
            {{ title }}
        </h2>
        <h4 class="history-subtitle">
            {{ institution }}
        </h4>
        <div class="d-flex">
            <ResumeIconLink icon="mdi-calendar" :text="date" v-if="date" />
            <ResumeIconLink
                icon="mdi-map-marker"
                :text="location"
                v-if="location"
            />
        </div>
        <p class="history-note mb-1">
            {{ note }}
        </p>
        <ul class="history-list" v-if="list && list.length">
            <li
                class="history-list-element"
                v-for="(item, index) in list"
                :key="index"
                v-html="item"
            ></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ResumeHistoryCard',

    props: {
        title: {
            type: String,
            required: true,
        },
        institution: {
            type: String,
            default: null,
        },
        date: {
            type: String,
            default: '',
        },
        location: {
            type: String,
            required: false,
        },
        note: {
            type: String,
            required: false,
        },
        list: {
            type: Array,
            default: function () {
                return []
            },
        },
    },
}
</script>

<style>
.history-card {
    border-bottom: 1px dashed rgb(167, 167, 167);
    padding: 7px 0;
    margin-bottom: 15px;
    /* break-inside: avoid; */
}

.history-title {
    font-weight: normal;
}

.history-subtitle {
    color: teal;
}
</style>
