<script setup lang="ts">
import { ref } from 'vue'
import { useGrid } from '@/stores/grid'

const grid = useGrid()
const phase = ref('Последняя неделя')
const phaseOptions = ['Последняя неделя', 'Последний месяц', 'Последний квартал', 'За все время']
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
			q-tooltip(:delay="600") Плитка
	.right
		q-select.q-mr-lg(dense filled v-model="phase" :options="phaseOptions")
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
	height: 42px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.grey {
	background: #666;
	color: #fff;
	// border: 1px solid #ccc;
}

.right {
	display: flex;
	align-items: center;
}
</style>
