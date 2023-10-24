<script setup lang="ts">
import { computed } from 'vue'
import { useGrid } from '@/stores/grid'

const grid = useGrid()

const cols = [
	{ label: 'Метка', field: 'num', name: 'num', sortable: true, align: 'center' },
	{ label: 'ось Х', field: 'x', name: 'x', sortable: true, align: 'right' },
	{ label: 'ось Y', field: 'y', name: 'y', sortable: true, align: 'right' },
]

const cols1 = [
	{ label: '', field: '0', name: '0', sortable: false, align: 'right' },
	{ label: '1', field: '1', name: '1', sortable: false, align: 'right' },
	{ label: '2', field: '2', name: '2', sortable: false, align: 'right' },
	{ label: '3', field: '3', name: '3', sortable: false, align: 'right' },
	{ label: '4', field: '4', name: '4', sortable: false, align: 'right' },
	{ label: '5', field: '5', name: '5', sortable: false, align: 'right' },
	{ label: '6', field: '6', name: '6', sortable: false, align: 'right' },
]

const rows1 = computed(() => {
	let test = []
	grid.metki.forEach( e => {
		const fuck = {
			0: e.label,
			1: e.x,
			2: e.x,
			3: e.x,
			4: e.x,
			5: e.x,
			6: e.x,
		}
		test.push(fuck)
	})
	return test
})

const page = {
	rowsPerPage: 0
}
</script>

<template lang="pug">
q-table(:columns="cols"
	:rows="grid.metki"
	dense
	hide-pagination
	no-data-label="Метки отсутствуют"
	:pagination="page" )
	template(v-slot:top)
		.tit
			div Измерения
			q-btn(flat round dense color="negative" icon="mdi-trash-can-outline" @click="grid.deleteMetki" size="sm")
	template(v-slot:body="props")
		tr(:props="props")
			td.text-center(:props="props") {{ props.row.label }}
			td.text-right(:props="props") {{ props.row.x }}
			td.text-right(:props="props") {{ props.row.y }}
			// td.text-right
			// 	q-btn(flat round icon="mdi-close" @click="action" dense size="sm") 

template(v-if="grid.metki.length > 1")
	.titu Вычисленные значения
	q-table(:columns="cols1" :rows="rows1" dense hide-pagination :pagination="page")
</template>

<style scoped lang="scss">
.tit {
	width: 100%;
	font-size: .9rem;
	font-weight: 600;
	margin: .8rem 0rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.titu {
	font-size: .8rem;
	text-align: center;
	font-weight: 600;
}
</style>
