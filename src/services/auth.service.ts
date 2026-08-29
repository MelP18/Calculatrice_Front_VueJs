import axios from '@/plugins/axios'
import type { Login } from '@/Types/login'

export function signUp(data: { username: string; email: string; password: string }) {
    return axios.post('/auth/signup', data).then(response => response.data)
}

export function signIn(data: Login) {
    return axios.post('/auth/signin', data).then(response => response.data)
}

export function verifyCode(data: { email: string; code: string }) {
    return axios.post('/auth/verify-code', data).then(response => response.data)
}

export function forgotPassword(data: { email: string }) {
    return axios.post('/auth/forgot-password', data).then(response => response.data)
}

export function resetPassword(data: { email: string; code: string; password: string }) {
    return axios.post('/auth/reset-password', data).then(response => response.data)
}
