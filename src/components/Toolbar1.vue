<script setup lang="ts">
import { useGrid } from '@/stores/grid'

const grid = useGrid()
</script>

<template lang="pug">
.toolbar
	.left
		q-btn(flat round dense @click="grid.switchSidebar")
			q-icon(v-if="grid.sidebar" name="mdi-backburger")
			q-icon(v-if="!grid.sidebar" name="mdi-forwardburger")
	.center
		q-btn(unelevated dense icon="mdi-table" size="11px" @click="grid.showGrid" :class="{ grey: grid.table }")
			q-tooltip(:delay="600") Грид
		q-btn(unelevated dense icon="mdi-view-grid" size="11px" @click="grid.showTile" :class="{ grey: !grid.table }")
			q-tooltip(:delay="600") Лента
	.right
		q-btn(flat round dense icon="mdi-tune-variant" @click="") 
		q-btn(flat round dense @click="grid.switchFullscreen")
			q-icon(v-if="!grid.fullscreen" name="mdi-fullscreen")
			q-icon(v-if="grid.fullscreen" name="mdi-fullscreen-exit")
			q-tooltip(:delay="600") Полный экран
</template>

<style scoped lang="scss">
.toolbar {
	border-top: 1px solid var(--my-border-color);
	border-bottom: 1px solid var(--my-border-color);
	background: var(--bg-card);
	width: 100%;
	height: 42px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.grey {
	background: #666;
	color: #fff;
}
</style>
