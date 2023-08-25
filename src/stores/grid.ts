import { defineStore } from 'pinia'

export const useGrid = defineStore({
	id: 'grid',
	state: () => ({
		drawer: true,
		sidebar: true,
		table: false,
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
		showGrid() {
			this.table = true
		},
		showTile() {
			this.table = false
		},
		clearCheckedAll() {
			this.checked = []
		}
	},
})
