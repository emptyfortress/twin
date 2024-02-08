<script setup lang="ts">
import { reactive, onBeforeMount, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { rows } from '@/stores/data'
import InfoPanel from '@/components/InfoPanel.vue'
import Toolbar from '@/components/Toolbar.vue'
import GridMeasure from '@/components/GridMeasure.vue'
import DynamicChart from '@/components/DynamicChart.vue'
import { list } from '@/stores/list'
import { randomNumber } from '@/utils/utils'
import { useGrid } from '@/stores/grid'
import BaseTree from '@/components/BaseTree.vue'

const route = useRoute()
const item = ref()
const kkey = ref(0)
const grid = useGrid()

watchEffect(() => {
	item.value = rows.find(e => e.id === +route.params.id)
	kkey.value += 1
})
onBeforeMount(() => {
	item.value = rows.find(e => e.id === +route.params.id)
})

const infopanel = ref(false)
const graphic = ref(false)
const measurepanel = ref(true)
const rand = ref(+randomNumber(0, 13, 0))
const dates = reactive([
	{ label: '20.08.23', sel: true },
	{ label: '19.08.23', sel: false },
	{ label: '18.08.23', sel: false },
	{ label: '17.08.23', sel: false },
	{ label: '16.08.23', sel: false },
	{ label: '15.08.23', sel: false },
	{ label: '14.08.23', sel: false },
])
</script>

<template lang="pug">
q-page(padding :key="kkey")
	.hd {{ item.model }}
	.diag
		q-icon.q-mr-sm(name="mdi-alert" size="sm")
		span {{ list[rand].text }}
	br
	q-expansion-item(v-model="infopanel" label="Информация" icon="mdi-information-outline" header-class="head")
		InfoPanel(:item="item")

	q-expansion-item.izm(v-model="measurepanel" label="Статические измерения" icon="mdi-chart-bar" header-class="head")
		div(:class="{ full: grid.fullscreen }")
			.grid(:class="{ side: !grid.sidebar }")
				.left
					q-scroll-area.list
						BaseTree
				.main
					Toolbar
					GridMeasure

	q-expansion-item.izm(v-model="graphic" label="Динамические измерения" icon="mdi-chart-bell-curve" header-class="head")
		DynamicChart
</template>

<style scoped lang="scss">
.left {
	background: var(--bg-panel);
	border: 1px solid #ccc;
}

.grid {
	display: grid;
	grid-template-columns: 360px calc(100% - 368px);
	gap: 0.5rem;

	&.side {
		grid-template-columns: 100%;

		.left {
			display: none;
		}
	}
}

.list {
	height: calc(100vh - 320px);

	.full & {
		height: 100vh;
	}
}

:deep(.q-expansion-item--expanded) {
	transition: all 0.2s;
	background: white;
	margin-top: 1rem;
	margin-bottom: 1rem;
	box-shadow: var(--card-shadow);
	border-radius: var(--radius-md);
}

:deep(.izm.q-expansion-item--expanded) {
	background: transparent;
	box-shadow: none;
}

.tit {
	text-transform: uppercase;
}

:deep(.head) {
	.q-item__label {
		text-transform: uppercase;
		color: $secondary;
		letter-spacing: 1px;
		font-weight: 500;
	}
}

:deep(.q-item__section--avatar) {
	min-width: 0;
	color: $secondary;
}

.diag {
	color: darkred;

	span {
		background: pink;
		padding: 3px 8px;
		border-radius: 4px;
		font-size: 0.8rem;
		border: 1px solid darkred;
	}
}

.hd {
	font-size: 2.125rem;
}

.selected {
	background: #b1ddfc;
	color: #1565c0;

	&:hover {
		background: #b1ddfc;
	}
}
</style>
