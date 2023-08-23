import { uid } from 'quasar'

const treeData = [
	{
		id: uid(),
		text: 'Фаза 1',
		open: true,
		checked: false,
		children: [
			{
				id: uid(),
				text: 'Главный контакт',
				open: true,
				checked: true,
				children: [
					{
						id: uid(),
						text: 'Сопротивление',
						checked: true,
						open: false,
						children: [
							{
								id: uid(),
								text: 'Активное R постоянному току',
								checked: true,
								unit: 'мкОм',
								type: 1,
							},
						]
					},
					{
						id: uid(),
						text: 'Температура',
						checked: true,
						open: false,
						children: [
							{
								id: uid(),
								text: 'Температура глав.контакта',
								checked: true,
								unit: '℃',
								type: 1,
							},
						]

					},
					{
						id: uid(),
						text: 'Время',
						checked: true,
						open: false,
						children: [
							{
								id: uid(),
								text: 'Время коммутации',
								unit: 'мс',
								checked: true,
								type: 1,
							},
							{
								id: uid(),
								text: 'Разновременность замыкания',
								unit: 'мс',
								checked: true,
								type: 1,
							},
							{
								id: uid(),
								text: 'Дребезг',
								unit: 'мс',
								checked: true,
								type: 1,
							},
							{
								id: uid(),
								text: 'Полное время движения',
								unit: 'мс',
								checked: true,
								type: 1,
							},
							{
								id: uid(),
								text: 'Продолж. замкнутого сост. в цикле',
								text1: 'Продолжительность замкнутого состояния в цикле',
								unit: 'мс',
								checked: true,
								type: 1,
							},
							{
								id: uid(),
								text: 'Продолж. разомкнутого сост. в цикле',
								text1: 'Продолжительность разомкнутого состояния в цикле',
								unit: 'мс',
								checked: true,
								type: 1,
							},
						]
					},
					{
						id: uid(),
						text: 'Ход',
						checked: true,
						open: false,
						children: [
							{
								id: uid(),
								text: 'Ход до коммутации',
								unit: 'мм',
								checked: true,
								type: 1,
							},
							{
								id: uid(),
								text: 'Разность коммутации по ходу',
								unit: 'мм',
								checked: true,
								type: 1,
							},
							{
								id: uid(),
								text: 'Вжим',
								unit: 'мм',
								checked: true,
								type: 1,
							},
							{
								id: uid(),
								text: 'Дребезг по ходу',
								unit: 'мм',
								checked: true,
								type: 1,
							},
							{
								id: uid(),
								text: 'Полный ход',
								unit: 'мм',
								checked: true,
								type: 1,
							},
						]
					},
					{
						id: uid(),
						text: 'Скорость',
						checked: true,
						open: false,
						children: [
							{
								id: uid(),
								text: 'Скорость при коммутации',
								unit: 'м/с',
								checked: true,
								type: 1,
								red: true,
							},
							{
								id: uid(),
								text: 'Макс. скорость',
								unit: 'м/с',
								checked: true,
								type: 1,
							},
						]
					},
				]
			},
			{
				id: uid(),
				text: 'Дугогасительный контакт',
				children: [
					{
						id: uid(),
						text: 'Ток',
						unit: 'A'
					},
					{
						id: uid(),
						text: 'Напряжение',
						unit: 'кВ'
					},
					{
						id: uid(),
						text: 'Время',
						unit: 'мс'
					},
					{
						id: uid(),
						text: 'Количество',
						unit: 'шт'
					},
				]
			},
			{
				id: uid(),
				text: 'Обогрев полюса (фазы)',
				children: [
					{
						id: uid(),
						text: 'Сопротивление',
						unit: 'Ом'
					},
				]
			},
			{
				id: uid(),
				text: 'Ввод',
				children: [
					{
						id: uid(),
						text: 'Изоляция',
						children: [
							{
								id: uid(),
								text: 'Сопротивление',
								unit: 'Ом'
							},
							{
								id: uid(),
								text: 'Утечка',
								unit: '%'
							},
							{
								id: uid(),
								text: 'Тангенс угла',
								unit: 'tgδ'
							},
						]
					},
				]
			},
			{
				id: uid(),
				text: 'Дугогасящая среда',
				children: [
					{
						id: uid(),
						text: 'Трансформаторное масло',
						children: [
							{
								id: uid(),
								text: 'Напряжение',
								unit: 'кВ'
							},
							{
								id: uid(),
								text: 'Масса',
								unit: 'мг'
							},
							{
								id: uid(),
								text: 'Температура',
								unit: '℃',
							},
							{
								id: uid(),
								text: '%',
							},
							{
								id: uid(),
								text: '%',
							},
							{
								id: uid(),
								text: 'Тангенс угла',
								unit: 'tgδ'
							},
							{
								id: uid(),
								text: '%',
							},
							{
								id: uid(),
								text: '%',
							},
							{
								id: uid(),
								text: '%',
							},
						]
					}
				]
			},
			{
				id: uid(),
				text: 'Резисторы',
				children: [
					{
						id: uid(),
						text: 'Токоограничивающие',
						children: [
							{
								id: uid(),
								text: 'Сопротивление',
								unit: 'Ом'
							}
						]

					}
				]
			},
			{
				id: uid(),
				text: 'Встр. трансформаторы тока',
				children: [
					{
						id: uid(),
						text: 'Сопротивление',
						unit: 'Ом'
					},
					{
						id: uid(),
						text: 'Утечка',
						unit: '%'
					},
					{
						id: uid(),
						text: '%',
					},
					{
						id: uid(),
						text: 'К',
					},
					{
						id: uid(),
						text: 'Время',
						unit: 'мс'
					},
					{
						id: uid(),
						text: 'Температура',
						unit: '℃'
					},
				]
			},
			{
				id: uid(),
				text: 'Пружина',
				children: [
					{
						id: uid(),
						text: 'Отключения',
						children: [
							{
								id: uid(),
								text: 'Время',
								unit: 'мс'
							},
							{
								id: uid(),
								text: 'Ход',
								unit: 'мм'
							},
							{
								id: uid(),
								text: 'Скорость',
								unit: 'м/с'
							},
						]
					},
				]
			},
			{
				id: uid(),
				text: 'Электромагнит',
				children: [
					{
						id: uid(),
						text: 'Соленоид включения',
						children: [

							{
								id: uid(),
								text: 'Ток',
								unit: 'А'
							},
							{
								id: uid(),
								text: 'Напряжение',
								unit: 'В'
							},
							{
								id: uid(),
								text: 'Сопротивление',
								unit: 'Ом'
							},
						]
					},
					{
						id: uid(),
						text: 'Отключения',
						children: [

						]
					}
				]
			},
			{
				id: uid(),
				text: 'Буфер',
				checked: false,
			},
			{
				id: uid(),
				text: 'Обогрев привода',
				checked: false,
			},
		]
	}
]

export { treeData }
