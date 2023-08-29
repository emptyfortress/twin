<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTree } from '@/stores/tree'
import { useGrid } from '@/stores/grid'
import { randomNumber } from '@/utils/utils'

const grid = useGrid()
const mytree = useTree()

const pagination = {
	sortBy: '',
	descending: true,
	page: 1,
	rowsPerPage: 0
}

const arr = computed(() => {
	let temp: any = []
	mytree.cells.forEach((cell) => {
		let item = {
			id: cell.data.id,
			name: cell.data.id,
			label: cell.data.text,
			field: cell.data.id,
			sortable: true,
			align: 'center',
			unit: cell.data.unit
		}
		temp.push(item)
	})
	return temp
})

const week = [
	'Пн, 21.08.23 13:15',
	'Вт, 22.08.23 13:15',
	'Ср, 23.08.23 13:15',
	'Чт, 24.08.23 13:15',
	'Пт, 25.08.23 13:15',
	'Сб, 26.08.23 13:15',
	'Вс, 27.08.23 13:15',
]

let rows: any = [
	{},
	{},
	{},
	{},
	{},
	{},
	{},
]


</script>

<template lang="pug">
q-table.sticky(flat
	:rows="rows"
	:columns="arr"
	row-key='id'
	hide-bottom
	:pagination="pagination")

	template(v-slot:header="props")
		q-tr(:props="props")
			q-th Дата измерений
			q-th(v-for="(col, index) in props.cols" :key="col.name" :props="props")
				span(:class="{ rot: grid.rotation }") {{ col.label }}
		q-tr(:props="props").sma
			q-th.blo
			q-th(v-for="(col, index) in props.cols" :key="col.name" :props="props") {{ col.unit }}

	template(v-slot:body="props")
		q-tr(:props="props" )
			q-td Пн, 21.08.23 13:15
			q-td(v-for="(col, index) in props.cols" :key="col.id" :props="props" :class="{ nice: index == 1 }") {{ randomNumber(0, 100, 2) }}

</template>

<style scoped lang="scss">
.sticky {
	height: calc(100vh - 350px);
}

.full .sticky {
	height: calc(100vh - 44px);
}

:deep(tr th) {
	vertical-align: bottom;
	text-align: center;
	position: sticky;
	z-index: 2;
	top: 0;
	background-color: #f9f9eb;
}

.q-table thead tr.sma {
	height: 32px;
}

:deep(th span.rot) {
	-ms-writing-mode: tb-rl;
	-webkit-writing-mode: vertical-rl;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	white-space: wrap;
	max-height: 120px;
	text-align: left;
}

.q-table thead .q-tr:first-child th:first-child {
	background-color: #fff;
	z-index: 3;
}

:deep(.q-table tbody td:first-child) {
	background-color: #f9f9eb;
}

:deep(th:first-child),
:deep(td:first-child) {
	position: sticky;
	left: 0;
	z-index: 1;
}

:deep(th.blo) {
	z-index: 3;
}

:deep(.q-table tbody td.nice) {
	background: pink;
	color: darkred;
	font-weight: 600;
}

:deep(.q-table tbody tr.some) {
	background: #f7bac526;
}
</style>
