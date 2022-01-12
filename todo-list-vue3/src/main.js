import { createApp } from 'vue'
import App from './App.vue'
import borderBoxSizing from './css/borderBoxSizing.css'
import resetCSS from './css/reset.css'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(resetCSS)
  .use(borderBoxSizing)
  .use(router)
  .mount('#app')
