<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import draggable from 'vuedraggable'

const modelValue = defineModel()
const store = useStore()

const cancel = (() => {
	store.resetColumns()
	store.$reset()
	modelValue.value = false
})

const drag = ref(false)
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Настройка колонок
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section
			draggable(:list="store.allcolumns" 
				item-key="name"
				class="list-group"
				ghost-class="ghost"
				@start="drag = true"
				@end="drag = false")
				template(#item="{ element }")
					q-item(tag="label" @click="element.use = !element.use")
						q-item-section(side)
							q-checkbox(:model-value="store.columns" dense :val="element")
						q-item-section
							q-item-label {{ element.label }}

		q-card-actions(align="right")
			q-btn(flat color="primary" label="Reset" @click="cancel")
			q-btn(unelevated color="primary" label="Применить" v-close-popup)
</template>

<style scoped lang="scss">
.q-card {
	min-width: 500px;
}
</style>
