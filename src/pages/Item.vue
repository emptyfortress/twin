<script setup lang="ts">
import { onBeforeMount, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { rows } from '@/stores/data'
import InfoPanel from '@/components/InfoPanel.vue'
import Toolbar1 from '@/components/Toolbar1.vue'
import GridMeasure from '@/components/GridMeasure.vue'
import TileMeasure from '@/components/TileMeasure.vue'
import AddMeasure from '@/components/AddMeasure.vue'
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
const measurepanel = ref(true)
const rand = ref(+randomNumber(0, 13, 0))
</script>

<template lang="pug">
q-page(padding :key="kkey")
	.hd {{ item.model }}
	.diag
		q-icon.q-mr-sm(name="mdi-alert" size="sm")
		span {{ list[rand].text }}
	br
	q-expansion-item(v-model="infopanel" label="Информация" header-class="head")
		InfoPanel(:item="item" )
	q-expansion-item.izm(v-model="measurepanel" label="Измерения" header-class="head")
		div(:class="{ full: grid.fullscreen }")
			.grid(:class="{ side: !grid.sidebar }")
				.left
					BaseTree()
					// q-scroll-area.list
				.main
					Toolbar1
					// GridMeasure(v-if="grid.table")
					// TileMeasure(v-else)
	// AddMeasure
</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: 300px 1fr;
	gap: .5rem;

	&.side {
		grid-template-columns: 1fr;

		.left {
			display: none;
		}

	}
}

.left {
	background: var(--bg-panel);
	border: 1px solid #ccc;
	// height: 100%;
	// height: 600px;
}
.list {
	// height: 100%;
}

:deep(.q-expansion-item--expanded) {
	transition: all .2s;
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

.q-tab-panels {
	background: transparent;
	min-height: 200px;
}

:deep(.q-table__top) {
	padding: 0;
}

.diag {
	color: darkred;

	span {
		background: pink;
		padding: 3px 8px;
		border-radius: 4px;
		font-size: .8rem;
		border: 1px solid darkred;
	}
}

.hd {
	font-size: 2.125rem;
}
</style>
