import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import LogIn from './components/LogIn.vue'

Vue.config.productionTip = false
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
  ]
})

new Vue({
  render: h => h(App),
}).$mount('#app')
