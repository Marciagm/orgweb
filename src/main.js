import Vue from 'vue'
import VueRouter from 'vue-router'
//import routes from './routes'
import { routes } from './routes'
import App from './App'


console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);

Vue.use(VueRouter);
// index of gmgm
const router = new VueRouter({
	routes,
	scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    	return {x: 0, y:0}
    }
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')