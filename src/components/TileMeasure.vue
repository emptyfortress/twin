<script setup lang="ts">
import TileCard from '@/components/TileCard.vue'
import { useTree } from '@/stores/tree'

const mytree = useTree()
</script>

<template lang="pug">
.tile
	TileCard(v-for="item in mytree.cells" :item="item" )
</template>

<style scoped lang="scss">
.tile {
	display: flex;
	gap: .5rem;
	flex-wrap: wrap;
	padding-top: .5rem;
}

.full .tile {
	padding: .5rem;
}

.card {
	width: 160px;
	height: 50px;
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
