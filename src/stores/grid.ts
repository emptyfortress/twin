import { defineStore } from 'pinia'

export const useGrid = defineStore({
	id: 'grid',
	state: () => ({
		sidebar: true,
		table: true,
		fullscreen: false,
		items: [],
		filter: true,
		checked: [],
		disable: 0,
		selected: false,
		aggregat: false,
	}),
	getters: {},

	actions: {
		switchAggregat() {
			this.aggregat = !this.aggregat
		},
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
		// addAggregat(col, el) {
		// 	let temp = this.checked.find( item => item.col === col )
		// 	if (!temp) {
		// 		this.checked.push({
		// 			col: col,
		// 			items: [ el ]
		// 		})
		// 	} else {
		// 		temp.items.push(el)
		// 	}
		// },
		// removeAggregat( col, el ) {
		// 	let colIdx = this.checked.findIndex( item => item.col === col )
		// 	let itemIdx = this.checked[colIdx].items.indexOf(el)
		// 	this.checked[colIdx].items.splice(itemIdx, 1)
		// 	if (this.checked[colIdx].items.length === 0) {
		// 		this.checked.splice(colIdx, 1)
		// 	}
		// },
		// addChecked(col, items) {
		// 	let temp = this.checked.find( item => item.id === col.id )
		// 	if (!temp) {
		// 		this.checked.push({
		// 			id: col.id,
		// 			col: col.name,
		// 			items: items
		// 		})
		// 	} else {
		// 		temp.items = []
		// 		items.forEach( el => {
		// 			temp.items.push(el)
		// 		} )
		// 	}
		// },
		// clearCheckedColumn(col) {
		// 	let temp = this.checked.indexOf( (el) => el.id === col.id )
		// 	this.checked.splice(temp, 1)
		// },
		clearCheckedAll() {
			this.checked = []
		}
	},
})
