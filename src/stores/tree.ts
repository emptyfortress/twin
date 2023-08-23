import { defineStore } from 'pinia'

export const useTree = defineStore({
	id: 'tree',
	state: () => ({
		checkedNodes: [] as Stat[],
		currentNode: null as null | Stat,
		parents: [] as Stat[]
	}),
	getters: {
		cells(state) {
			return state.checkedNodes?.filter(e => e.data.type === 1)
		},
	},
	actions: {
		setCheckedNodes(e: Stat[]) {
			this.checkedNodes = e
		},
		setCurrentNode(e: Stat) {
			this.currentNode = e
		},
		setParents(e: Stat[]) {
			this.parents = e
		}
	},
})
