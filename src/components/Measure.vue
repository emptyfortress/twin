<script setup lang="ts">
import { ref, computed } from 'vue'
import { measureColumn } from '@/stores/data'

const fullscreen = ref(false)
const pagination = {
	sortBy: '',
	descending: true,
	page: 1,
	rowsPerPage: 13
}

const rows = []
</script>

<template lang="pug">
q-table(flat
	:key="tabkey"
	:rows="rows"
	:columns="measureColumn"
	row-key='id'
	rows-per-page-label="Записей на стр."
	:class="{ full: fullscreen }"
	:pagination="pagination")
</template>

<style scoped lang="scss"></style>
