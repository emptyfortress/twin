const treeData = [
	{
		text: 'Фаза 1',
		children: [
			{
				text: 'Главный контакт',
				children: [
					{
						text: 'Сопротивление',
						unit: 'мкОм'
					},
					{
						text: 'Температура',
						unit: '℃'
					},
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
				text: 'Встроенные трансформаторы тока',
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
						text: 'Отключиения',
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
			},
			{
				text: 'Обогрев привода',
			},
		]
	}
]

export { treeData }
