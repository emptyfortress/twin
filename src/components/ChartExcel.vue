<script setup lang="ts">
import { ref, computed, watch, watchEffect } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { useTree } from '@/stores/tree'
import { useGrid } from '@/stores/grid'
import { speed } from '@/stores/speedhod'
import { speed1 } from '@/stores/speedtime'
import { categ2, seri2 } from '@/stores/hodtime'
import { categ3, seri3 } from '@/stores/toktime'
import { categ4, seri4 } from '@/stores/volthod'
import { categ5, seri5 } from '@/stores/volttime'

const sss = ref(false)
const mytree = useTree()
const grid = useGrid()

const chart = ref()
const fuck = computed(() => {
	if (mytree.selectedNode === null) {
		return ''
	} else return mytree.selectedNode.data.text
})

const currentSeries = computed(() => {
	switch (mytree.selectedNode?.data.text) {
		case 'Скорость от хода':
			return speed

		case 'Скорость от времени':
			return speed1

		default:
			return []
	}
})

const nod = computed(() => {
	return mytree.selectedNode?.data.id
})
const len = computed(() => {
	return mytree.selectedNode?.data.metki.length
})

watch(nod, () => {
	if (!!chart.value && mytree.selectedNode?.children.length === 0) {
		chart.value.clearAnnotations()
		chart.value.clearAnnotations()
		chart.value.updateOptions({
			annotations: {
				xaxis: mytree.selectedNode?.data.metki,
			},
		})
		i = 0
	} else return
})

watch(len, newVal => {
	if (!!chart.value) {
		chart.value.clearAnnotations()
		chart.value.clearAnnotations()
		chart.value.updateOptions({
			annotations: {
				xaxis: mytree.selectedNode?.data.metki,
			},
		})
		i = mytree.selectedNode?.data.metki.length
	}
})

const options1 = {
	chart: {
		type: 'line',
		animations: {
			enabled: false,
			speed: 100,
		},
		zoom: {
			enabled: true,
			type: 'xy',
		},
		selection: {
			enabled: false,
		},
	},
	tooltip: {
		enabled: true,
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: ['smooth', 'smooth'],
		width: [3, 2],
		dashArray: [0, 2],
	},
	title: {
		text: '   ',
	},
	markers: {
		hover: {
			sizeOffset: 5,
		},
	},
	xaxis: {
		type: 'numeric',
	},
	yaxis: {
		decimalsInFloat: 2,
	},
}

let i = 0
const add = (event: any, chartContext: any, config: any) => {
	let el = event.target.parentNode
	if (el && el.className !== 'apexcharts-toolbar') {
		const dp = config.dataPointIndex
		let myx = currentSeries.value[0].data[dp][0]
		let myy = currentSeries.value[0].data[dp][1].toFixed(3)
		i += 1
		if (i < 7) {
			chart.value.addXaxisAnnotation({
				x: myx,
				label: {
					text: i,
					orientation: 'horizontal',
				},
			})
			mytree.addMetka({
				x: myx,
				y: myy,
				label: {
					text: i,
					orientation: 'horizontal',
				},
			})
		}
	} else return
}

watchEffect(() => {
	if (grid.reset == true) {
		chart.value.clearAnnotations()
		grid.reset = false
		i = 0
		chart.value.clearAnnotations()
		chart.value.clearAnnotations()
	}
})
</script>

<template lang="pug">
q-card.q-mt-md.rel
	q-card-section.work(v-if="mytree.selectedNode?.children.length > 0") Выберите параметр
	q-card-section(v-else)
		VueApexCharts(ref="chart" :height="450" width="100%" :options="options1" :series="currentSeries" @click="add")
		.ag {{ fuck }}

</template>

<style scoped lang="scss">
.hd {
	font-size: 2.125rem;
}

.ag {
	position: absolute;
	top: 0.8rem;
	left: 2rem;
	font-size: 0.9rem;
	font-weight: 600;
}

:deep(.customicon) {
	cursor: pointer;
	width: 18px;
	height: 18px;
	margin-top: 1px;
	margin-left: 5px;
	margin-right: -5px;
}

.work {
	height: 450px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
}
</style>
