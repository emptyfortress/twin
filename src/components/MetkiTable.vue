<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useGrid } from '@/stores/grid'
import type { QTableColumn } from 'quasar'

const grid = useGrid()

const cols: QTableColumn[] = [
	{ label: 'Метка', field: 'num', name: 'num', sortable: true, align: 'center' },
	{ label: 'ось Х', field: 'x', name: 'x', sortable: true, align: 'right' },
	{ label: 'ось Y', field: 'y', name: 'y', sortable: true, align: 'right' },
]

const cols1:QTableColumn[]  = [
	{ label: '', field: 'label', name: 'label', sortable: false, align: 'left' },
	{ label: '1', field: '1', name: '1', sortable: false, align: 'right' },
	{ label: '2', field: '2', name: '2', sortable: false, align: 'right' },
	{ label: '3', field: '3', name: '3', sortable: false, align: 'right' },
	{ label: '4', field: '4', name: '4', sortable: false, align: 'right' },
	{ label: '5', field: '5', name: '5', sortable: false, align: 'right' },
	{ label: '6', field: '6', name: '6', sortable: false, align: 'right' },
]

const rows1 = reactive([
	{id: 1, label: '1', 1: '---', 2: null, 3: null, 4: null, 5: null, 6: null},
	{id: 2, label: '2', 1: null, 2: '---', 3: null, 4: null, 5: null, 6: null},
	{id: 3, label: '3', 1: null, 2: null, 3: '---', 4: null, 5: null, 6: null},
	{id: 4, label: '4', 1: null, 2: null, 3: null, 4: '---', 5: null, 6: null},
	{id: 5, label: '5', 1: null, 2: null, 3: null, 4: null, 5: '---', 6: null},
	{id: 6, label: '6', 1: null, 2: null, 3: null, 4: null, 5: null, 6: '---'},
])

const rrow = computed(() => {
	switch (grid.metki.length) {
		case 0:
			return []
		case 1:
			return rows1.filter(e => e.id !== 1)
		case 2:
			rows1[1][1] = String(grid.metki[1].x - grid.metki[0].x)
			rows1[1][2] = '---'
			rows1[1][3] = '---'
			rows1[1][4] = '---'
			rows1[1][5] = '---'
			rows1[1][6] = '---'
			rows1[0][2] = '---'
			rows1[0][3] = '---'
			rows1[0][4] = '---'
			rows1[0][5] = '---'
			rows1[0][6] = '---'
			return rows1.filter(e => e.id <= 2)
		case 3:
			rows1[2][1] = String(grid.metki[2].x - grid.metki[0].x)
			rows1[2][2] = String(grid.metki[2].x - grid.metki[1].x)
			rows1[2][3] = '---'
			rows1[2][4] = '---'
			rows1[2][5] = '---'
			rows1[2][6] = '---'
			rows1[1][3] = '---'
			rows1[1][4] = '---'
			rows1[1][5] = '---'
			rows1[1][6] = '---'
			return rows1.filter(e => e.id <= 3)
		case 4:
			rows1[3][1] = String(grid.metki[3].x - grid.metki[0].x)
			rows1[3][2] = String(grid.metki[3].x - grid.metki[1].x)
			rows1[3][3] = String(grid.metki[3].x - grid.metki[2].x)
			rows1[3][4] = '---'
			rows1[3][5] = '---'
			rows1[3][6] = '---'
			rows1[2][4] = '---'
			rows1[2][5] = '---'
			rows1[2][6] = '---'
			return rows1.filter(e => e.id <= 4)
		case 5:
			rows1[4][1] = String(grid.metki[4].x - grid.metki[0].x)
			rows1[4][2] = String(grid.metki[4].x - grid.metki[1].x)
			rows1[4][3] = String(grid.metki[4].x - grid.metki[2].x)
			rows1[4][4] = String(grid.metki[4].x - grid.metki[3].x)
			rows1[4][5] = '---'
			rows1[4][6] = '---'
			return rows1.filter(e => e.id <= 5)
		default:
			rows1[5][1] = String(grid.metki[5].x - grid.metki[0].x)
			rows1[5][2] = String(grid.metki[5].x - grid.metki[1].x)
			rows1[5][3] = String(grid.metki[5].x - grid.metki[2].x)
			rows1[5][4] = String(grid.metki[5].x - grid.metki[3].x)
			rows1[5][5] = String(grid.metki[5].x - grid.metki[4].x)
			return rows1.filter(e => e.id <= 6)
	}
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
	q-table(:columns="cols1" :rows="rrow" dense hide-pagination :pagination="page")
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
