<template lang="pug">
div.vip-center
	.vip-msg
		.vip-name
			img
			span 张三
		.total-money
			.money-num 222
				span 元
			span 收益统计(佣金)
		.vip-num
			div
				p 89:00
				p 账户余额(元)
			div
				p 1222
				p 会员编号
			div
				p 10000
				p 推广人数(人)
	.vip-nav
		.nav-list(v-for="(item,i) in navList" @click="goOther(item.query,item.params)")
			.nav-name 
				img(:src='item.url')
				span {{item.name}}
		//- .nav-list 
		//- 	.nav-name 
		//- 		img(src='../img/erweima@3x.png')
		//- 		span 我的二维码
		//- .nav-list 
		//- 	.nav-name 
		//- 		img(src='../img/hd@3x.png')
		//- 		span 话费活动专区
		//- .nav-list 
		//- 	.nav-name 
		//- 		img(src='../img/order@3x.png')
		//- 		span 充值订单
		//- .nav-list 
		//- 	.nav-name 
		//- 		img(src='../img/order_02@3x.png')
		//- 		span 下级充值订单
		//- .nav-list 
		//- 	.nav-name 
		//- 		img(src='../img/record@3x.png')
		//- 		span 体现订单
		//- .nav-list 
		//- 	.nav-name 
		//- 		img(src='../img/set@3x.png')
		//- 		span 设置

    

</template>

<script>

export default {
	name: 'HelloWorld',
    data () {
        return {
           navList: [
			   {url: require('../img/team@3x.png'),name:'我的团队',query: '/order',params:''},
			   {url: require('../img/erweima@3x.png'),name:'我的二维码',query: '/order',params:''},
			   {url: require('../img/hd@3x.png'),name:'话费活动专区',query: '/order',params:''},
			   {url: require('../img/order@3x.png'),name:'充值订单',query: '/order',params:true},
			   {url: require('../img/order_02@3x.png'),name:'下级充值订单',query: '/order',params:false},
			   {url: require('../img/record@3x.png'),name:'体现金额',query: '/order',params:''},
			   {url: require('../img/set@3x.png'),name:'设置',query: '/order',params:''},
		   ]
        }
    },
    mounted(){
        this.messageTip('123', true)
	},
	methods: {
		goOther(src,data){
			this.$router.push({path: src, query:{id:data}})
		}
	},
}
</script>
<style lang="sass" scoped>
.vip-center
	font-size: 0.44rem;
	.vip-msg
		width: 100%;
		height: 6.4rem;
		background: url(../img/bg@2x.png) no-repeat;
		background-size: 100% 6.4rem;
		color: rgba(255,255,255,0.8);
		
		.vip-name
			text-align: left;
			padding-left: 0.6rem;
			height: 1.6rem;
			line-height: 1.6rem;
		.total-money
			.money-num
				font-size: 1.2rem;
				color: rgba(255,255,255,1);
				span
					font-size: 0.44rem;
					padding-left: 0.1rem;
		.vip-num
			position: relative;
			top: 1.3rem;
			div
				width: 30%;
				display: inline-block;
				p
					padding-top: 0.1rem;
	.vip-nav
		.nav-list
			width: 33.3%;
			height: 2.8rem;
			line-height: 2.8rem;
			display: inline-block;
			float: left;
			
			margin: 0 auto;
			border: 1px solid #eee;
			border-left: none;
			border-top: none;
			.nav-name
				height: 100%;
				padding: 0.5rem 0;
				img
					display: block;
					width: 0.8rem;
					margin: 0 auto;
				span
					position: relative;
					top: -0.7rem;
			

				
			
</style>

