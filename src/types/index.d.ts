interface Column {
	name: string
	required: boolean
	label: string
	field: string
	sortable: boolean
	align: string
	use?: boolean
}

interface Item {
	id: number
	manufacturer: string
	model: string
	voltage: number,
	phase: number,
	polus: number,
	break: number,
	typP: string
	typB: string
}
