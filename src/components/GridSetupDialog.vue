<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import { columns } from '@/stores/data'
import draggable from 'vuedraggable'

const modelValue = defineModel()
const store = useStore()

const cancel = (() => {
	store.resetColumns()
	modelValue.value = false
})

const drag = ref(false)
const mycolumns = ref(columns)
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Настройка колонок
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section
			draggable(:list="mycolumns" 
				item-key="name"
				class="list-group"
				ghost-class="ghost"
				@start="dragging = true"
				@end="dragging = false")
				template(#item="{ element }")
					.list-group-item {{ element.label }}
				<!-- template #item="{element}"> -->
				<!-- 	q-item(tag="label") -->
				<!-- 		q-item-section(side) -->
				<!-- 			q-checkbox(v-model="store.columns" dense :val="element") -->
				<!-- 		q-item-section -->
				<!-- 			q-item-label {{ element.label }} -->

		q-card-actions(align="right")
			q-btn(flat color="primary" label="Отмена" @click="cancel")
			q-btn(unelevated color="primary" label="Применить" v-close-popup)
</template>

<style scoped lang="scss">
.q-card {
	min-width: 500px;
}
</style>
