import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'
import App from './App.vue'

import 'virtual:uno.css'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  app.use(pinia)
  return {
    app,
    pinia,
  }
}
