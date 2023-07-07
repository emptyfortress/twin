<script setup lang="ts">
import { ref } from 'vue'
import Drawer from '@/components/Drawer.vue'
import RDrawer from '@/components/RDrawer.vue'

const leftDrawer = ref(true)
const rightDrawer = ref(false)

const toggleLeftDrawer = () => {
	leftDrawer.value = !leftDrawer.value
}

const toggleRightDrawer = () => {
	rightDrawer.value = !rightDrawer.value
}
</script>

<template lang="pug">
q-layout(view='hHh LpR fFf')
	q-header.head
		q-toolbar
			q-btn(dense flat round icon='mdi-menu' @click='toggleLeftDrawer')
			img(src="@/assets/img/twin.svg")
			q-toolbar-title Цифровой двойник
			q-btn(dense flat round icon='mdi-menu' @click='toggleRightDrawer')

	Drawer(v-model="leftDrawer")
	RDrawer(v-model="rightDrawer")

	q-page-container
		router-view(v-slot="{ Component, route }")
			transition(:name="route.meta.transition || 'fade'" mode="out-in")
				component(:is="Component")

</template>

<style scoped lang="scss">
.head {
	color: var(--text-bright);
	background: rgba(0, 0, 0, 0.07);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);

	img {
		margin-left: 2rem;
		width: 32px;
	}
}
</style>
