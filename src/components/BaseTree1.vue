<script setup lang="ts">
import { ref, watch, watchEffect, computed } from 'vue'
import { BaseTree } from "@he-tree/vue";
import WordHighlighter from "vue-word-highlighter"
import "@he-tree/vue/style/default.css";
import { dynamicData } from '@/stores/dynamicTreeData'
import { useTree } from '@/stores/tree'

const query = ref('')

const tree1 = ref()
const mytree = useTree()
const toggle = (stat: any) => {
	stat.open = !stat.open
}

// function selectChilds(tree: any): any {
// 	tree.data.selected = !tree.data.selected
// 	if (!tree) return {};
// 	if (!tree.children) return {};
// 	tree.children = tree.children.map((child: any) => selectChilds(child))
// 	return tree;
// }

const select = ((n: Stat) => {
	tree1.value.statsFlat.map((el: Stat) => el.data.selected = false)
	n.data.selected = !n.data.selected
	// selectChilds(n)
	// const sel = tree1.value.statsFlat.filter((el: Stat) => el.data.selected === true && el.data.type === 1)
	mytree.setSelectedNode(n)
	mytree.key += 1
})

const clearFilter = (() => {
	query.value = ''
	tree1.value.statsFlat.map((item: Stat) => item.hidden = false)
})


const initial = (stat: any) => {
	stat.checked = stat.data.checked
	stat.open = stat.data.open
	return stat
}

watch(query, (newValue) => {
	if (newValue !== '') {
		tree1.value.statsFlat.map((stat: Stat) => {
			stat.hidden = true
			if (stat.data.text.toLowerCase().includes(query.value.toLowerCase())) {
				stat.hidden = false
				for (const parentStat of tree1.value.iterateParent(stat, { withSelf: false })) {
					parentStat.hidden = false
					parentStat.open = true
				}
			}
		})
	} else clearFilter()

})

// watchEffect(() => {
// 	let temp = tree.value?.statsFlat.filter((e: Stat) => e.checked === true)
// 	mytree.setCheckedNodes(temp)
// 	if (!!mytree.currentNode) {
// 		let parent = []
// 		for (const parentStat of tree.value.iterateParent(mytree.currentNode, { withSelf: false })) {
// 			parent.push(parentStat)
// 		}
// 		mytree.setParents(parent.reverse())
// 	}
// })
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
	BaseTree(ref="tree1" 
		v-model="dynamicData"
		:nodeKey="(stat) => stat.data.id"
		:statHandler="initial"
		:watermark="false")

		template(#default="{ node, stat }")
			.node(@click="select(stat)" :class="{ 'selected': stat.data.selected }")
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
				// q-checkbox(v-model="stat.checked" @click.stop="" dense size="xs" :indeterminate-value="0").q-mr-sm
				WordHighlighter(:query="query") {{ node.text }}
</template>

<style scoped lang="scss">
.he-tree {
	width: 295px;
	overflow-x: auto;
}

.quick .q-field--dense .q-field__control,
.q-field--dense .q-field__marginal {
	height: 28px !important;
}

.trig {
	font-size: 1.2rem;
	margin-right: 0.2rem;
	transform: translateY(-3px);
	transition: 0.2s ease all;

	&.closed {
		transform: rotate(-90deg);
	}
}

.node {
	font-size: .85rem;
	cursor: pointer;
	padding: 4px 6px;
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

// :deep(.q-checkbox--dense .q-checkbox__inner) {
// 	transform: translateY(-2px);
// }
</style>

