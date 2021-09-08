<template>
    <div class="cv-section">
        <TitleLined
            :title="title"
            class="text-h5 font-weight-black text-uppercase teal--text"
        />

        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ResumeSectionWithTitle',

    props: {
        title: {
            type: String,
            required: true,
        },
    },
}
</script>
