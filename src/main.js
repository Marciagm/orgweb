import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
//import routes from './routes'
import { routes } from './routes'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'


console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);

Vue.use(VueRouter);
Vue.use(ElementUI);
// index of gmgm
const router = new VueRouter({
	routes
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')