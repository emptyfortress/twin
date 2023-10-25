<script setup lang="ts">
import { ref, computed, nextTick, watchEffect } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { useTree } from '@/stores/tree'
import { useGrid } from '@/stores/grid'
import { hod, speed } from '@/stores/speedhod'
// import { categ1, seri1 } from '@/stores/speedtime'
// import { categ2, seri2 } from '@/stores/hodtime'
// import { categ3, seri3 } from '@/stores/toktime'
// import { categ4, seri4 } from '@/stores/volthod'
// import { categ5, seri5 } from '@/stores/volttime'

const sss = ref(false)
const mytree = useTree()
const grid = useGrid()

const left = ref('')
const top = ref('')
const calc = ref('')
const minSel = ref(0)
const maxSel = ref(0)

// const test = ((_: any, e: any) => {
// 	let min = e.xaxis.min
// 	let max = e.xaxis.max
// 	minSel.value = Number(min.toFixed())
// 	maxSel.value = Number(max.toFixed())
//
// 	let sel = document.getElementsByClassName('apexcharts-selection-rect')
// 	let bound = sel[0].getBoundingClientRect()
// 	top.value = bound.height / 2 + 85 + 'px'
// 	left.value = bound.right - 540 + 'px'
// 	calc.value = (max - min).toFixed(2)
// 	izm.value = calc.value
//
// 	setTimeout(() => {
// 		sss.value = true
// 	}, 100)
//
// })
// const deselect = (() => {
// 	chart.value.updateOptions({
// 		chart: {
// 			selection: {
// 				xaxis: {
// 					min: undefined,
// 					max: undefined
// 				}
// 			},
// 		},
// 	})
// 	sss.value = false
// })
const chart = ref()
// const izm = ref()

// const setSelection = (() => {
// 	let options = {
// 		x: minSel.value,
// 		x2: maxSel.value,
// 		borderColor: 'blue',
// 		label: {
// 			borderColor: 'blue',
// 			style: {
// 				color: '#fff',
// 				background: 'blue',
// 				fontSize: '20px',
// 			},
// 			orientation: 'horizontal',
// 			text: izm.value
// 		}
// 	}
// 	chart.value.clearAnnotations()
// 	chart.value.addXaxisAnnotation(options)
// 	deselect()
// })

const fuck = computed(() => {
	if (mytree.selectedNode === null) {
		return ''
	} else return mytree.selectedNode.data.text
})

const calcCateg = computed(() => {
	switch (mytree.selectedNode?.data.text) {

		case 'Скорость от хода':
			return hod

		// case 'Скорость от времени':
		// 	return categ1
		//
		// case 'Ход от времени':
		// 	return categ2
		//
		// case 'Ток от времени':
		// 	return categ3
		//
		// case 'Напряжение от хода':
		// 	return categ4
		//
		// case 'Напряжение от времени':
		// 	return categ5

		default:
			return []
	}
})

const options1 = ref({
	chart: {
		type: 'line',
		animations: {
			enabled: false,
			speed: 100
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
		enabled: true
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: ['smooth', 'smooth'],
		width: [3, 2],
		dashArray: [0, 2],
	},
	title: {
		text: fuck
	},
	markers: {
		hover: {
			sizeOffset: 5
		}
	},
	xaxis: {
		type: 'numeric',
		categories: calcCateg,
	},
	yaxis: {
		decimalsInFloat: 2,
	},
})

let i = 0

const add = ((event: any, chartContext: any, config: any) => {
	let el = event.target.parentNode
	if ( el && el.className !== 'apexcharts-toolbar') {
		const dp = config.dataPointIndex
		let myx = hod[dp]
		let myy = speed[0].data[dp].toFixed(3)
		i += 1
		if (i < 7) {
			chart.value.addXaxisAnnotation({
				x: myx,
				label: {
					text: i,
					orientation: 'horizontal',
				}
			})
			grid.addMetka({
				label: i.toString(),
				x: myx,
				y: myy,
			})
		}
	} else return
})

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
q-card.q-mt-md
	q-card-section
		VueApexCharts(ref="chart" v-if="mytree.selectedNode?.data.text === 'Скорость от хода'" :height="450" width="100%" :options="options1" :series="speed" @click="add" )
		// VueApexCharts(ref="chart" v-if="mytree.selectedNode.data.text === 'Скорость от времени'"  :height="450" width="100%" :options="options1" :series="seri1" @selection="test")
		// VueApexCharts(ref="chart" v-if="mytree.selectedNode.data.text === 'Ход от времени'"  :height="450" width="100%" :options="options1" :series="seri2" @selection="test")
		// VueApexCharts(ref="chart" v-if="mytree.selectedNode.data.text === 'Ток от времени'"  :height="450" width="100%" :options="options1" :series="seri3" @selection="test" )
		// VueApexCharts(ref="chart" v-if="mytree.selectedNode.data.text === 'Напряжение от хода'"  :height="450" width="100%" :options="options1" :series="seri4" @selection="test" )
		// VueApexCharts(ref="chart" v-if="mytree.selectedNode.data.text === 'Напряжение от времени'"  :height="450" width="100%" :options="options1" :series="seri5" @selection="test" )
		q-card-section.work(v-if="mytree.selectedNode?.children.length > 0") Выберите параметр

</template>

<style scoped lang="scss">
.hd {
	font-size: 2.125rem;
}

// .subgrid {
// 	display: grid;
// 	grid-template-columns: 1fr 300px;
//
// 	&.metka {
// 		grid-template-columns: 1fr;
// 	}
// }

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
	font-size: 2rem;
}
</style>
