<script setup lang="ts">
import TileCard from '@/components/TileCard.vue'
import {
	insulation,
	Transformeroil,
	PIR,
	Current_limiting,
	Builtincurrenttransformers,
	Tractions,
	Maincontact,
	Bounce,
	Bounceintravel,
	Turnonspringwindingtime,
	Arcextinguishingcontact,
	Closing,
	Opening,
	Closingsolenoid,
	Undervoltage,
	Closing1,
	Undervoltage1,
	Opening1,
} from '@/stores/table'
</script>

<template lang="pug">
.tile
	TileCard(v-for="item in insulation" :name="item")
</template>

<style scoped lang="scss">
.tile {
	display: flex;
	gap: .5rem;
	flex-wrap: wrap;
	padding-top: .5rem;

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
