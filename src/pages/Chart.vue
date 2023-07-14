<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { options, options1, series, series1 } from '@/stores/charts2'

</script>

<template lang="pug">
q-page(padding)
	.container
		.hd Примеры графиков
		q-card.q-mb-md
			q-card-section
				VueApexCharts(:options="options1" :series="series1")
		q-card
			q-card-section
				VueApexCharts(:options="options" :series="series")

</template>

<style scoped lang="scss">
.hd {
	font-size: 2.125rem;
}

.q-card {
	width: 800px;
}
</style>
