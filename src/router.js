import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import App from './App'
import Loginmalo from './components/Loginmalo'
import Home from './components/Home'
import Admin from './components/Admin'

import Login from './components/Login'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: Home
            },
            {
                path: '/admin',
                name: "admin",
                component: Admin
            },
            
            {
                path: '/login',
                name: "login",
                component: Login
            },
        ]
    })

export default router