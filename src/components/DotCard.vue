<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { randomNumber } from '@/utils/utils'
import TrendDialog from '@/components/TrendDialog.vue';
import { useTree } from '@/stores/tree'

const mytree = useTree()

interface PropType {
	item: Stat,
	parents?: Stat[]
}

const props = defineProps<PropType>()

const val = ref(randomNumber(40, 80, 0))
const big = ref(false)

const showTrendDialog = (() => {
	mytree.setCurrentNode(props.item)
	nextTick(() => {
		big.value = true
	})
})

const color = computed(() => {
	return props.item.data.red ? 'red' : '#3380bc'
})
const calcClass = computed(() => {
	if (mytree.selectedNodes.length) {
		return props.item.data.selected ? '' : 'blur'
	}
	return ''
})
</script>

<template lang="pug">
.cont(:class="calcClass")
	.card(@click="showTrendDialog")
		.row.items-baseline.justify-start
			.data {{ val }}
			.unit {{ props.item.data.unit }}
	q-tooltip {{ props.item.data.text }}
TrendDialog(v-model="big" :item="props.item" :val="val")
</template>

<style scoped lang="scss">
.cont {
	&.blur {
		filter: blur(5px) grayscale(100%);
	}
}

.card {
	border-radius: 4px;
	background: #fff;
	padding: .5rem;
	cursor: pointer;
	box-shadow: var(--card-shadow);

	&:hover {
		outline: 1px solid v-bind(color);
	}
}

.data {
	font-size: 1.4rem;
	font-weight: 600;
	color: v-bind(color);
}

.label {
	font-size: .8rem;
	line-height: 1.0;
	margin-top: 4px;
}

.unit {
	font-size: .8rem;
	margin-left: .2rem;
	color: v-bind(color);
}
</style>
