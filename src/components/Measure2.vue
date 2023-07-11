<script setup lang="ts">
import { ref, computed } from 'vue'
import { date } from 'quasar'
import { useStore } from '@/stores/store'
import MeasureSetupDialog from '@/components/MeasureSetupDialog.vue'

import type { QTableColumn } from 'quasar'

interface MyCol extends QTableColumn {
	id?: number
	use?: boolean
}

const store = useStore()
const fullscreen = ref(false)
const pagination = {
	sortBy: '',
	descending: true,
	page: 1,
	rowsPerPage: 0
}

var arr: MyCol[] = [
	{
		id: 0,
		name: 'time',
		required: true,
		label: 'Дата измерения',
		field: 'time',
		sortable: true,
		align: 'left',
		use: true,
	},
];
for (var i = 1; i < 31; i++) {
	arr.push({
		id: i,
		name: 'par' + i,
		required: true,
		label: 'Параметр ' + i,
		field: 'par' + i,
		sortable: true,
		align: 'right',
		use: true
	});
}


const toggleFullscreen = (() => {
	fullscreen.value = !fullscreen.value
})

let newDate = new Date(2023, 2, 7)
let rows: any = []
for (var i = 0; i < 50; i++) {
	let temp = date.subtractFromDate(newDate, { days: i })
	rows.push({
		id: i,
		time: date.formatDate(temp, 'YYYY-MM-DD'),
	})
}
const faza1 = ref(true)
const faza2 = ref(true)
const faza3 = ref(true)

for (let i = 0; i < 31; i++) {
	let key = 'par' + i
	rows.map((e: any) => {
		if (faza1 && faza2 && faza3) {
			e[key] = Math.round(Math.random() * 100) + '-' + Math.round(Math.random() * 100) + '-' + Math.round(Math.random() * 100)
		}
	})
}

const tabkey = ref(0)
const dialog = ref(false)

const data = computed(() => {
	return arr.filter(item => item.name.toLowerCase().includes('par'))
})
const mykey = ((e: number) => {
	return 'par' + e
})
const calcRow = ((e: any) => {
	let temp = Object.values(e)
	temp.shift()
	temp.shift()
	let cond = temp.some((item: any) => { return (item < 2) === true })
	if (cond === true) {
		return 'some'
	}

})
</script>

<template lang="pug">
q-table.sticky(flat
	:key="tabkey"
	:rows="rows"
	:columns="arr"
	row-key='id'
	hide-bottom
	:class="{ full: fullscreen }"
	:pagination="pagination")

	template(v-slot:top)
		q-space
		.q-mr-xl.q-gutter-lg
			q-checkbox(dense v-model="faza1" label="Фаза 1" )
			q-checkbox(dense v-model="faza2" label="Фаза 2" )
			q-checkbox(dense v-model="faza3" label="Фаза 3" )
		q-btn(flat round dense icon="mdi-tune-variant" @click="dialog = true")
		q-btn(flat round dense @click="toggleFullscreen")
			q-icon(v-if="fullscreen" name="mdi-fullscreen-exit")
			q-icon(v-else name="mdi-fullscreen")

	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(v-for="(col, index) in props.cols" :key="col.name" :props="props")
				span(:class="{ rot: index > 0 }") {{ col.label }}

	template(v-slot:body="props")
		q-tr(:props="props" :class="calcRow(props.row)")
			q-td(:props="props" key="time") {{ props.row.time }}
			q-td(:props="props" v-for="(_, index) in data" :key="'par' + (index + 1)" :class="{ nice: props.row[mykey(index)] < 2 }") {{ props.row[mykey(index)] }}

MeasureSetupDialog(v-model="dialog")
</template>

<style scoped lang="scss">
.sticky {
	height: calc(100vh - 300px);
}

.sticky.full {
	height: 100vh;
}

:deep(tr th) {
	vertical-align: bottom;
	text-align: center;
	position: sticky;
	z-index: 2;
	top: 0;
	background-color: #f9f9eb;
}

:deep() th span.rot {
	-ms-writing-mode: tb-rl;
	-webkit-writing-mode: vertical-rl;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	white-space: nowrap;
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

:deep(.q-table tbody td.nice) {
	background: pink;
	color: darkred;
	font-weight: 600;
}

:deep(.q-table tbody tr.some) {
	background: #f7bac526;
}
</style>
