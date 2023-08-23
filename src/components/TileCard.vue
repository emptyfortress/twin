<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { randomNumber, randomArray } from '@/utils/utils'
import TrendDialog from '@/components/TrendDialog.vue';
import { useTree } from '@/stores/tree'

const mytree = useTree()

interface PropType {
	item: Stat,
	parents?: Stat[]
}

const props = defineProps<PropType>()

const options = {
	chart: {
		type: 'area',
		height: '50px',
		sparkline: {
			enabled: true,
		},
		zoom: {
			enabled: false,
		},
		animations: {
			enabled: false
		}
	},
	colors: ['#008FFB'],
	fill: {
		type: 'gradient',
		gradient: {
			opacityFrom: 0.7,
			opacityTo: 0.9,
			stops: [0, 90, 100],
			gradientToColors: ['#DAEEFE']
		}
	},
	stroke: {
		curve: 'smooth',
		width: 1,
	},
	tooltip: {
		enabled: false
	}
}

const options1 = {
	chart: {
		type: 'area',
		height: '50px',
		sparkline: {
			enabled: true,
		},
		zoom: {
			enabled: false,
		},
		animations: {
			enabled: false
		}
	},
	colors: ['red'],
	fill: {
		type: 'gradient',
		gradient: {
			opacityFrom: 0.7,
			opacityTo: 0.9,
			stops: [0, 90, 100],
			gradientToColors: ['pink']
		}
	},
	stroke: {
		curve: 'smooth',
		width: 1,
	},
	tooltip: {
		enabled: false
	}
}
const series = ref([
	{
		data: randomArray(5, 20, 30)
	}
])
const val = ref(randomNumber(40, 80, 0))
const big = ref(false)

const showTrendDialog = (() => {
	mytree.setCurrentNode(props.item)
	nextTick(() => {
		big.value = true
	})
})

const calcOption = computed(() => {
	return props.item.data.red ? options1 : options
})

const color = computed(() => {
	return props.item.data.red ? 'red' : '#3380bc'
})
</script>

<template lang="pug">
.cont
	// .hov
	// 	.one Фаза 1
	.card(@click="showTrendDialog")
		.row.items-baseline.justify-start
			.data {{ val }}
			.unit {{ props.item.data.unit}}

		VueApexCharts(ref="chart" height="50px" :options="calcOption" :series="series" )
	.label(v-if="props.item.data.text1") {{ props.item.data.text1 }}
	.label(v-else) {{ props.item.data.text }}

TrendDialog(v-model="big" :item="props.item" :val="val")
</template>

<style scoped lang="scss">
.cont {
	width: 160px;
	position: relative;

	// .hov {
	// 	position: absolute;
	// 	bottom: 101px;
	// 	display: none;
	// 	height: 100px;
	// 	width: 160px;
	// 	background: v-bind(color);
	// 	z-index: 1;
	// 	border-radius: 4px 4px 0 0;
	// 	color: #fff;
	// 	padding: .5rem;
	// 	font-size: .9rem;
	// }

	// &:hover {
	// 	.hov {
	// 		display: block;
	// 	}
	// }
}

.card {
	border-radius: 4px;
	background: #fff;
	padding: 0;
	cursor: pointer;
	box-shadow: var(--card-shadow);

	&:hover {
		outline: 1px solid v-bind(color);
	}
}

.data {
	font-size: 1.4rem;
	font-weight: 600;
	margin-left: .5rem;
	color: v-bind(color);
}

.label {
	font-size: .8rem;
	line-height: 1.0;
	margin-top: 4px;
}

.unit {
	font-size: .8rem;
	margin-left: .2rem;
	color: v-bind(color);
}
</style>
