import type { QTableColumn } from 'quasar'

const columns: QTableColumn[] = [
	{
		name: 'manufacturer',
		required: true,
		label: 'Производитель',
		field: 'manufacturer',
		sortable: true,
		align: 'left',
		use: true,
	},
	{
		name: 'model',
		required: true,
		label: 'Модель',
		field: 'model',
		sortable: true,
		align: 'left',
		use: true,
	},
	{
		name: 'voltage',
		required: true,
		label: 'Класс напряжения',
		field: 'voltage',
		sortable: true,
		align: 'center',
		use: true,
	},
	{
		name: 'phase',
		required: true,
		label: 'Фазы',
		field: 'phase',
		sortable: true,
		align: 'center',
		use: true,
	},
	{
		name: 'polus',
		required: true,
		label: 'Полюса',
		field: 'polus',
		sortable: true,
		align: 'center',
		use: true,
	},
	{
		name: 'break',
		required: true,
		label: 'Разрывы на полюс',
		field: 'break',
		sortable: true,
		align: 'center',
		use: true,
	},
	{
		name: 'typP',
		required: true,
		label: 'Тип привода',
		field: 'typP',
		sortable: true,
		align: 'left',
		use: true,
	},
	{
		name: 'typB',
		required: true,
		label: 'Тип ВВ',
		field: 'typB',
		sortable: true,
		align: 'left',
		use: true,
	},
]

const rows = [
	{
		id: 0,
		manufacturer: 'ООО "ЭТМ"',
		model: 'МКР-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 1,
		manufacturer: 'Уралэлектротяжмаш',
		model: 'ПКВ-220В-1500-200',
		voltage: 220,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 2,
		manufacturer: 'СпецАвтоматика',
		model: 'МКР-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 3,
		manufacturer: 'Уралэлектротяжмаш',
		model: 'МКР-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 4,
		manufacturer: 'СпецАвтоматика',
		model: 'ПКВ-220В-1500-200',
		voltage: 220,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 5,
		manufacturer: 'СпецАвтоматика',
		model: 'МКР-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 6,
		manufacturer: 'Уралэлектротяжмаш',
		model: 'МКР-220В-1500-200',
		voltage: 220,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 7,
		manufacturer: 'ООО "ЭТМ"',
		model: 'ПКВ-220В-1500-200',
		voltage: 220,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 8,
		manufacturer: 'ООО "ЭТМ"',
		model: 'ПКВ-220В-1500-200',
		voltage: 220,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 9,
		manufacturer: 'СпецАвтоматика',
		model: 'МКР-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 10,
		manufacturer: 'Уралэлектротяжмаш',
		model: 'ПКВ-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 11,
		manufacturer: 'ООО "ЭТМ"',
		model: 'МКР-220В-1500-200',
		voltage: 220,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 12,
		manufacturer: 'Уралэлектротяжмаш',
		model: 'МКР-220В-1500-200',
		voltage: 220,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 13,
		manufacturer: 'Уралэлектротяжмаш',
		model: 'МКР-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 14,
		manufacturer: 'СпецАвтоматика',
		model: 'ПКВ-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 15,
		manufacturer: 'ООО "ЭТМ"',
		model: 'МКР-220В-1500-200',
		voltage: 220,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 16,
		manufacturer: 'ООО "ЭТМ"',
		model: 'МКР-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 17,
		manufacturer: 'СпецАвтоматика',
		model: 'ПКВ-220В-1500-200',
		voltage: 220,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 18,
		manufacturer: 'Уралэлектротяжмаш',
		model: 'МКР-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 19,
		manufacturer: 'ООО "ЭТМ"',
		model: 'ПКВ-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
	{
		id: 20,
		manufacturer: 'Уралэлектротяжмаш',
		model: 'МКР-110В-1000-200',
		voltage: 110,
		phase: 3,
		polus: 1,
		break: 2,
		typP: 'Электромагнитный',
		typB: 'Масляный',
	},
]

export { columns, rows }
