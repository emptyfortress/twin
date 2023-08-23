import { defineStore } from 'pinia'

export const useTree = defineStore({
	id: 'tree',
	state: () => ({
		checkedNodes: [],
	}),
	getters: {
		cells(state) {
			return state.checkedNodes?.filter(e => e.data.type === 1)
		},
	},
	actions: {
		setCheckedNodes(e: Stat[]) {
			this.checkedNodes = e
		}
	},
})
