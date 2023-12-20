import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import axios from 'axios'
import ClickOutside from './utils/ClickOutsideDirective'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// import "@/plugins/myComponents";
import globalComponents from './plugins/myComponents'

const vuetify = createVuetify({
  components,
  directives,
})

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/index.scss'

const app = createApp(App)
app.provide('$axios', axios)
createApp(App).use(ElementPlus).use(vuetify).use(router).use(globalComponents).mount('#app')
app.directive('click-outside', ClickOutside)
