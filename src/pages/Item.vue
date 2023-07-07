<script setup lang="ts">
import { onBeforeMount, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { rows } from '@/stores/data'

const route = useRoute()
const item = ref()

watchEffect(() => {
	item.value = rows.find(e => e.id === +route.params.id)
})
onBeforeMount(() => {
	item.value = rows.find(e => e.id === +route.params.id)
})

const panel = ref(true)
</script>

<template lang="pug">
q-page(padding)
	.container
		h4.q-mt-none.q-mb-sm {{ item.model }}
		q-expansion-item(v-model="panel" label="Информация" icon="mdi-information-outline" header-class="head")
			.mygrid
				.inf
					.label Производитель:
					.val {{ item.manufacturer }}
					.label Модель:
					.val {{ item.model }}
					.label Класс напряжения:
					.val {{ item.voltage }}
					.label Фазы:
					.val {{ item.phase }}
					.label Полюса:
					.val {{ item.polus }}
					.label Разрывы на полюс:
					.val {{ item.break }}
					.label Тип привода:
					.val {{ item.typP }}
					.label Тип ВВ:
					.val {{ item.typB }}
				.pic.text-right
					img(src="@/assets/img/image.svg")

		.tab ljklj
</template>

<style scoped lang="scss">
.mygrid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	background: white;
	align-items: center;
	padding: 1rem 3rem;
	border-top: 1px solid #dedede;
}

.inf {
	display: grid;
	grid-template-columns: auto 1fr;
	column-gap: 1rem;
	row-gap: .3rem;
}

:deep(.q-expansion-item--expanded) {
	background: white;
}

:deep(.head) {
	color: var(--primary);

	.q-item__label {
		text-transform: uppercase;
	}
}

.pic {
	img {
		opacity: .2;
		height: 230px;
	}
}
</style>
