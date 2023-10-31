<script setup lang="ts">
import { ref } from 'vue'
import { useGrid } from '@/stores/grid'
import { useDraggable } from '@vueuse/core'

const props = defineProps({
	simple: {
		type: Boolean,
		default: false,
	},
})

const grid = useGrid()
const phase = ref('Последняя неделя')
const phaseOptions = ['Последняя неделя', 'Последний месяц', 'Последний квартал', 'За все время']
const bt = [
	{ id: 0, icon: 'mdi-view-grid' },
	{ id: 1, icon: 'mdi-dots-grid' },
	{ id: 2, icon: 'mdi-table' },
]

const el = ref<HTMLElement | null>(null)
const { x, y, style } = useDraggable(el, {
	initialValue: { x: 140, y: 140 },
})

const action = () => {
	console.log(111)
}
</script>

<template lang="pug">
.toolbar
	.left
		q-btn(flat round dense @click="grid.switchSidebar")
			q-icon(v-if="grid.sidebar" name="mdi-backburger")
			q-icon(v-if="!grid.sidebar" name="mdi-forwardburger")
	.center(v-if="!props.simple")
		q-btn(v-for="but in bt" :key="but.id" unelevated dense :icon="but.icon" size="11px" :class="{ grey: grid.gridType === but.id }" @click="grid.switchGrid(but.id)")
	.right
		q-select(v-if="!props.simple" dense filled v-model="phase" :options="phaseOptions")
		q-btn.q-mr-lg(v-if="!props.simple" flat round dense icon="mdi-calendar") 
		q-btn(flat round dense icon="mdi-tune-variant" @click="grid.rotation = !grid.rotation") 
		q-btn(flat round dense @click="grid.switchTable")
			q-icon(name="mdi-math-compass")
			q-tooltip(:delay="600") Таблица меток
		q-btn(flat round dense @click="grid.switchFullscreen")
			q-icon(v-if="!grid.fullscreen" name="mdi-fullscreen")
			q-icon(v-if="grid.fullscreen" name="mdi-fullscreen-exit")
			q-tooltip(:delay="600") Полный экран

.win(ref="el" :style="style" style="position: fixed;")
	q-btn(unelevated color="primary" label="Отмена" @click="action") 
	p Fuck you

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

.win {
	border: 1px solid #cdcdcd;
	border-radius: 4px;
	z-index: 2;
	background: #fff;
	box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.2);
	padding: 1rem;
}
</style>
