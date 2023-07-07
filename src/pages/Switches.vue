<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import { rows } from '@/stores/data'
import GridSetupDialog from '@/components/GridSetupDialog.vue'
import AddDialog from '@/components/AddDialog.vue'

const store = useStore()
const fullscreen = ref(false)
const pagination = {
	sortBy: '',
	descending: true,
	page: 1,
	rowsPerPage: 13
}
const toggleFullscreen = (() => {
	fullscreen.value = !fullscreen.value
})
const dialog = ref(false)
const addDialog = ref(false)

const add = (() => {
	addDialog.value = true
})
const addItem = ((e: any) => {

})
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

	q-btn.fab(fab color="primary" icon="mdi-plus" @click="addDialog = !addDialog" :class="{ close: addDialog }") 

	GridSetupDialog(v-model="dialog")
	AddDialog(v-model="addDialog" @add="addItem")
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

.fab {
	position: absolute;
	bottom: 2rem;
	right: 2rem;
	transition: transform .3s ease;

	&.close {
		transform: rotate(-45deg);
	}
}
</style>
