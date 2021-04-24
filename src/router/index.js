import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/user/home'
import content from '@/views/content/content'
import date from '@/views/date/date'


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/content',
                    name: content,
                    component: content
                }, {
                    path: '/date',
                    name: date,
                    component: date
                }
            ]
        }
    ]
})

export default router