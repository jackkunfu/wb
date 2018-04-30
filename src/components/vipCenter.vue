<template lang="pug">
div.vip-center
	.vip-msg
		.vip-name
			img
			span {{userMsg.nikeName}}
		.total-money
			.money-num {{account.meney}}
				span 元
			span 收益统计(佣金)
		.vip-num
			div
				p {{account.countMeney}}
				p 账户余额(元)
			div
				p {{account.vipNo}}
				p 会员编号
			div
				p {{account.openPeoPlo}}
				p 推广人数(人)
	.vip-nav
		.nav-list(v-for="(item,i) in navList" @click="goOther(item.query,item.params)")
			.nav-name 
				img(:src='item.url')
				span {{item.name}}

</template>

<script>

export default {
	name: 'HelloWorld',
    data () {
		var token = this.$route.query.tb_tk;
        return {
			userMsg: '',
			userId: '',
			token,
           	navList: [
			   {url: require('../img/team@3x.png'),name:'我的团队',query: '/order',params:''},
			   {url: require('../img/erweima@3x.png'),name:'我的二维码',query: '/myCode',params:''},
			   {url: require('../img/hd@3x.png'),name:'话费活动专区',query: '/phoneFare',params:''},
			   {url: require('../img/order@3x.png'),name:'充值订单',query: '/order',params:true},
			   {url: require('../img/order_02@3x.png'),name:'下级充值订单',query: '/order',params:false},
			   {url: require('../img/record@3x.png'),name:'提现金额',query: '/order',params:''},
			   {url: require('../img/set@3x.png'),name:'设置',query: '/setUp',params:''},
			],
			account: {
				countMeney: '',
				meney: '',
				nikeName: '',
				openPeoPlo: '',
				vipNo: ''
			}   
        }
    },
    mounted(){
		console.log(this.$route.query)
		this.userMsg = JSON.parse(this.$route.query.tb_userInfo);
		this.userId= this.userMsg.id;
		console.log(this.userId)
		this.getMsg();
	},
	methods: {
		// 获取页面信息
		async getMsg(){
			var res = await this.ajax('/api/vip/home/'+this.token,{},'get');
			if(res && res.status == 200){
				this.account = res.data;
			}
			
		},
		goOther(src,data){
			if(data==='') data = this.userId;
			this.$router.push({path: src, query:{id:data}});
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

