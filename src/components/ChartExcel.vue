<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { useTree } from '@/stores/tree'
import { categ, seri } from '@/stores/speedhod'
import { categ1, seri1 } from '@/stores/speedtime'

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

const options1 = ref({
	chart: {
		type: 'line',
		animations: {
			enabled: false,
			speed: 100
		},
		zoom: {
			enabled: true
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
		categories: categ
	},
	yaxis: {
		decimalsInFloat: 3
	}
})

const calcSeries = computed(() => {
	switch (mytree.selectedNode?.data.text) {

		case 'Скорость от хода':
			return seri

		case 'Скорость от времени':
			return seri1

		default:
			return []
	}

})

var temp = storeToRefs(mytree)
var soome = temp.key

watch(soome, (newval) => {
	if (newval > 1) {
		chart.value.updateOptions({
			title: {
				text: mytree.selectedNode?.data.text
			}
		})
	}
})

</script>

<template lang="pug">
q-card.q-mt-md.rel(v-if="mytree.selectedNode")
	q-card-section
		VueApexCharts(ref="chart" :options="options1" :series="calcSeries" @selection="test")
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
</style>
