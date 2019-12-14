import Vue from 'vue'
import { MdCard, MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
 
Vue.use(MdCard)
Vue.use(MdButton)
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
