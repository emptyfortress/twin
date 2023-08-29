<script setup lang="ts">
import { ref } from 'vue'
import { useGrid } from '@/stores/grid'

const grid = useGrid()
const phase = ref('Последняя неделя')
const phaseOptions = ['Последняя неделя', 'Последний месяц', 'Последний квартал', 'За все время']
const bt = [
	{ id: 0, icon: 'mdi-view-grid', },
	{ id: 1, icon: 'mdi-dots-grid' },
	{ id: 2, icon: 'mdi-table' },
]

</script>

<template lang="pug">
.toolbar
	.left
		q-btn(flat round dense @click="grid.switchSidebar")
			q-icon(v-if="grid.sidebar" name="mdi-backburger")
			q-icon(v-if="!grid.sidebar" name="mdi-forwardburger")
	.center
		q-btn(v-for="but in bt" :key="but.id" unelevated dense :icon="but.icon" size="11px" :class="{ grey: grid.gridType === but.id }" @click="grid.switchGrid(but.id)")
	.right
		q-select(dense filled v-model="phase" :options="phaseOptions")
		q-btn.q-mr-lg(flat round icon="mdi-calendar") 
		q-btn(flat round dense icon="mdi-tune-variant" @click="grid.rotation = !grid.rotation") 
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
