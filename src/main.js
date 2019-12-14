import Vue from 'vue'
import { MdCard, MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue'

Vue.use(MdCard)
Vue.use(MdButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
