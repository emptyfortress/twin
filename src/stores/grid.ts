import { defineStore } from 'pinia'

interface Metka {
	label: string
	x: number
	y: string
}

export const useGrid = defineStore({
	id: 'grid',
	state: () => ({
		drawer: true,
		sidebar: true,
		gridType: 0,
		fullscreen: false,
		items: [],
		filter: true,
		checked: [],
		disable: 0,
		selected: false,
		rotation: true,
		metki: [] as Metka[],
		reset: false,
	}),
	getters: {},

	actions: {
		addMetka(e: Metka) {
			this.metki.push(e)
		},
		deleteMetki() {
			this.metki.length = 0
			this.reset = true
		},
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
		},
	},
})
