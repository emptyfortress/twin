const treeData = [
	{
		text: 'Фаза 1',
		open: true,
		checked: false,
		children: [
			{
				text: 'Главный контакт',
				open: true,
				checked: true,
				children: [
					{
						text: 'Сопротивление',
						checked: true,
						unit: 'мкОм',
						children: [
							{
								text: 'Активное R постоянному току',
								checked: true,
								type: 0,
							},
						]
					},
					{
						text: 'Температура',
						checked: true,
						unit: '℃',
						children: [
							{
								text: 'Температура глав.контакта',
								checked: true,
								type: 0,
							},
						]

					},
					{
						text: 'Время',
						checked: true,
						unit: 'мс'
					},
					{
						text: 'Ход',
						checked: true,
						unit: 'мм'
					},
					{
						text: 'Скорость',
						checked: true,
						unit: 'м/с'
					},
				]
			},
			{
				text: 'Дугогасительный контакт',
				children: [
					{
						text: 'Ток',
						unit: 'A'
					},
					{
						text: 'Напряжение',
						unit: 'кВ'
					},
					{
						text: 'Время',
						unit: 'мс'
					},
					{
						text: 'Количество',
						unit: 'шт'
					},
				]
			},
			{
				text: 'Обогрев полюса (фазы)',
				children: [
					{
						text: 'Сопротивление',
						unit: 'Ом'
					},
				]
			},
			{
				text: 'Ввод',
				children: [
					{
						text: 'Изоляция',
						children: [
							{
								text: 'Сопротивление',
								unit: 'Ом'
							},
							{
								text: 'Утечка',
								unit: '%'
							},
							{
								text: 'Тангенс угла',
								unit: 'tgδ'
							},
						]
					},
				]
			},
			{
				text: 'Дугогасящая среда',
				children: [
					{
						text: 'Трансформаторное масло',
						children: [
							{
								text: 'Напряжение',
								unit: 'кВ'
							},
							{
								text: 'Масса',
								unit: 'мг'
							},
							{
								text: 'Температура',
								unit: '℃',
							},
							{
								text: '%',
							},
							{
								text: '%',
							},
							{
								text: 'Тангенс угла',
								unit: 'tgδ'
							},
							{
								text: '%',
							},
							{
								text: '%',
							},
							{
								text: '%',
							},
						]
					}
				]
			},
			{
				text: 'Резисторы',
				children: [
					{
						text: 'Токоограничивающие',
						children: [
							{
								text: 'Сопротивление',
								unit: 'Ом'
							}
						]

					}
				]
			},
			{
				text: 'Встр. трансформаторы тока',
				children: [
					{
						text: 'Сопротивление',
						unit: 'Ом'
					},
					{
						text: 'Утечка',
						unit: '%'
					},
					{
						text: '%',
					},
					{
						text: 'К',
					},
					{
						text: 'Время',
						unit: 'мс'
					},
					{
						text: 'Температура',
						unit: '℃'
					},
				]
			},
			{
				text: 'Пружина',
				children: [
					{
						text: 'Отключения',
						children: [
							{
								text: 'Время',
								unit: 'мс'
							},
							{
								text: 'Ход',
								unit: 'мм'
							},
							{
								text: 'Скорость',
								unit: 'м/с'
							},
						]
					},
				]
			},
			{
				text: 'Электромагнит',
				children: [
					{
						text: 'Соленоид включения',
						children: [

							{
								text: 'Ток',
								unit: 'А'
							},
							{
								text: 'Напряжение',
								unit: 'В'
							},
							{
								text: 'Сопротивление',
								unit: 'Ом'
							},
						]
					},
					{
						text: 'Отключения',
						children: [

						]
					}
				]
			},
			{
				text: 'Буфер',
				checked: false,
			},
			{
				text: 'Обогрев привода',
				checked: false,
			},
		]
	}
]

export { treeData }
