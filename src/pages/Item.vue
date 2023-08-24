<script setup lang="ts">
import { computed, onBeforeMount, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { rows } from '@/stores/data'
import InfoPanel from '@/components/InfoPanel.vue'
import Toolbar from '@/components/Toolbar.vue'
import GridMeasure from '@/components/GridMeasure.vue'
import TileMeasure from '@/components/TileMeasure.vue'
// import AddMeasure from '@/components/AddMeasure.vue'
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
const width = computed(() => {
	if (grid.sidebar === true && grid.drawer === true) {
		return (window.innerWidth - (200 + 32 + 360 + 40)) + 'px'
	}
	if (grid.sidebar === true && grid.drawer === false) {
		return (window.innerWidth - (32 + 360 + 25)) + 'px'
	}
	if (grid.sidebar === false && grid.drawer === true) {
		return (window.innerWidth - (200 + 32 + 16)) + 'px'
	}
	if (grid.sidebar === false && grid.drawer === false) {
		return '100%'
	}
	if (grid.fullscreen === true && grid.sidebar === true) {
		return (window.clientWidth - (360 + 40)) + 'px'
		// return '100vw'
	}
})
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
		div(:class="{full : grid.fullscreen}")
			.grid(:class="{ side : !grid.sidebar}")
					.left
						q-scroll-area.list
							BaseTree
					.main
						Toolbar
						GridMeasure(v-if="grid.table")
						TileMeasure(v-else)

	// AddMeasure
</template>

<style scoped lang="scss">
.left {
	background: var(--bg-panel);
	border: 1px solid #ccc;
	width: 360px;
	flex-shrink: 0;
}
.main {
	width: v-bind(width);
}
.grid {
	width: 100%;
	display: flex;
	gap: .5rem;

	&.side {
		.left {
			display: none;
		}
	}
}

.list {
	height: calc(100vh - 320px);
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
