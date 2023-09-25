<script setup lang="ts">
import { Draggable } from '@he-tree/vue';
import { dynamicData } from '@/stores/dynamicTreeData'
import { useGrid } from '@/stores/grid'
import Toolbar from '@/components/Toolbar.vue'

const grid = useGrid()
</script>

<template lang="pug">
div(:class="{ full: grid.fullscreen }")
	.grid(:class="{ side: !grid.sidebar }")
		.left
			q-scroll-area.list
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				p fuck
				// BaseTree
		.main
			Toolbar(simple)
</template>

<style scoped lang="scss">
.left {
	background: var(--bg-panel);
	border: 1px solid #ccc;
}

.grid {
	display: grid;
	grid-template-columns: 360px calc(100% - 368px);
	gap: .5rem;

	&.side {
		grid-template-columns: 100%;

		.left {
			display: none;
		}
	}
}
</style>
