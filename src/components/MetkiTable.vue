<script setup lang="ts">
import { useGrid } from '@/stores/grid'

const grid = useGrid()

const cols = [
	{ label: 'Метка', field: 'num', name: 'num', sortable: true, align: 'center' },
	{ label: 'ось Х', field: 'x', name: 'x', sortable: true, align: 'right' },
	{ label: 'ось Y', field: 'y', name: 'y', sortable: true, align: 'right' },
	{ label: '', sortable: false, align: 'right' }
]
const rows = [
	{ id: 0, num: 1, x: 23, y: 32 },
	{ id: 1, num: 2, x: 24, y: 32 },
	{ id: 2, num: 3, x: 24, y: 32 },
	{ id: 3, num: 4, x: 24, y: 32 },
	{ id: 4, num: 5, x: 24, y: 32 },
	{ id: 5, num: 6, x: 24, y: 32 },
]
const cols1 = [
	{ label: '', field: 'ind', name: 'ind', sortable: false, align: 'right' },
	{ label: '1', field: 'one', name: 'one', sortable: false, align: 'right' },
	{ label: '2', field: 'two', name: 'two', sortable: false, align: 'right' },
	{ label: '3', field: 'three', name: 'three', sortable: false, align: 'right' },
	{ label: '4', field: 'four', name: 'four', sortable: false, align: 'right' },
	{ label: '5', field: 'five', name: 'five', sortable: false, align: 'right' },
	{ label: '6', field: 'six', name: 'six', sortable: false, align: 'right' },
]
const rows1 = [
	{ id: 0, ind: 1, one: 3.453, two: 3.231, three: 4.598, four: 0.569, five: 2.981, six: 2.732 },
	{ id: 1, ind: 2, one: 3.453, two: 3.231, three: 4.598, four: 0.569, five: 2.981, six: 2.732 },
	{ id: 2, ind: 3, one: 3.453, two: 3.231, three: 4.598, four: 0.569, five: 2.981, six: 2.732 },
	{ id: 3, ind: 4, one: 3.453, two: 3.231, three: 4.598, four: 0.569, five: 2.981, six: 2.732 },
	{ id: 4, ind: 5, one: 3.453, two: 3.231, three: 4.598, four: 0.569, five: 2.981, six: 2.732 },
	{ id: 5, ind: 6, one: 3.453, two: 3.231, three: 4.598, four: 0.569, five: 2.981, six: 2.732 },
]

const page = {
	rowsPerPage: 0
}
</script>

<template lang="pug">
q-table(:columns="cols" :rows="grid.metki" dense hide-pagination :pagination="page" )
	template(v-slot:top)
		.tit
			div Измерения
			q-btn(flat round dense color="negative" icon="mdi-trash-can-outline" @click="action" size="sm")
	template(v-slot:body="props")
		tr(:props="props")
			td.text-center(:props="props") {{ props.row.num }}
			td.text-right(:props="props") {{ props.row.x }}
			td.text-right(:props="props") {{ props.row.y }}
			td.text-right
				q-btn(flat round icon="mdi-close" @click="action" dense size="sm") 

br
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
</style>
