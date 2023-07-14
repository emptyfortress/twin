<script setup lang="ts">
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { options, options1, series, series1 } from '@/stores/charts2'

const sss = ref(false)

const test = ((_, e) => {
	console.log('min ' + (e.xaxis.min - 1) * 10)
	console.log('max ' + (e.xaxis.max - 1) * 10)
	setTimeout(() => {
		sss.value = true
	}, 200)

})
const deselect = (() => {
	console.log('laksdjlajks')
	chart.value.updateOptions({
		chart: {
			selection: {
				xaxis: {
					min: undefined,
					max: undefined
				}
			}
		}
	})
	sss.value = false
})
const chart = ref()

</script>

<template lang="pug">
q-page(padding)
	.container
		.hd Примеры графиков
		q-card.q-mb-md.rel
			q-card-section
				VueApexCharts(ref="chart" :options="options1" :series="series1" @selection="test" )
			.count(v-if="sss" @click="deselect")

		q-card
			q-card-section
				VueApexCharts(:options="options" :series="series")

</template>

<style scoped lang="scss">
.hd {
	font-size: 2.125rem;
}

.q-card {
	width: 800px;
}

.rel {
	position: relative;
}

.count {
	position: absolute;
	bottom: 1rem;
	top: 50%;
	left: 50%;
	width: 20px;
	height: 20px;
	background: red;
}

:deep(rect.apexcharts-selection-rect) {

	&::after {
		content: '';
		display: block;
		position: absolute;
		top: 1rem;
		left: 1rem;
		width: 20px;
		height: 20px;
		background: red;
	}
}
</style>
