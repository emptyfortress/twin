<script setup lang="ts">
import { ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { useTree } from '@/stores/tree'
import { categ, seri } from '@/stores/speedhod'
import { categ1, seri1 } from '@/stores/speedtime'
import { categ2, seri2 } from '@/stores/hodtime'
import { categ3, seri3 } from '@/stores/toktime'
import { categ4, seri4 } from '@/stores/volthod'
import { categ5, seri5 } from '@/stores/volttime'

const sss = ref(false)
const mytree = useTree()

const left = ref('')
const top = ref('')
const calc = ref('')
const minSel = ref(0)
const maxSel = ref(0)

const test = ((_: any, e: any) => {
	let min = e.xaxis.min
	let max = e.xaxis.max
	minSel.value = Number(min.toFixed())
	maxSel.value = Number(max.toFixed())

	let sel = document.getElementsByClassName('apexcharts-selection-rect')
	let bound = sel[0].getBoundingClientRect()
	top.value = bound.height / 2 + 85 + 'px'
	left.value = bound.right - 540 + 'px'
	calc.value = (max - min).toFixed(2)
	izm.value = calc.value

	setTimeout(() => {
		sss.value = true
	}, 100)

})
const deselect = (() => {
	chart.value.updateOptions({
		chart: {
			selection: {
				xaxis: {
					min: undefined,
					max: undefined
				}
			},
		},
	})
	sss.value = false
})
const chart = ref()
const izm = ref()

const setSelection = (() => {
	let options = {
		x: minSel.value,
		x2: maxSel.value,
		borderColor: 'blue',
		label: {
			borderColor: 'blue',
			style: {
				color: '#fff',
				background: 'blue',
				fontSize: '20px',
			},
			orientation: 'horizontal',
			text: izm.value
		}
	}
	chart.value.clearAnnotations()
	chart.value.addXaxisAnnotation(options)
	deselect()
})

const fuck = computed(() => {
	if (mytree.selectedNode === null) {
		return ''
	} else return mytree.selectedNode.data.text
})

const calcCateg = computed(() => {
	switch (mytree.selectedNode?.data.text) {

		case 'Скорость от хода':
			return categ

		case 'Скорость от времени':
			return categ1

		case 'Ход от времени':
			return categ2

		case 'Ток от времени':
			return categ3

		case 'Напряжение от хода':
			return categ4

		case 'Напряжение от времени':
			return categ5

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
			enabled: true,
		},
		toolbar: {
			show: true,
			tools: {
				download: true,
				customIcons: [
					{
						icon: '<img src="/select-off.svg" >',
						title: 'None',
						index: 4,
						class: "customicon",
						click: function () {
							chart.value.clearAnnotations()
							deselect()
						}
					}
				]
			},
			autoSelected: 'selection'
		}
	},
	tooltip: {
		enabled: true
	},
	// colors: ['#33b2df', '#4b8353', '#4b8353', '#d4526e', '#d4526e'],
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: ['smooth', 'stepline', 'stepline', 'stepline', 'stepline'],
		width: [2, 2, 2, 2, 2]
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
		// title: {
		// 	text: 'Время'
		// }
	},
	yaxis: {
		// title: {
		// 	text: 'Temperature'
		// },
		decimalsInFloat: 3
	}
})

</script>

<template lang="pug">
q-card.q-mt-md.rel(v-if="mytree.selectedNode")
	q-card-section
		VueApexCharts(ref="chart" v-if="mytree.selectedNode.data.text === 'Скорость от хода'" :height="450" width="100%" :options="options1" :series="seri" @selection="test")
		VueApexCharts(ref="chart" v-if="mytree.selectedNode.data.text === 'Скорость от времени'"  :height="450" width="100%" :options="options1" :series="seri1" @selection="test")
		VueApexCharts(ref="chart" v-if="mytree.selectedNode.data.text === 'Ход от времени'"  :height="450" width="100%" :options="options1" :series="seri2" @selection="test")
		VueApexCharts(ref="chart" v-if="mytree.selectedNode.data.text === 'Ток от времени'"  :height="450" width="100%" :options="options1" :series="seri3" @selection="test" )
		VueApexCharts(ref="chart" v-if="mytree.selectedNode.data.text === 'Напряжение от хода'"  :height="450" width="100%" :options="options1" :series="seri4" @selection="test" )
		VueApexCharts(ref="chart" v-if="mytree.selectedNode.data.text === 'Напряжение от времени'"  :height="450" width="100%" :options="options1" :series="seri5" @selection="test" )
		.work(v-if="mytree.selectedNode.children.length > 0") Выберите параметр
	.count(v-if="sss")
		span {{ calc }}
		q-btn(dense flat round icon="mdi-check-bold" @click="setSelection") 

</template>

<style scoped lang="scss">
.hd {
	font-size: 2.125rem;
}

.rel {
	position: relative;
}

.count {
	position: absolute;
	top: v-bind(top);
	left: v-bind(left);

	span {
		font-size: 1.3rem;
	}

	.q-btn {
		transform: translateY(-5px);
		margin-left: 4px;
	}
}

:deep(.apexcharts-selection-rect) {
	background: #dedede;
}

:deep(.customicon) {
	cursor: pointer;
	width: 20px;
	height: 20px;
	transform: translateY(3px);
	margin-left: 4px;
}

.work {
	height: 450px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
}
</style>
