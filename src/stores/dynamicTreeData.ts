import { uid } from 'quasar'

const dynamicData = [
	{
		id: uid(),
		text: '20.09.23',
		open: true,
		checked: false,
		selected: false,
		children: [
			{
				id: uid(),
				text: 'Измерение 1 ВКЛ',
				open: true,
				checked: false,
				selected: false,
				children: [
					{
						id: uid(),
						text: 'Фаза А',
						open: true,
						checked: false,
						selected: false,
						children: [
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ход от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ток от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от времени',},
						]
					},
					{
						id: uid(),
						text: 'Фаза Б',
						open: false,
						checked: false,
						selected: false,
						children: [
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ход от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ток от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от времени',},
						]
					},
					{
						id: uid(),
						text: 'Фаза С',
						open: false,
						checked: false,
						selected: false,
						children: [
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ход от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ток от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от времени',},
						]
					},
				]
			},
			{
				id: uid(),
				text: 'Измерение 2 ОТКЛ',
				open: false,
				checked: false,
				selected: false,
				children: [
					{
						id: uid(),
						text: 'Фаза А',
						open: false,
						checked: false,
						selected: false,
						children: [
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ход от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ток от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от времени',},
						]
					},
					{
						id: uid(),
						text: 'Фаза Б',
						open: false,
						checked: false,
						selected: false,
						children: [
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ход от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ток от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от времени',},
						]
					},
					{
						id: uid(),
						text: 'Фаза С',
						open: false,
						checked: false,
						selected: false,
						children: [
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ход от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Скорость от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Ток от времени',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от хода',},
							{id: uid(), open: false, checked: false, selected: false, text: 'Напряжение от времени',},
						]
					},
				]
			},

		]
	},
	{
		id: uid(),
		text: '19.09.23',
		open: false,
		checked: false,
		selected: false,
		children: [

		]
	},
	{
		id: uid(),
		text: '18.09.23',
		open: false,
		checked: false,
		selected: false,
		children: [

		]
	},
]

export { dynamicData }
