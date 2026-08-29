import axios from '@/plugins/axios'
import type { Calculation } from '@/Types/calculation'

export function getCurrentUser() {
    return axios.get('/home').then(response => response.data)
}

export function getProfile() {
    return axios.get('/home/profile').then(response => response.data)
}

export function getHistory() {
    return axios.get('/home/history').then(response => response.data)
}

export function addCalculation(data: Calculation) {
    return axios.post('/home/calculation', data).then(response => response.data)
}
