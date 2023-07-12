<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { chartOptions1 } from '@/stores/charts1'

const props = defineProps({
	index: {
		type: Number,
		default: 1
	}
})

const modelValue = defineModel<boolean>()

const series1 = [{ name: 'Тренд', data: [55, 57, 65, 70, 77, 80, 67] }]
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
