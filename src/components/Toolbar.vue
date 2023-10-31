<script setup lang="ts">
import { ref } from 'vue'
import { useGrid } from '@/stores/grid'
import { useDraggable } from '@vueuse/core'
import MetkiTable from '@/components/MetkiTable.vue'

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
const handle = ref<HTMLElement | null>(null)

const { x, y, style } = useDraggable(el, {
	initialValue: { x: 840, y: 140 },
})

const modalOpen = ref(true)

const toggleModal = () => {
	modalOpen.value = !modalOpen.value
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
		q-btn(flat round dense @click="toggleModal" )
			q-icon(name="mdi-math-compass")
			q-tooltip(:delay="600") Таблица меток
		q-btn(flat round dense @click="grid.switchFullscreen")
			q-icon(v-if="!grid.fullscreen" name="mdi-fullscreen")
			q-icon(v-if="grid.fullscreen" name="mdi-fullscreen-exit")
			q-tooltip(:delay="600") Полный экран

.win(ref="el" v-show="modalOpen" :style="style" style="position: fixed;" :handle="handle")
	.wrap(ref="handle")
		.hd
			q-icon(name="mdi-math-compass" size="sm")
			span.q-ml-sm Измерения
		q-btn(flat round dense icon="mdi-close" @click="toggleModal") 

	MetkiTable()

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
}

.right {
	display: flex;
	align-items: center;
}

.win {
	border: 1px solid #cdcdcd;
	border-radius: 4px;
	z-index: 1001;
	background: #fff;
	box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.2);
	min-width: 350px;
}
.wrap {
	width: 100%;
	padding: 0.5rem 0.7rem;
	background: $primary;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.hd {
	font-size: 1rem;
	font-weight: 500;
}
</style>
