<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import { columns, rows } from '@/stores/data'
import GridSetupDialog from '@/components/GridSetupDialog.vue'

const store = useStore()
const fullscreen = ref(false)
const pagination = {
	sortBy: 'manufacturer',
	descending: true,
	page: 1,
	rowsPerPage: 20
}
const toggleFullscreen = (() => {
	fullscreen.value = !fullscreen.value
})
const dialog = ref(false)
</script>

<template lang="pug">
q-page(padding)
	.container
		q-table(bordered flat
			:rows='rows'
			:columns='store.columns'
			row-key='id'
			rows-per-page-label="Записей на стр."
			:class="{ full: fullscreen }"
			:pagination="pagination")
			template(v-slot:top)
				.zag Выключатели
				q-space
				q-btn(flat round dense icon="mdi-tune-variant" @click="dialog = !dialog")
				q-btn(flat round dense @click="toggleFullscreen")
					q-icon(v-if="fullscreen" name="mdi-fullscreen-exit")
					q-icon(v-else name="mdi-fullscreen")
	GridSetupDialog(v-model="dialog")
</template>

<style scoped lang="scss">
.full {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 2010;
}
</style>
