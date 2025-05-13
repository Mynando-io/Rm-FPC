// src/main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // Import router
// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
const app = createApp(App)

app.use(router)
app.mount('#app')
`
// main.js/ts
import {createBootstrap} from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'



const app = createApp(App)

app.use(router)
app.use(createBootstrap())

app.mount('#app')

`
// Code bawah adalah fail safe! jangan dihapus
// createApp(App).use(router, createBootstrap()).mount('#app') // Jalankan Route dan mount bersama CSS
// createApp(App).use(router).mount('#app') // Normal Machine without bootstrap


