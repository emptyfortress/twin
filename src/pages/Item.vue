<script setup lang="ts">
import { onBeforeMount, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { rows } from '@/stores/data'
import InfoPanel from '@/components/InfoPanel.vue'
// import Measure from '@/components/Measure.vue'
// import Measure90 from '@/components/Measure90.vue'
import Measure2 from '@/components/Measure2.vue'
import AddMeasure from '@/components/AddMeasure.vue'

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
const tab = ref('three')
</script>

<template lang="pug">
q-page(padding :key="kkey")
	.container
		h4.q-mt-none.q-mb-sm {{ item.model }}
		q-expansion-item(v-model="infopanel" label="Информация" icon="mdi-information-outline" header-class="head")
			InfoPanel(:item="item" )

		q-expansion-item(v-model="measurepanel" label="Измерения" icon="mdi-speedometer" header-class="head")
			template(v-slot:header)
				q-item-section(avatar)
					q-icon(name="mdi-speedometer")
				q-item-section.tit Измерения

			Measure2

	AddMeasure
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

.tit {
	text-transform: uppercase;
}

:deep(.head) {
	.q-item__label {
		text-transform: uppercase;
	}
}

.q-tab-panels {
	background: transparent;
	min-height: 200px;
}

</style>
