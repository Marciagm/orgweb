import { routers } from '@/config'
import Index from '@/pages/Index'

/*const routes = routers.concat([{
	name: '首页',
	path: '*',
	component: Index
}])*/
const routes = [
	{
		name: 'index',
		path: '/',
		component: () => import('@/pages/Index')
	},
	{
		name: '产品概述',
		path: '/product',
		component: () => import('@/pages/Product')
	},
	{
		name: '应用领域',
		path: '/field',
		component: () => import('@/pages/Field')
	},
	/*{
		name: '新闻动态',
		path: '/news',
		component: News
	},*/
	{
		name: '关于我们',
		path: '/about-us',
		component: () => import('@/pages/AboutUs')
	}, 
	{
		name: '加入我们',
		path: '/join-us',
		component: () => import('@/pages/JoinUs')
	},
	{
		name: '首页',
		path: '*',
		component: () => import('@/pages/Index')
	}
]
export { routes }