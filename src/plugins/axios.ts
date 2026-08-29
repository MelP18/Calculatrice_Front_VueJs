import axios from 'axios'
import router from '@/router'

const baseApiURL = import.meta.env.VITE_BASE_URL
const TIMEOUT = import.meta.env.VITE_TIMEOUT;

const baseURL = {
    local: baseApiURL,
    timeout: TIMEOUT,
}

const axiosIns = axios.create({
    baseURL: baseURL.local,
    timeout: baseURL.timeout,
    headers: {},
})

/* Intercepter les requêtes pour l'ajout du token */
axiosIns.interceptors.request.use(function (config) {
    const token = localStorage.getItem('tokenUser') || sessionStorage.getItem('tokenUser')
    token ? config.headers.Authorization = `Bearer ${token}` : null
    return config
  }, function (error) {
    return Promise.reject(error)
  })

/* Intercepter les réponses pour les erreurs */
axiosIns.interceptors.response.use(function (response) {
    return response
  }, function (error) {
   if (error?.response?.status === 401) {
      localStorage.clear()
      router.push("/signin");
    }
    return Promise.reject(error)
  })
  
export default axiosIns
  