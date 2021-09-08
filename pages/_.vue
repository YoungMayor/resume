<template>
    <div>
        <div class="cv-container">
            <div class="cv-box-1">
                <div class="cv-section">
                    <div class="cv-title">
                        {{ payload.name }}
                    </div>

                    <div class="cv-sub-title">
                        {{ payload.title }}
                    </div>

                    <!-- <v-list dense> -->
                    <v-row dense class="cv-quick-links">
                        <v-col>
                            <ResumeIconLink
                                icon="mdi-phone"
                                :text="payload.phone"
                                :href="`tel:${payload.phone}`"
                            />
                            <ResumeIconLink
                                icon="mdi-web"
                                :text="payload.website"
                                :href="payload.website"
                            />
                        </v-col>

                        <v-col>
                            <ResumeIconLink
                                icon="mdi-email-multiple"
                                :text="payload.email"
                                :href="`mailto:${payload.email}`"
                            />
                            <ResumeIconLink
                                icon="mdi-map-marker"
                                :text="payload.address"
                            />
                        </v-col>
                    </v-row>

                    <!-- </v-list> -->
                </div>

                <ResumeTitledSection title="Summary">
                    <span v-html="payload.summary"></span>
                </ResumeTitledSection>

                <ResumeTitledSection title="Experience">
                    <ResumeHistoryCard
                        v-for="(
                            [title, institution, date, location, note, list],
                            index
                        ) in payload.histories.career"
                        :key="index"
                        v-bind="{
                            title,
                            institution,
                            date,
                            location,
                            note,
                            list,
                        }"
                    />
                </ResumeTitledSection>

                <ResumeTitledSection title="My Time" class="no-break">
                    <v-row justify="center">
                        <v-col cols="10">
                            <ResumeMyTime :dataSet="payload.time" />
                        </v-col>
                    </v-row>
                </ResumeTitledSection>

                <ResumeTitledSection title="Virtues" class="no-break">
                    <div
                        v-for="([label, value], index) in payload.competences"
                        :key="index"
                        class="mb-4"
                    >
                        <v-list-item-title
                            class="text-caption font-weight-light"
                        >
                            <span class="mr-1"> ({{ value }}%) </span>

                            <span>
                                {{ label }}
                            </span>
                        </v-list-item-title>

                        <v-progress-linear
                            :value="value"
                            color="teal"
                            height="5"
                            class="rounded-lg"
                        ></v-progress-linear>
                    </div>
                </ResumeTitledSection>
            </div>

            <div class="cv-box-2">
                <div class="cv-section text-right">
                    <v-avatar size="122">
                        <v-img :src="$resume.avatarURL(page.avatar)"></v-img>
                    </v-avatar>
                </div>

                <ResumeTitledSection title="Skills">
                    <v-chip
                        v-for="([lang, icon], index) in payload.technologies"
                        :key="index"
                        class="ma-1 font-weight-regular"
                        color="teal white--text"
                        small
                        :value="lang"
                        ripple
                    >
                        <v-icon x-small left color="white">
                            {{ icon }}
                        </v-icon>
                        <span class="white--text">
                            {{ lang }}
                        </span>
                    </v-chip>
                </ResumeTitledSection>

                <ResumeTitledSection title="Education">
                    <ResumeHistoryCard
                        v-for="(
                            [title, institution, date, location, note, list],
                            index
                        ) in payload.histories.education"
                        :key="index"
                        v-bind="{
                            title,
                            institution,
                            date,
                            location,
                            note,
                            list,
                        }"
                    />
                </ResumeTitledSection>

                <ResumeTitledSection title="Strengths">
                    <v-list dense>
                        <v-list-item
                            v-for="([note, icon], index) in payload.strengths"
                            :key="index"
                            disabled
                        >
                            <v-list-item-icon>
                                <v-icon v-text="icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <span class="text-caption">
                                    {{ note }}
                                </span>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </ResumeTitledSection>

                <ResumeTitledSection title="Social">
                    <v-list dense>
                        <v-list-item
                            v-for="(
                                [link, icon, label, color], index
                            ) in payload.icon_links"
                            :key="index"
                            :href="link"
                        >
                            <v-list-item-icon>
                                <v-icon
                                    v-text="icon"
                                    :color="`${color}`"
                                ></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <span class="text-caption">
                                    {{ label }}
                                </span>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </ResumeTitledSection>
            </div>
        </div>

        <div class="cv-projects-box">
            <ResumeTitledSection title="Projects">
                <v-row class="cv-projects-row">
                    <v-col
                        v-for="([title, note, list], index) in payload.projects"
                        :key="index"
                        cols="6"
                        class="cv-project-col"
                    >
                        <ResumeHistoryCard
                            v-bind="{
                                title,
                                note,
                                list,
                            }"
                        />
                    </v-col>
                </v-row>
            </ResumeTitledSection>
        </div>
    </div>
</template>

<script>
export default {
    name: "ResumePage",

    layout: "resume",

    head() {
        const { title, description, cover } = this.page;

        const image = this.$resume.avatarURL(cover);

        return {
            title: title,
            meta: this.$helpers.createSEOMeta({
                title,
                description,
                image,
                type: "blog",
            }),
        };
    },

    async asyncData({ $content, params }) {
        const page = await $content("resumes", params.pathMatch).fetch();
        console.log(page);

        const [prev, next] = await $content("resumes")
            .where({ private: { $ne: true } })
            .surround(params.pathMatch)
            .fetch();

        let payload = null;

        try {
            const data = await import(
                `@/resume-payloads/${params.pathMatch}.js`
            );

            payload = data.default;
        } catch (err) {
            console.log(err);
        }

        return {
            page,
            prev,
            next,
            payload,
        };
    },
};
</script>

<style lang="scss">
$primary: teal;
* {
    font-family: sans-serif;
    font-size: 13.5px;
    color: #585858;
}

.no-break {
    break-inside: avoid;
}

.cv-container {
    display: flex;
    justify-content: space-around;
}

.cv-box-1 {
    width: 60%;
}

.cv-box-2 {
    width: 35%;
}

/* .cv-projects-box {
    break-inside: avoid;
} */

.cv-section {
    margin-bottom: 15px;
}

.cv-title {
    font-size: 225%;
    font-weight: bolder;
    text-transform: uppercase;
    margin-bottom: 5px;
}

.cv-sub-title {
    font-size: 120%;
    font-weight: bold;
    color: teal;
}

/* .cv-projects-row {
    place-items: flex-end;
} */

.cv-project-col {
    break-inside: avoid;
}
</style>
