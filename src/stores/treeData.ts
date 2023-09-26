import { uid } from 'quasar'

const treeData = [
	{
		id: uid(),
		text: 'Фаза A',
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
								red: true,
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
						children: [
							{
								id: uid(),
								text: 'Действ. чилло тока за время откл.',
								text1: 'Действующее число тока за время отключения',
								checked: false,
								unit: 'А',
								type: 1,
							},
						]
					},
					{
						id: uid(),
						text: 'Напряжение',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Номинальное напряжение',
								checked: false,
								unit: 'кВ',
								type: 1,
							},
						]
					},
					{
						id: uid(),
						text: 'Время',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Суммарное время горения дуги',
								checked: false,
								unit: 'мс',
								type: 1,
							},
						]
					},
					{
						id: uid(),
						text: 'Количество',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Кол-во отключений токов КЗ',
								text1: 'Количество отключений токов КЗ',
								checked: false,
								unit: 'шт',
								type: 1,
							},
						]
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
						children: [
							{
								id: uid(),
								text: 'Активное сопр. пост. току',
								text1: 'Активное сопротивление постоянному току',
								checked: false,
								unit: 'Ом',
								type: 1,
							},
							{
								id: uid(),
								text: 'Сопротивление изоляции',
								checked: false,
								unit: 'МОм',
								type: 1,
							},
						]
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
								children: [
									{
										id: uid(),
										text: 'Сопротивление изоляции',
										checked: false,
										unit: 'МОм',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Утечка',
								checked: false,
								children: [
									{
										id: uid(),
										text: 'Испытание изоляции повыш. напр.',
										text1: 'Испытание изоляции повышенным напряжением',
										checked: false,
										unit: '%',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Тангенс угла диэлектрических потерь',
								checked: false,
								unit: 'tgδ',
								type: 1,
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
								children: [
									{
										id: uid(),
										text: 'Пробивное напряжение',
										checked: false,
										unit: 'кВ',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Масса',
								checked: false,
								children: [
									{
										id: uid(),
										text: 'Кислотное число',
										checked: false,
										unit: 'мг',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Температура',
								checked: false,
								children: [
									{
										id: uid(),
										text: 'Температура вспышки',
										checked: false,
										unit: '℃',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Содержание',
								checked: false,
								children: [
									{
										id: uid(),
										text: 'Влагосодержание',
										unit: '%',
										checked: false,
										type: 1,
									},
									{
										id: uid(),
										text: 'Содержание механических примесей',
										checked: false,
										unit: '%',
										type: 1,
									},
									{
										id: uid(),
										text: 'Содерж-е водораств. кислот и щелочей',
										text1: 'Содержание водорастворимых кислот и щелочей',
										checked: false,
										unit: '%',
										type: 1,
									},
									{
										id: uid(),
										text: 'Содерж-е антиокисл. присадки АГИДОЛ-1',
										text1: 'Содержание антиокислительной присадки АГИДОЛ-1',
										checked: false,
										unit: '%',
										type: 1,
									},
									{
										id: uid(),
										text: 'Содержание растворимого шлама',
										checked: false,
										unit: '%',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Тангенс угла диэлектрических потерь',
								checked: false,
								unit: 'tgδ',
								type: 1,
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
								text: 'Активное сопротивление постоянному току',
								checked: false,
								unit: 'Ом',
								type: 1,
							}
						]

					}
				]
			},
			{
				id: uid(),
				text: 'Встроенные трансформаторы тока',
				checked: false,
				children: [
					{
						id: uid(),
						text: 'Сопротивление',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Измер. сопр. разрядн. резистора конденсатора',
								text1: 'Измерения сопротивления разрядного резистора конденсатора',
								checked: false,
								unit: 'Ом',
								type: 1,
							},
							{
								id: uid(),
								text: 'Измер. активн. сопр. постоянному току',
								text1: 'Измерение активного сопротивления постоянному току',
								checked: false,
								unit: 'Ом',
								type: 1,
							},
						]
					},
					{
						id: uid(),
						text: 'Утечка',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Испытание изоляции повыш. напр.',
								text1: 'Испытание изоляции повышенным напряжением',
								checked: false,
								unit: '%',
								type: 1,
							},
						]
					},
					{
						id: uid(),
						text: 'Снятие характеристик намагничивания',
						checked: false,
						unit: '%',
						type: 1,
					},
					{
						id: uid(),
						text: 'Измерение коэффициента трансформации',
						unit: 'К',
						checked: false,
						type: 1,
					},
					{
						id: uid(),
						text: 'Температура',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Тепловизионный контроль',
								checked: false,
								unit: '℃',
								type: 1,
							},
						]
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
								children: [
									{
										id: uid(),
										text: 'Время включения коммутации',
										checked: false,
										unit: 'мс',
										type: 1,
									},
									{
										id: uid(),
										text: 'Полное время движения',
										checked: false,
										unit: 'мс',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Ход',
								checked: false,
								unit: 'мм',
								children: [
									{
										id: uid(),
										text: 'Ход до коммутации',
										checked: false,
										unit: 'мм',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Скорость',
								checked: false,
								unit: 'м/с',
								children: [
									{
										id: uid(),
										text: 'Скорость при коммутации',
										checked: false,
										unit: 'м/с',
										type: 1,
									},
									{
										id: uid(),
										text: 'Максимальная скорость',
										checked: false,
										unit: 'м/с',
										type: 1,
									},
									{
										id: uid(),
										text: 'Скорость на участке',
										checked: false,
										unit: 'м/с',
										type: 1,
									},
								]
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
								children: [
									{
										id: uid(),
										text: 'Максимальный ток',
										checked: false,
										unit: 'А',
										type: 1,
									},
									{
										id: uid(),
										text: 'Время протекания тока',
										checked: false,
										unit: 'мс',
										type: 1,
									},
									{
										id: uid(),
										text: 'График тока',
										checked: false,
										unit: 'график',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Напряжение',
								checked: false,
								unit: 'В',
								children: [
									{
										id: uid(),
										text: 'Действующее значение напряжения',
										checked: false,
										unit: 'В',
										type: 1,
									},
									{
										id: uid(),
										text: 'Пониженное напряжение',
										checked: false,
										unit: 'В',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Сопротивление',
								checked: false,
								children: [
									{
										id: uid(),
										text: 'Активное сопротивление постоянному току',
										checked: false,
										unit: 'мкОм',
										type: 1,
									},
									{
										id: uid(),
										text: 'Сопротивление изоляции',
										checked: false,
										unit: 'МОм',
										type: 1,
									},
								]
							},
						]
					},
					{
						id: uid(),
						text: 'Отключения',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Ток',
								checked: false,
								children: [
									{
										id: uid(),
										text: 'Максимальный ток',
										checked: false,
										unit: 'А',
										type: 1,
									},
									{
										id: uid(),
										text: 'Время протекания тока',
										checked: false,
										unit: 'мс',
										type: 1,
									},
									{
										id: uid(),
										text: 'График тока',
										checked: false,
										unit: 'график',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Напряжение',
								checked: false,
								unit: 'В',
								children: [
									{
										id: uid(),
										text: 'Действующее значение напряжения',
										checked: false,
										unit: 'В',
										type: 1,
									},
									{
										id: uid(),
										text: 'Пониженное напряжение',
										checked: false,
										unit: 'В',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Сопротивление',
								checked: false,
								children: [
									{
										id: uid(),
										text: 'Активное сопротивление постоянному току',
										checked: false,
										unit: 'мкОм',
										type: 1,
									},
									{
										id: uid(),
										text: 'Сопротивление изоляции',
										checked: false,
										unit: 'МОм',
										type: 1,
									},
								]
							},
						]
					}
				]
			},
			{
				id: uid(),
				text: 'Буфер',
				checked: false,
				children: [
					{
						id: uid(),
						text: 'Включения',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Ход',
								checked: false,
								children: [
									{
										id: uid(),
										text: 'Перелет',
										checked: false,
										unit: 'мм',
										type: 1,
									},
									{
										id: uid(),
										text: 'Отскок',
										checked: false,
										unit: 'мм',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Скорость',
								checked: false,
								children: [
									{
										id: uid(),
										text: 'Отрицательная скорость',
										text1: 'Испытание изоляции повышенным напряжением',
										checked: false,
										unit: 'м/c',
										type: 1,
									},
								]
							},
						]
					},
					{
						id: uid(),
						text: 'Отключения',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Ход',
								checked: false,
								children: [
									{
										id: uid(),
										text: 'Перелет',
										checked: false,
										unit: 'мм',
										type: 1,
									},
									{
										id: uid(),
										text: 'Отскок',
										checked: false,
										unit: 'мм',
										type: 1,
									},
								]
							},
							{
								id: uid(),
								text: 'Скорость',
								checked: false,
								children: [
									{
										id: uid(),
										text: 'Отрицательная скорость',
										text1: 'Испытание изоляции повышенным напряжением',
										checked: false,
										unit: 'м/c',
										type: 1,
									},
								]
							},
						]
					},
				]
			},
			{
				id: uid(),
				text: 'Обогрев привода',
				checked: false,
				children: [
					{
						id: uid(),
						text: 'Сопротивление',
						checked: false,
						children: [
							{
								id: uid(),
								text: 'Активное сопротивление постоянному току',
								checked: false,
								unit: 'мкОм',
								type: 1,
							},
							{
								id: uid(),
								text: 'Сопротивление изоляции',
								checked: false,
								unit: 'МОм',
								type: 1,
							},
						]
					},

				]
			},
		]
	},
	{
		id: uid(),
		text: 'Фаза Б',
		open: false,
		checked: false,
	},
	{
		id: uid(),
		text: 'Фаза С',
		open: false,
		checked: false,
	}
]

export { treeData }
