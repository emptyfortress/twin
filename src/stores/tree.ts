import { defineStore } from 'pinia'

export const useTree = defineStore({
	id: 'tree',
	state: () => ({
		checkedNodes: [] as Stat[],
	}),
	getters: {
		cells(state) {
			return state.checkedNodes.filter(item => item.data.type === 0)
		},
	},
	actions: {
		setCheckedNodes(e: Stat[]) {
			this.checkedNodes = e
		}
	},
})
