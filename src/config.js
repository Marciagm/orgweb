import Index from '@/pages/Index'
import Product from '@/pages/Product'
import Solution from '@/pages/Solution'
import News from '@/pages/News'
import AboutUs from '@/pages/AboutUs'
import JoinUs from '@/pages/JoinUs'

const routers = [
	{
		name: '首页',
		path: '/',
		index: 0,
		component: Index,
		bg: 'rgba(0, 0, 0, 0.15)'
	},
	{
		name: '产品概述',
		path: '/product',
		index: 1,
		component: Product 
	}, 
	{
		name: '解决方案',
		path: '/solution',
		index: 2,
		component: Solution
	},
	/*{
		name: '新闻动态',
		path: '/news',
		component: News
	},*/
	{
		name: '关于我们',
		path: '/about-us',
		index: 3,
		component: AboutUs
	}, 
	{
		name: '加入我们',
		index: 4,
		path: '/join-us',
		component: JoinUs 
	}
];


export { routers };