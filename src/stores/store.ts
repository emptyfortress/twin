import { defineStore } from 'pinia'
import { columns } from '@/stores/data'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		columns: columns,
	}),
	getters: {},
	actions: {
		toggleMini() {
			this.mini = !this.mini
		},
		resetColumns() {
			this.columns = [...columns]
		}
	},
})
