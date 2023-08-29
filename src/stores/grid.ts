import { defineStore } from 'pinia'

export const useGrid = defineStore({
	id: 'grid',
	state: () => ({
		drawer: true,
		sidebar: true,
		gridType: 1,
		fullscreen: false,
		items: [],
		filter: true,
		checked: [],
		disable: 0,
		selected: false,
		rotation: false,
	}),
	getters: {},

	actions: {
		switchSidebar() {
			this.sidebar = !this.sidebar
		},
		switchFullscreen() {
			this.fullscreen = !this.fullscreen
		},
		switchGrid(e: number) {
			this.gridType = e
		},
		clearCheckedAll() {
			this.checked = []
		}
	},
})
