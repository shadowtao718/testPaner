import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/user/home'
import content from '@/views/content/content'
import Date from '@/views/date/date'
import Rout from '@/views/rout/rout'
import TestDemo from '@/views/test-demo/test-demo'
import Applit from '@/views/applit/applit'


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
                    name: 'content',
                    component: content
                }, {
                    path: '/date',
                    name: 'date',
                    component: Date
                }, {
                    path: '/rout',
                    name: 'rout',
                    component: Rout
                },
                {
                    path: '/testDemo',
                    name: 'testDemo',
                    component: TestDemo
                }, {
                    path: '/applit',
                    name: 'applit',
                    component: Applit
                }
            ]
        }
    ],
    mode: 'history'
})

export default router