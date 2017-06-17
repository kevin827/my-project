// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router'
import "./components/lib/setfontsize.js"
/*import store from "./store"*/
import App from "./App"
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
import Swiper from "swiper"

//import "swiper/dist/js/swiper.js"
import "swiper/dist/css/swiper.css"
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUI)
/*console.log(Swiper)
Vue.use(Swiper)*/

Vue.prototype.$swiper=Swiper
Vue.config.productionTip = false
/* eslint-disable no-new */
const router=new VueRouter({
  linkActiveClass:'high',
  routes
})
/*第一种*/
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})







//第二种写法

/*new Vue({
  router
}).$mount('#app')*/


//第三种写法
/* new Vue({
     el:"#app",
     store,
     render:h=>h(App)
 })*/
