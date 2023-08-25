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
								text: 'Активное сопротивление постоянному току',
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
								text: 'Температура главного контакта',
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
								text1: 'Максимальная скорость',
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
				checked: false,
				children: [
					{
						id: uid(),
						text: 'Ток',
						checked: false,
						unit: 'A'
					},
					{
						id: uid(),
						text: 'Напряжение',
						checked: false,
						unit: 'кВ'
					},
					{
						id: uid(),
						text: 'Время',
						checked: false,
						unit: 'мс'
					},
					{
						id: uid(),
						text: 'Количество',
						checked: false,
						unit: 'шт'
					},
				]
			},
			{
				id: uid(),
				text: 'Обогрев полюса (фазы)',
				checked: false,
				children: [
					{
						id: uid(),
						text: 'Сопротивление',
						checked: false,
						unit: 'Ом'
					},
				]
			},
			{
				id: uid(),
				text: 'Ввод',
				checked: false,
				children: [
					{
						id: uid(),
						text: 'Изоляция',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Сопротивление',
								checked: false,
								unit: 'Ом'
							},
							{
								id: uid(),
								text: 'Утечка',
								checked: false,
								unit: '%'
							},
							{
								id: uid(),
								text: 'Тангенс угла',
								checked: false,
								unit: 'tgδ'
							},
						]
					},
				]
			},
			{
				id: uid(),
				text: 'Дугогасящая среда',
				checked: false,
				children: [
					{
						id: uid(),
						text: 'Трансформаторное масло',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Напряжение',
								checked: false,
								unit: 'кВ'
							},
							{
								id: uid(),
								text: 'Масса',
								checked: false,
								unit: 'мг'
							},
							{
								id: uid(),
								text: 'Температура',
								checked: false,
								unit: '℃',
							},
							{
								id: uid(),
								text: '%',
								checked: false,
							},
							{
								id: uid(),
								text: '%',
								checked: false,
							},
							{
								id: uid(),
								text: 'Тангенс угла',
								checked: false,
								unit: 'tgδ'
							},
							{
								id: uid(),
								text: '%',
								checked: false,
							},
							{
								id: uid(),
								text: '%',
								checked: false,
							},
							{
								id: uid(),
								text: '%',
								checked: false,
							},
						]
					}
				]
			},
			{
				id: uid(),
				text: 'Резисторы',
				checked: false,
				children: [
					{
						id: uid(),
						text: 'Токоограничивающие',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Сопротивление',
								checked: false,
								unit: 'Ом'
							}
						]

					}
				]
			},
			{
				id: uid(),
				text: 'Встр. трансформаторы тока',
				checked: false,
				children: [
					{
						id: uid(),
						text: 'Сопротивление',
						checked: false,
						unit: 'Ом'
					},
					{
						id: uid(),
						text: 'Утечка',
						checked: false,
						unit: '%'
					},
					{
						id: uid(),
						text: '%',
						checked: false,
					},
					{
						id: uid(),
						text: 'К',
						checked: false,
					},
					{
						id: uid(),
						text: 'Время',
						checked: false,
						unit: 'мс'
					},
					{
						id: uid(),
						text: 'Температура',
						checked: false,
						unit: '℃'
					},
				]
			},
			{
				id: uid(),
				text: 'Пружина',
				checked: false,
				children: [
					{
						id: uid(),
						text: 'Отключения',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Время',
								checked: false,
								unit: 'мс'
							},
							{
								id: uid(),
								text: 'Ход',
								checked: false,
								unit: 'мм'
							},
							{
								id: uid(),
								text: 'Скорость',
								checked: false,
								unit: 'м/с'
							},
						]
					},
				]
			},
			{
				id: uid(),
				text: 'Электромагнит',
				checked: false,
				children: [
					{
						id: uid(),
						text: 'Соленоид включения',
						checked: false,
						children: [

							{
								id: uid(),
								text: 'Ток',
								checked: false,
								unit: 'А'
							},
							{
								id: uid(),
								text: 'Напряжение',
								checked: false,
								unit: 'В'
							},
							{
								id: uid(),
								text: 'Сопротивление',
								checked: false,
								unit: 'Ом'
							},
						]
					},
					{
						id: uid(),
						text: 'Отключения',
						checked: false,
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
