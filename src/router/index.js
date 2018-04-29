import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/components/login')), 'login');   // 登录注册
const team = r => require.ensure([], () => r(require('@/components/team')), 'team');   // 登录注册
const order = r => require.ensure([], () => r(require('@/components/order')), 'order');   // 充值订单
const phoneFare = r => require.ensure([], () => r(require('@/components/phoneFare')), 'phoneFare');   // 充值话费页面
const vipCenter = r => require.ensure([], () => r(require('@/components/vipCenter')), 'vipCenter');   // 会员中心
const setUp = r => require.ensure([], () => r(require('@/components/setUp')), 'setUp');   // 设置
const aboutUs = r => require.ensure([], () => r(require('@/components/aboutUs')), 'aboutUs');   // 设置

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
	},{
		path: '/phoneFare',
		name: 'phoneFare',
		component: phoneFare
	},{
		path: '/vipCenter',
		name: 'vipCenter',
		component: vipCenter
	},{
		path: '/setUp',
		name: 'setUp',
		component: setUp
	},{
		path: '/aboutUs',
		name: 'aboutUs',
		component: aboutUs
	}]
})
