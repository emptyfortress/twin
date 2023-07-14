<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'

const series = [
	{
		type: 'rangeArea',
		name: 'Phase 1 Range',

		data: [
			{
				x: 'Jan',
				y: [1100, 1900]
			},
			{
				x: 'Feb',
				y: [1200, 1800]
			},
			{
				x: 'Mar',
				y: [900, 2900]
			},
			{
				x: 'Apr',
				y: [1400, 2700]
			},
			{
				x: 'May',
				y: [2600, 3900]
			},
			{
				x: 'Jun',
				y: [500, 1700]
			},
			{
				x: 'Jul',
				y: [1900, 2300]
			},
			{
				x: 'Aug',
				y: [1000, 1500]
			}
		]
	},

	{
		type: 'rangeArea',
		name: 'Phase 2 Range',
		data: [
			{
				x: 'Jan',
				y: [3100, 3400]
			},
			{
				x: 'Feb',
				y: [4200, 5200]
			},
			{
				x: 'Mar',
				y: [3900, 4900]
			},
			{
				x: 'Apr',
				y: [3400, 3900]
			},
			{
				x: 'May',
				y: [5100, 5900]
			},
			{
				x: 'Jun',
				y: [5400, 6700]
			},
			{
				x: 'Jul',
				y: [4300, 4600]
			},
			{
				x: 'Aug',
				y: [2100, 2900]
			}
		]
	},

	{
		type: 'rangeArea',
		name: 'Phase 3 Range',
		data: [
			{
				x: 'Jan',
				y: [6000, 6200]
			},
			{
				x: 'Feb',
				y: [5000, 5300]
			},
			{
				x: 'Mar',
				y: [5200, 5400]
			},
			{
				x: 'Apr',
				y: [6000, 6800]
			},
			{
				x: 'May',
				y: [5100, 6500]
			},
			{
				x: 'Jun',
				y: [6400, 6700]
			},
			{
				x: 'Jul',
				y: [5300, 5600]
			},
			{
				x: 'Aug',
				y: [3100, 3900]
			}
		]
	},
	{
		type: 'line',
		name: 'Phase 2 Median',
		data: [
			{
				x: 'Jan',
				y: 1500
			},
			{
				x: 'Feb',
				y: 1700
			},
			{
				x: 'Mar',
				y: 1900
			},
			{
				x: 'Apr',
				y: 2200
			},
			{
				x: 'May',
				y: 3000
			},
			{
				x: 'Jun',
				y: 1000
			},
			{
				x: 'Jul',
				y: 2100
			},
			{
				x: 'Aug',
				y: 1200
			},
			{
				x: 'Sep',
				y: 1800
			},
			{
				x: 'Oct',
				y: 2000
			}
		]
	},
	{
		type: 'line',
		name: 'Phase 1 Median',
		data: [
			{
				x: 'Jan',
				y: 3300
			},
			{
				x: 'Feb',
				y: 4900
			},
			{
				x: 'Mar',
				y: 4300
			},
			{
				x: 'Apr',
				y: 3700
			},
			{
				x: 'May',
				y: 5500
			},
			{
				x: 'Jun',
				y: 5900
			},
			{
				x: 'Jul',
				y: 4500
			},
			{
				x: 'Aug',
				y: 2400
			},
			{
				x: 'Sep',
				y: 2100
			},
			{
				x: 'Oct',
				y: 1500
			}
		]
	},
	{
		type: 'line',
		name: 'Phase 3 Median',
		data: [
			{
				x: 'Jan',
				y: 6050
			},
			{
				x: 'Feb',
				y: 5100
			},
			{
				x: 'Mar',
				y: 5300
			},
			{
				x: 'Apr',
				y: 6550
			},
			{
				x: 'May',
				y: 5800
			},
			{
				x: 'Jun',
				y: 6500
			},
			{
				x: 'Jul',
				y: 5500
			},
			{
				x: 'Aug',
				y: 3700
			},
			{
				x: 'Sep',
				y: 3500
			},
			{
				x: 'Oct',
				y: 3400
			}
		]
	}

]

const options = {
	chart: {
		height: 250,
		type: 'rangeArea',
		animations: {
			speed: 500
		}
	},
	colors: ['#d4526e', '#33b2df', '#4b8353', '#d4526e', '#33b2df', '#4b8353'],
	dataLabels: {
		enabled: false
	},
	fill: {
		opacity: [0.24, 0.24, 0.24, 1, 1, 1]
	},
	forecastDataPoints: {
		count: 2
	},
	stroke: {
		curve: 'straight',
		width: [0, 0, 0, 2, 2, 2]
	},
	legend: {
		show: true,
		customLegendItems: ['Phase 1', 'Phase 2', 'Phase 3'],
		inverseOrder: true
	},
	title: {
		text: 'Range Area with Forecast Line (Combo)'
	},
	markers: {
		hover: {
			sizeOffset: 5
		}
	}
}
</script>

<template lang="pug">
q-page(padding)
	.container
		.hd Пример графика
		q-card
			q-card-section
				VueApexCharts(:options="options" :series="series")

</template>

<style scoped lang="scss">
.hd {
	font-size: 2.125rem;
}
</style>
