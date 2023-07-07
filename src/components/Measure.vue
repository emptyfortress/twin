<script setup lang="ts">
import { ref, computed } from 'vue'
import { date } from 'quasar'

const fullscreen = ref(false)
const pagination = {
	sortBy: '',
	descending: true,
	page: 1,
	rowsPerPage: 13
}

var arr = [
	{
		id: 0,
		name: 'time',
		required: true,
		label: 'Время измерения',
		field: 'time',
		sortable: true,
		align: 'left',
		use: true,
	},
];
for (var i = 1; i < 20; i++) {
	arr.push({
		id: i,
		name: 'par' + i,
		required: true,
		label: 'Параметр ' + i,
		field: 'par' + i,
		sortable: true,
		align: 'left',
		use: true
	});
}

let newDate = new Date(2023, 2, 7)
const rows = [
	{
		id: 0,
		time: date.formatDate(newDate, 'YYYY-MM-DD'),
		par1: 434,
		par2: 434,
		par3: 434,
		par4: 434,
		par5: 434,
		par6: 434,
		par7: 434,
	}
]
for (var i = 1; i < 50; i++) {
	let temp = date.subtractFromDate(newDate, { days: i })
	rows.push({
		id: i,
		time: date.formatDate(temp, 'YYYY-MM-DD'),
		par1: 344,
		par2: 344,
		par3: 344,
		par4: 344,
		par5: 344,
		par6: 344,
		par7: 344,
		par8: 344,
	});
}

</script>

<template lang="pug">
q-table(flat
	:key="tabkey"
	:rows="rows"
	:columns="arr"
	row-key='id'
	rows-per-page-label="Записей на стр."
	:class="{ full: fullscreen }"
	:pagination="pagination")
</template>

<style scoped lang="scss"></style>
