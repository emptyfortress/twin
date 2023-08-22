<script setup lang="ts">
import { ref } from 'vue'
import { Draggable } from "@he-tree/vue";
import WordHighlighter from "vue-word-highlighter"
import "@he-tree/vue/style/default.css";
import { treeData } from '@/stores/tree'

const query = ref('')
const toggle = (stat: any) => {
	stat.open = !stat.open
}
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
	Draggable(v-model="treeData" ref="tree" :indent="33")
		template(#default="{ node, stat }")
			.node(@click="select(stat)" :class="{ 'selected': stat.data.selected }")
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
				input(type="checkbox" v-model="stat.checked").q-mr-sm
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
}
</style>

