const routers = [
	{
		name: '首页',
		path: '/',
		index: 0,
		bg: 'rgba(0, 0, 0, 0.15)'
	},
	{
		name: '产品概述',
		path: '/product',
		index: 1
	}, 
	{
		name: '应用领域',
		path: '/field',
		index: 2
	},
	/*{
		name: '新闻动态',
		path: '/news',
		//component: News
	},*/
	{
		name: '关于我们',
		path: '/about-us',
		index: 3
	}, 
	{
		name: '加入我们',
		index: 4,
		path: '/join-us'
	}
];


export { routers };