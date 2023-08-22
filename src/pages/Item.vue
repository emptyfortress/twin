<script setup lang="ts">
import { onBeforeMount, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { rows } from '@/stores/data'
import InfoPanel from '@/components/InfoPanel.vue'
import Toolbar1 from '@/components/Toolbar1.vue'
import AddMeasure from '@/components/AddMeasure.vue'
import { list } from '@/stores/list'
import { randomNumber } from '@/utils/utils'

const route = useRoute()
const item = ref()
const kkey = ref(0)

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
	.container
		.hd {{ item.model }}
		.diag
			q-icon.q-mr-sm(name="mdi-alert" size="sm")
			span {{ list[rand].text }}
		br
		q-expansion-item(v-model="infopanel" label="Информация" header-class="head")
			InfoPanel(:item="item")

		q-expansion-item.izm(v-model="measurepanel" label="Измерения" header-class="head")
			Toolbar1


			// q-tab-panels(v-model="tab" animated)
			// 	q-tab-panel(name="one")
			// 		Measure
			// 	q-tab-panel(name="two")
			// 		Measure90
			// 	q-tab-panel(name="three")
			// 		Measure2

	// AddMeasure
</template>

<style scoped lang="scss">
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
