<script>
import { Pie } from 'vue-chartjs'

export default {
    name: 'ResumeMyTime',

    extends: Pie,

    data() {
        return {
            chartdata: {
                labels: [],
                datasets: [
                    {
                        label: this.label,
                        data: [],
                        backgroundColor: [],
                    },
                ],
            },
            options: {
                responsive: true,
            },
        }
    },

    props: {
        dataSet: {
            type: Array,
            required: true,
        },

        label: {
            type: String,
            default: 'My Time',
        },
    },

    mounted() {
        this.chartdata.datasets[0].label = this.label
        this.dataSet.forEach((element) => {
            let [label, value, color] = element

            this.chartdata.labels.push(label)
            this.chartdata.datasets[0].data.push(value)
            this.chartdata.datasets[0].backgroundColor.push(color)
        })
        this.renderChart(this.chartdata, this.options)
    },
}
</script>
