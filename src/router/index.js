import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../pages/home'
import exam from '../pages/examl'
import success from '../components/success'
import suc from '../components/suc'
import fenlei from '../pages/fenlei'
import fen1 from '../components/fen1'
import cart from '../pages/trade'
import me from '../pages/me'
import address from '../components/beijing'
import d1 from '../components/d1'
import d2 from '../components/d2'
import d3 from '../components/d3'
import d4 from '../components/d4'
import d5 from '../components/d5'
import d6 from '../components/d6'
import v1 from '../components/v1'
import vv1 from '../components/vv1'
import m1 from '../components/m1'
import m2 from '../components/m2'
import m3 from '../components/m3'
import m4 from '../components/m4'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    {
      path: '/address',
      name: 'address',
      component: address
    },

    {
      path: '/d1',
      name: 'd1',
      component: d1
    },
    {
      path: '/d2',
      name: 'd2',
      component: d2
    },
    {
      path: '/d3',
      name: 'd3',
      component: d3
    },
    {
      path: '/d4',
      name: 'd4',
      component: d4
    },
    {
      path: '/d5',
      name: 'd5',
      component: d5
    },
    {
      path: '/d6',
      name: 'd6',
      component: d6
    },
    {
      path: '/v1',
      name: 'v1',
      component: v1
    },
    {
      path: '/vv1',
      name: 'vv1',
      component: vv1
    },
    {
      path: '/exam',
      name: 'exam',
      component: exam
    },
    {
      path: '/success',
      name: 'success',
      component: success
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/fen1',
      name: 'fen1',
      component: fen1
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/m1',
      name: 'm1',
      component: m1
    },
    {
      path: '/m2',
      name: 'm2',
      component: m2
    },
    {
      path: '/m3',
      name: 'm3',
      component: m3
    },
    {
      path: '/m4',
      name: 'm4',
      component: m4
    },
    {
      path: '/suc',
      name: 'suc',
      component: suc
    },

  ]
})
