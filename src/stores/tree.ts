import { defineStore } from 'pinia'

export const useTree = defineStore({
	id: 'tree',
	state: () => ({
		checkedNodes: [] as Stat[],
		currentNode: null as null | Stat, //for big graphics
		parents: [] as Stat[], // for breadcrumbs in graphics
		selectedNodes: [] as Stat[],
		selectedNode: null as null | Stat, // for dynamic graphics
		key: 0,
	}),
	getters: {
		cells(state) {
			return state.checkedNodes?.filter(e => e.data.type === 1)
		},
	},
	actions: {
		addMetka(metka: any) {
			this.selectedNode?.data.metki?.push(metka)
		},
		setCheckedNodes(e: Stat[]) {
			this.checkedNodes = e
		},
		setCurrentNode(e: Stat) {
			this.currentNode = e
		},
		resetCurrentNode() {
			this.currentNode = null
		},
		setParents(e: Stat[]) {
			this.parents = e
		},
		setSelected(e: Stat[]) {
			this.selectedNodes = e
		},
		setSelectedNode(e: Stat) {
			this.selectedNode = e
		},
		addToSelected(e: Stat) {
			this.selectedNodes.push(e)
		},
	},
})
