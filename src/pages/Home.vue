<script setup lang="ts">
import { ref } from 'vue'
import { uid } from 'quasar'
import SvgIcon from '@/components/global/SvgIcon.vue'
import VueApexCharts from 'vue3-apexcharts'

const options = ref({
	chart: {
		height: 350,
		type: 'line',
		zoom: {
			enabled: true,
			type: 'xy',
		},
		selection: {
			enabled: false
		},
		toolbar: {
			show: true,
			tools: {
				download: true,
				customIcons: [
					{
						icon: '<img src="/measure.svg">',
						title: 'Паспортный график',
						index: 4,
						class: "customicon measure",
						click: function () {
							setMode()
						}
					},
					{
						icon: '<img src="/sample.svg">',
						title: 'Паспортный график',
						index: 5,
						class: "customicon",
						click: function () {
							chart.value.clearAnnotations()
						}
					}
				]
			},
			autoSelected: 'selection'
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'straight'
	},
	title: {
		text: 'Product Trends by Month',
		align: 'left'
	},
	grid: {
		row: {
			colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
			opacity: 0.5
		},
	},
	xaxis: {
		type: 'numeric',
		categories: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	},
	annotations: {
		xaxis: [{
			x: 2.5,
			label: {
				text: 'fuck'
			},
			strokeDashArray: 2,
			borderColor: '#c2c2c2',
			fillColor: '#c2c2c2',
			opacity: 0.5,
			offsetX: 0,
			offsetY: 0,
		}],
	},
})

const series = [{
	name: "Desktops",
	data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}]
const chart = ref()
let i = 1

const add = ((event: any, chartContext: any, config: any) => {
	let index = config.dataPointIndex
	let point = chartContext.data.twoDSeriesX[index]
	if (i < 7) {
		let myid = uid()
		chart.value.addXaxisAnnotation({
			id: myid,
			x: point,
			strokeDashArray: 2,
			label: {
				text: i,
				orientation: 'horizontal',
				click: console.log(event)
			},
		})
		// console.log(event)
		// console.log(chartContext)
		// console.log(config)
		i += 1
	} else {
		chart.value.clearAnnotations()
		i = 1
	}
})

const myFuck = ((e: string) => {
	console.log(111)
})

// const add = ((event, chartContext, config) => {
// 	console.log(event)
// 	console.log(chartContext)
// })
const mode = ref(0)

const setMode = (() => {
	mode.value = 1
})
const mod = ref(true)
</script>

<template lang="pug">
q-page(padding)
	.container
		h4 Цифровой двойник
		.text-h6 Система on-line предиктивного анализа работоспособности энергетических объектов с использованием технологии искусственного интеллекта и «цифрового двойника».
		// q-img(src="@/assets/img/bliz.jpg" width="500px")
		p Сюда бы хорошо графики поместить. Сделать красивый дашборд.
		q-card.q-pa-md
			VueApexCharts(ref="chart" :height="450" width="100%" :options="options" :series="series" @dataPointSelection="add" )

</template>

<style scoped lang="scss">
h4 {
	margin: 0;
}

.fuck {
	width: 200px;
	height: 200px;
	background: #ccc;
}

.text-h6 {
	max-width: 900px;
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.q-img {
	opacity: .15;
}
</style>
