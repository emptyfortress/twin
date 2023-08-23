<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Draggable } from "@he-tree/vue";
import WordHighlighter from "vue-word-highlighter"
import "@he-tree/vue/style/default.css";
import { treeData } from '@/stores/tree'

const query = ref('')
const tree = ref()
const toggle = (stat: any) => {
	stat.open = !stat.open
}

const clearFilter = (() => {
	query.value = ''
	tree.value.statsFlat.map((item: Stat) => item.hidden = false)
})

const initial = (stat: any) => {
	stat.checked = stat.data.checked
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
				}
			}
		})
	} else clearFilter()

})
</script>

<template lang="pug">
div
	q-form.quick
		q-card-section.q-pt-xs
			q-input(dense
				v-model="query"
				autofocus
				clearable
				@clear="clearFilter"
				placeholder="фильтр"
				).query
				template(v-slot:prepend)
					q-icon(name="mdi-magnify")
	Draggable(v-model="treeData" ref="tree" :indent="33" :statHandler="initial")
		template(#default="{ node, stat }")
			.node(@click="select(stat)" :class="{ 'selected': stat.data.selected }")
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
				input(type="checkbox" v-model="stat.checked" @click.stop="").q-mr-sm
				WordHighlighter(:query="query") {{ node.text }}
</template>

<style scoped lang="scss">
.quick .q-field--dense .q-field__control,
.q-field--dense .q-field__marginal {
	height: 28px !important;
}

.trig {
	font-size: 1.3rem;
	margin-right: 0.2rem;
	transition: 0.2s ease all;

	&.closed {
		transform: rotate(-90deg);
	}
}

.node {
	font-size: .85rem;
	cursor: pointer;
}
</style>

