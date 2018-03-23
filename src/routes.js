import { routers } from '@/config'
import Index from '@/pages/Index'

const routes = routers.concat([{
	name: '首页',
	path: '/index',
	component: Index
}])

export { routes }