interface Item {
	id: number
	manufacturer: string
	model: string
	voltage: number
	phase: number
	polus: number
	break: number
	typP: string
	typB: string
}

interface Metka {
	x: number
	y: number
	label: {
		text: number
		orientation: string
	}
}

interface NodeData {
	id?: string
	text: string
	text1?: string
	text2?: string
	selected?: boolean
	checked?: boolean
	unit?: string
	type?: number
	red?: boolean
	metki?: Metka[]
}

interface Stat {
	data: NodeData
	open: boolean // Is opened.
	parent: Stat<T> | null // Parent stat.
	children: Stat<T>[] // Children stats.
	level: number // Level start from 1.
	isStat: boolean // Detect if is stat object.
	hidden: boolean // If hidden.
	checked: boolean | null // If checked. null mean just some children checked.
	draggable: boolean | null // null means inherit parent.
	droppable: boolean | null // null means inherit parent.
	style: any // Customize node style. Vue's style format.
	class: any // Customize node class name. Vue's class format.
}
