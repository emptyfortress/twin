<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import { columns } from '@/stores/data'

const modelValue = defineModel()
const store = useStore()

</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Настройка колонок
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section
			p {{ store.columns }}
			q-list
				q-item(tag="label" v-ripple v-for="item in columns" :key="item.name")
					q-item-section(side)
						q-checkbox(v-model="store.columns" dense :val="item")
					q-item-section
						q-item-label {{ item.label }}
		q-card-actions(align="right")
			q-btn(flat color="primary" label="Отмена" v-close-popup)
			q-btn(unelevated color="primary" label="Применить")
</template>

<style scoped lang="scss">
.q-card {
	min-width: 500px;
}
</style>
