 import './assets/base.css' 

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)
const pinia = createPinia()

app.use(router)

app.use(pinia)
app.use(VueAxios, axios)

app.use(Vue3Toastify, {
    autoClose: 3000,
  } as ToastContainerOptions);
app.mount('#app')
