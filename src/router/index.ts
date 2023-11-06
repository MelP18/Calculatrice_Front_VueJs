import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import UserInterface from '@/views/user/UserInterface.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import ActivateAccountComponent from '@/views/ActivateAccount.vue'
import UserLayout from '@/layout/UserLayout.vue'
import AuthLayout from '@/layout/AuthLayout.vue'
import Profile from '@/views/user/Profile.vue'
import Logout from '@/views/user/Logout.vue'
import Historique from '@/views/user/Historique.vue'
import ErrorPage from '@/views/ErrorPage.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/',
            name: 'auth',
            component:AuthLayout,
            children: [
                {
                    path: '/signup',
                    name: 'Sign up',
                    component: SignUp
                },
                {
                    path: '/signin',
                    name: 'signin',
                    component: Login
                },
                {
                    path: '/activate-account',
                    name: 'activateAccount',
                    component: ActivateAccountComponent
                }
            ]
        },
        {
            path: '/:catchAll(.*)*',
            name: 'PageNotFound',
            component: ErrorPage
        },
        {
            path: '/user',
            name: 'UserInterface',
            component: UserLayout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: UserInterface,
                    /*  beforeEnter:[function blocked (to,from){
                         return ('/signup')
                       }], */
                }/* ,
                {
                    path: 'profile',
                    name: 'Profile',
                    component: Profile
                } */,
                {
                    path: 'logout',
                    name: 'Logout',
                    component: Logout
                },
                {
                    path: 'historique',
                    name: 'Historique',
                    component: Historique
                }
            ]
        }

    ]
})

export default router
