import { defineStore } from 'pinia'
import { columns } from '@/stores/data'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		allcolumns: [...columns],
	}),
	getters: {
		columns() {
			return this.allcolumns.filter(item => item.use)
		},

	},
	actions: {
		toggleMini() {
			this.mini = !this.mini
		},
		resetColumns() {
			this.allcolumns.map(item => item.use = true)
		}
	},
})
