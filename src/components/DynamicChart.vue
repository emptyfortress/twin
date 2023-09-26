<script setup lang="ts">
import { useGrid } from '@/stores/grid'
import Toolbar from '@/components/Toolbar.vue'
import BaseTree1 from '@/components/BaseTree1.vue'
import { useTree } from '@/stores/tree'
import ChartExcel from '@/components/ChartExcel.vue'

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
			ChartExcel
</template>

<style scoped lang="scss">
.left {
	background: var(--bg-panel);
	border: 1px solid #ccc;
}

.grid {
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

.list {
	min-height: calc(100vh - 390px);
	height: 100%;

	.full & {
		height: 100vh;
	}
}
</style>
