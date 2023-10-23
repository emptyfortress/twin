<script setup lang="ts">
import { useGrid } from '@/stores/grid'
import Toolbar from '@/components/Toolbar.vue'
import BaseTree1 from '@/components/BaseTree1.vue'
import { useTree } from '@/stores/tree'
import ChartExcel from '@/components/ChartExcel.vue'
import MetkiTable from '@/components/MetkiTable.vue'

const mytree = useTree()
const grid = useGrid()
</script>

<template lang="pug">
div(:class="{ full: grid.fullscreen }")
	.grid(:class="{ side: !grid.sidebar }")
		.left
			q-scroll-area.list
				BaseTree1
		.main
			Toolbar(simple)
			.subgrid(:class="{ active: grid.table }")
				ChartExcel
				q-card.mes
					MetkiTable
</template>

<style scoped lang="scss">
.left {
	background: var(--bg-panel);
	border: 1px solid #ccc;
}

.grid {
	width: 100%;
	display: grid;
	grid-template-columns: 320px calc(100% - 328px);
	gap: .5rem;

	&.side {
		grid-template-columns: 100%;

		.left {
			display: none;
		}
	}
}

.subgrid {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	transition: .2s ease all;

	.mes {
		display: none;
		margin-top: 1rem;
	}

	&.active {
		grid-template-columns: calc(100% - 350px) 350px;

		.mes {
			display: block;
		}
	}
}

.list {
	min-height: calc(100vh - 390px);
	height: 100%;

	.full & {
		height: 100vh;
	}
}
</style>
