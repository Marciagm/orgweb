import Vue from 'vue'
import VueRouter from 'vue-router'
//import routes from './routes'
import { routes } from './routes'
import App from './App'


console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);

Vue.use(VueRouter);
// index of gmgm
const router = new VueRouter({
	routes
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')