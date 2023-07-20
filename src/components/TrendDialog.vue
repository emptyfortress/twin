<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { randomArray } from '@/utils/utils'

const props = defineProps({
	index: {
		type: Number,
		default: 1
	}
})

const chartOptions1 = {
	xaxis: {
		type: 'datetime',
		categories: [
			'2022-03-04',
			'2022-03-11',
			'2022-03-18',
			'2022-03-24',
			'2022-04-01',
			'2022-04-08',
			'2022-04-14',
		],
	},

	chart: {
		type: 'area',
		zoom: {
			enabled: false,
		},
		selection: {
			enabled: true,
		},
	},
	dataLabels: {
		enabled: true,
	},
	stroke: {
		curve: 'smooth',
	},
	yaxis: {
		opposite: true,
	},
}
const modelValue = defineModel<boolean>()

const series1 = [{ name: 'Тренд', data: randomArray(7, 30, 40) }]
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card(style="width: 900px; max-width: 80vw;")
		q-card-section.row.items-center.q-pb-none
			.text-h6 Параметр {{ props.index + 1 }}
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section
			VueApexCharts(type="area" :options="chartOptions1" :series="series1")
</template>

<style scoped lang="scss"></style>
