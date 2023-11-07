<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useTree } from '@/stores/tree'
import { useGrid } from '@/stores/grid'
import type { QTableColumn } from 'quasar'

const tree = useTree()
const grid = useGrid()
const cols: QTableColumn[] = [
	{
		label: 'Метка',
		field: 'num',
		name: 'num',
		sortable: true,
		align: 'center',
	},
	{ label: 'ось Х', field: 'x', name: 'x', sortable: true, align: 'right' },
	{ label: 'ось Y', field: 'y', name: 'y', sortable: true, align: 'right' },
	{
		label: '',
		field: 'action',
		name: 'action',
		sortable: false,
		align: 'right',
	},
]

const cols1: QTableColumn[] = [
	{ label: '', field: 'label', name: 'label', sortable: false, align: 'left' },
	{ label: '1', field: '1', name: '1', sortable: false, align: 'right' },
	{ label: '2', field: '2', name: '2', sortable: false, align: 'right' },
	{ label: '3', field: '3', name: '3', sortable: false, align: 'right' },
	{ label: '4', field: '4', name: '4', sortable: false, align: 'right' },
	{ label: '5', field: '5', name: '5', sortable: false, align: 'right' },
	{ label: '6', field: '6', name: '6', sortable: false, align: 'right' },
]

const rows1 = reactive([
	{ id: 1, label: '1', 1: '---', 2: null, 3: null, 4: null, 5: null, 6: null },
	{ id: 2, label: '2', 1: null, 2: '---', 3: null, 4: null, 5: null, 6: null },
	{ id: 3, label: '3', 1: null, 2: null, 3: '---', 4: null, 5: null, 6: null },
	{ id: 4, label: '4', 1: null, 2: null, 3: null, 4: '---', 5: null, 6: null },
	{ id: 5, label: '5', 1: null, 2: null, 3: null, 4: null, 5: '---', 6: null },
	{ id: 6, label: '6', 1: null, 2: null, 3: null, 4: null, 5: null, 6: '---' },
])

const rrow = computed(() => {
	switch (tree.selectedNode?.data.metki.length) {
		case 0:
			return []
		case 1:
			return rows1.filter(e => e.id !== 1)
		case 2:
			rows1[1][1] = String(
				(
					tree.selectedNode.data.metki[1].x - tree.selectedNode.data.metki[0].x
				).toFixed(2)
			)
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
			rows1[2][1] = String(
				(
					tree.selectedNode.data.metki[2].x - tree.selectedNode.data.metki[0].x
				).toFixed(2)
			)
			rows1[2][2] = String(
				(
					tree.selectedNode.data.metki[2].x - tree.selectedNode.data.metki[1].x
				).toFixed(2)
			)
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
			rows1[3][1] = String(
				(
					tree.selectedNode.data.metki[3].x - tree.selectedNode.data.metki[0].x
				).toFixed(2)
			)
			rows1[3][2] = String(
				(
					tree.selectedNode.data.metki[3].x - tree.selectedNode.data.metki[1].x
				).toFixed(2)
			)
			rows1[3][3] = String(
				(
					tree.selectedNode.data.metki[3].x - tree.selectedNode.data.metki[2].x
				).toFixed(2)
			)
			rows1[3][4] = '---'
			rows1[3][5] = '---'
			rows1[3][6] = '---'
			rows1[2][4] = '---'
			rows1[2][5] = '---'
			rows1[2][6] = '---'
			return rows1.filter(e => e.id <= 4)
		case 5:
			rows1[4][1] = String(
				(
					tree.selectedNode.data.metki[4].x - tree.selectedNode.data.metki[0].x
				).toFixed(2)
			)
			rows1[4][2] = String(
				(
					tree.selectedNode.data.metki[4].x - tree.selectedNode.data.metki[1].x
				).toFixed(2)
			)
			rows1[4][3] = String(
				(
					tree.selectedNode.data.metki[4].x - tree.selectedNode.data.metki[2].x
				).toFixed(2)
			)
			rows1[4][4] = String(
				(
					tree.selectedNode.data.metki[4].x - tree.selectedNode.data.metki[3].x
				).toFixed(2)
			)
			rows1[4][5] = '---'
			rows1[4][6] = '---'
			return rows1.filter(e => e.id <= 5)

		default:
			if (!!tree.selectedNode) {
				rows1[5][1] = String(
					(
						tree.selectedNode.data.metki[5].x -
						tree.selectedNode.data.metki[0].x
					).toFixed(2)
				)
				rows1[5][2] = String(
					(
						tree.selectedNode.data.metki[5].x -
						tree.selectedNode.data.metki[1].x
					).toFixed(2)
				)
				rows1[5][3] = String(
					(
						tree.selectedNode.data.metki[5].x -
						tree.selectedNode.data.metki[2].x
					).toFixed(2)
				)
				rows1[5][4] = String(
					(
						tree.selectedNode.data.metki[5].x -
						tree.selectedNode.data.metki[3].x
					).toFixed(2)
				)
				rows1[5][5] = String(
					(
						tree.selectedNode.data.metki[5].x -
						tree.selectedNode.data.metki[4].x
					).toFixed(2)
				)
			}
			return rows1.filter(e => e.id <= 6)
	}
})

const page = {
	rowsPerPage: 0,
}

const kill = () => {
	if (!!tree.selectedNode) {
		tree.selectedNode.data.metki!.length = 0
		grid.reset = true
	}
}
</script>

<template lang="pug">
q-table(
	:rows="tree.selectedNode?.data.metki"
	:columns="cols"
	dense flat
	hide-pagination
	no-data-label="Метки отсутствуют"
	:pagination="page" )
	template(v-slot:body="props")
		q-tr(:props="props")
			td.text-center(:props="props") {{ props.row.label.text }}
			td.text-right(:props="props") {{ props.row.x }}
			td.text-right(:props="props") {{ props.row.y }}
			td.text-right
				q-btn(flat round icon="mdi-trash-can-outline" color="grey" @click="" dense size="sm")

template(v-if="tree.selectedNode && tree.selectedNode.data.metki.length > 1")
	.titu Вычисленные значения
	q-table(:columns="cols1" :rows="rrow" dense hide-pagination :pagination="page" flat)

.export(v-if="tree.selectedNode && tree.selectedNode.data.metki.length > 1")
	q-btn(flat dense color="negative" label="Удалить все метки" icon="mdi-trash-can-outline" @click="kill" size="sm")
	q-btn(flat dense color="secondary" label="Генерация отчета" icon="mdi-file-excel-outline" size="sm")
</template>

<style scoped lang="scss">
.tit {
	width: 100%;
	font-size: 0.9rem;
	font-weight: 600;
	margin: 0.8rem 0rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.titu {
	font-size: 0.8rem;
	text-align: center;
	font-weight: 600;
}
.export {
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
}
</style>
