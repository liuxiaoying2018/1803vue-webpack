import Main from '@/Main.vue'
import Footer from '@/Footer.vue'
import Home from '@/Home.vue'
import Category from '@/Category.vue'
import Cart from '@/Cart.vue'
import Me from '@/Me.vue'
import Phone from '@/Phone.vue'
import TV from '@/TV.vue'
import User from '@/User.vue'

import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)


const routes = [
    {
        path:'/',
        components:{
            default: Main,
            footer: Footer
        },
        children:[
            {
                path: '/',
                // name: 'Home',
                component: Home,
                children:[
                    {
                        path:'/',
                        name:'Phone',
                        component: Phone
                    },
                    {
                        path:'/tv',
                        name:'TV',
                        component: TV
                    }
                    
                ]
            },
            {
                path: '/category',
                name: 'Category',
                component: Category
            },
            {
                path: '/cart',
                name: 'Cart',
                component: Cart
            },
            {
                path: '/me',
                name: 'Me',
                component: Me
            }
        ]
    },
    {
        path:'/mpointsmall',
        name:'User',
        component: User
    }
]

export default new Router({
    mode: 'history',
    routes
  })
  