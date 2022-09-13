import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'
import components from '@/components/UI/index.js'
import store from '@/store'

const app = createApp(App)
components.forEach(component => {
  app.component(component.name, component)
});

app.use(store);

app.mount('#app')
