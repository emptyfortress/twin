<script setup lang="ts">
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { options, options1, series, series1 } from '@/stores/charts2'

const sss = ref(false)

const left = ref('')
const top = ref('')
const calc = ref(0)
const test = ((_: any, e: any) => {
	let min = (e.xaxis.min - 1) * 10
	let max = (e.xaxis.max - 1) * 10

	let sel = document.getElementsByClassName('apexcharts-selection-rect')
	let bound = sel[0].getBoundingClientRect()
	top.value = bound.height / 2 + 50 + 'px'
	left.value = bound.right - 230 + 20 + 'px'
	calc.value = max - min

	setTimeout(() => {
		sss.value = true
	}, 100)

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
			.count(v-if="sss" @click="deselect") {{ calc }}

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
	top: v-bind(top);
	left: v-bind(left);
	font-size: 1.3rem;
}
</style>
