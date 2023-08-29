<script setup lang="ts">
import DotCard from '@/components/DotCard.vue'
import { useTree } from '@/stores/tree'

const mytree = useTree()
</script>

<template lang="pug">
.til
	DotCard(v-for="item in mytree.cells" :item="item" )
</template>

<style scoped lang="scss">
.til {
	display: flex;
	gap: .5rem;
	// align-items: stretch;
	flex-wrap: wrap;
	padding-top: .5rem;
}

.full .side .tile {
	padding: .5rem;
}

.card {
	// width: 160px;
	// height: 50px;
	border-radius: 4px;
	background: #fff;
	position: relative;
	padding: 0;
	cursor: pointer;

	&:hover {
		box-shadow: var(--card-shadow);
	}
}
</style>
