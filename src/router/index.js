import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import PageBox from '@/components/pagebox'
import NavHeader from '@/components/newheader'
import NavContent from '@/components/newcontent'
import NavFooter from '@/components/newfooter'
import MengBan from '@/components/mengban'


// import Three from 'vue-three'
Vue.use(Router)
// Vue.use(Three)

export default new Router({
  // mode: 'history',
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      name: 'pagebox',
      component: PageBox
    },
    {
      path: '/newheader',
      name: 'newheader',
      component: NavHeader
    },
    {
      path: '/newcontent',
      name: 'newcontent',
      component: NavContent,

    },
    {
      path: '/newooter',
      name: 'newfooter',
      component: NavFooter
    },
    {
      path: '/mengban',
      name: 'mengban',
      component: MengBan
    },
  ]
})
