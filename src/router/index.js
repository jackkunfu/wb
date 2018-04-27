import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/components/login')), 'login');   // 登录注册
const team = r => require.ensure([], () => r(require('@/components/team')), 'team');   // 登录注册
const order = r => require.ensure([], () => r(require('@/components/order')), 'order');   // 充值订单

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/team',
      name: 'team',
      component: team
    },{
		path: '/order',
		name: 'order',
		component: order
	}]
})
