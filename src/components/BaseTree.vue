<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'
import { Draggable } from "@he-tree/vue";
import WordHighlighter from "vue-word-highlighter"
import "@he-tree/vue/style/default.css";
import { treeData } from '@/stores/treeData'
import { useTree } from '@/stores/tree'

const query = ref('')

const tree = ref()
const toggle = (stat: any) => {
	stat.open = !stat.open
}
const select = ((n: Stat) => {
	let parent = []
	n.data.selected = !n.data.selected
	// for (const parentStat of tree.value.iterateParent(n, { withSelf: false })) {
	// 	parent.push(parentStat)
	// 	console.log(parentStat.data.text)
	// }
})

const clearFilter = (() => {
	query.value = ''
	tree.value.statsFlat.map((item: Stat) => item.hidden = false)
})


const initial = (stat: any) => {
	stat.checked = stat.data.checked
	stat.open = stat.data.open
	return stat
}

watch(query, (newValue) => {
	if (newValue !== '') {
		tree.value.statsFlat.map((stat: Stat) => {
			stat.hidden = true
			if (stat.data.text.toLowerCase().includes(query.value.toLowerCase())) {
				stat.hidden = false
				for (const parentStat of tree.value.iterateParent(stat, { withSelf: false })) {
					parentStat.hidden = false
					parentStat.open = true
				}
			}
		})
	} else clearFilter()

})

const mytree = useTree()
watchEffect(() => {
	let temp = tree.value?.statsFlat.filter((e: Stat) => e.checked === true)
	mytree.setCheckedNodes(temp)
	if (mytree.currentNode) {
		let parent = []
		for (const parentStat of tree.value.iterateParent(mytree.currentNode, { withSelf: false })) {
			parent.push(parentStat)
		}
		mytree.setParents(parent.reverse())
	}
})
</script>

<template lang="pug">
div
	q-form.quick
		q-card-section.q-pt-xs
			q-input(dense
				v-model.trim="query"
				:debounce="300"
				autofocus
				clearable
				@clear="clearFilter"
				placeholder="фильтр"
				).query
				template(v-slot:prepend)
					q-icon(name="mdi-magnify")
	Draggable(ref="tree" 
		v-model="treeData"
		:indent="33"
		:nodeKey="(stat) => stat.data.id"
		:statHandler="initial"
		:watermark="false"
		style="width:295px; overflow-x: auto;")

		template(#default="{ node, stat }")
			.node(@click="select(stat)" :class="{ 'selected': stat.data.selected }")
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
				q-checkbox(v-model="stat.checked" @click.stop="" dense size="xs" :indeterminate-value="0").q-mr-sm
				WordHighlighter(:query="query") {{ node.text }}
</template>

<style scoped lang="scss">
.quick .q-field--dense .q-field__control,
.q-field--dense .q-field__marginal {
	height: 28px !important;
}

.trig {
	font-size: 1.2rem;
	margin-right: 0.2rem;
	transform: translateY(-3px);
	transition: 0.2s ease all;
	// transform-origin: 9px 10px;

	&.closed {
		transform: rotate(-90deg);
	}
}

.node {
	font-size: .85rem;
	cursor: pointer;
	padding: 2px 6px;
	white-space: nowrap;

	&.selected {
		background: #b1ddfc;
		color: #1565c0;

		&:hover {
			background: #b1ddfc;
		}
	}

	&:hover {
		background: hsla(0, 0%, 91%);
	}
}
</style>

