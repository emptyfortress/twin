import type { QTableProps } from 'quasar'

const columns: QTableProps['columns'] = [
	{
		name: 'manufacturer',
		required: true,
		label: 'Производитель',
		field: 'manufacturer',
		sortable: true,
		align: 'left'
	},
	{
		name: 'model',
		required: true,
		label: 'Модель',
		field: 'model',
		sortable: true,
		align: 'left'
	},
	{
		name: 'voltage',
		required: true,
		label: 'Класс напряжения',
		field: 'voltage',
		sortable: true,
		align: 'center'
	},
	{
		name: 'phase',
		required: true,
		label: 'Фазы',
		field: 'phase',
		sortable: true,
		align: 'center'
	},
	{
		name: 'polus',
		required: true,
		label: 'Полюса',
		field: 'polus',
		sortable: true,
		align: 'center'
	},
	{
		name: 'break',
		required: true,
		label: 'Разрывы на полюс',
		field: 'break',
		sortable: true,
		align: 'center'
	},
	{
		name: 'typP',
		required: true,
		label: 'Тип привода',
		field: 'typP',
		sortable: true,
		align: 'left'
	},
	{
		name: 'typB',
		required: true,
		label: 'Тип ВВ',
		field: 'typB',
		sortable: true,
		align: 'left'
	},
]

const rows = [
	{
		id: 0,
		manufacturer: 'one',
		model: '',
		voltage: 345,
		phase: 3,
		polus: '',
		break: 'laksj',
		typP: 'laksj',
		typB: 'laksj',
	}
]

export { columns, rows }
