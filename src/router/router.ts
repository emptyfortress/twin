import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

declare module 'vue-router' {
	interface RouteMeta {
		title: string
		transition: any
	}
}

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			// meta: { title: 'Admin console', bread: [{ label: 'Dashboard', to: '/' }] },
		},
		{
			path: '/switches',
			name: 'switches',
			component: () => import('@/pages/Switches.vue')
		},
		{
			path: '/item/:id',
			name: 'item',
			component: () => import('@/pages/Item.vue'),
			props: true,
			meta: {
				title: 'Выключатель',
				transition: 'page'
			},
		},
	],
})

const DEFAULT_TITLE = 'Цифровой двойник'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
