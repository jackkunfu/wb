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
	.cash-box(v-if="isCash")
		.del-img(@click="isCash=false")
		.money-input
			input(type="number" v-model="money")
			button 提现

</template>

<script>

export default {
	name: 'HelloWorld',
    data () {
		var token = this.$route.query.tb_tk;
		var userMsg = JSON.parse(this.$route.query.tb_userInfo);
		console.log(userMsg)
		var id = userMsg.id;
		var mobile = userMsg.phone;
        return {
			userMsg,
			userId: '',
			token,
			isCash: false,
			money: '',
           	navList: [
			   {url: require('../img/team@3x.png'),name:'我的团队',query: '/myTeam',params:{id:id,token:token}},
			   {url: require('../img/erweima@3x.png'),name:'我的二维码',query: '/myCode',params:{id: id}},
			   {url: require('../img/hd@3x.png'),name:'话费活动专区',query: '/phoneFare',params:{ data: mobile, token: token }},
			   {url: require('../img/order@3x.png'),name:'充值订单',query: '/order',params:{ token: token, type: 1 }},
			   {url: require('../img/order_02@3x.png'),name:'下级充值订单',query: '/order',params:{ token: token, type: 0 }},
			   {url: require('../img/record@3x.png'),name:'提现金额',query: '',params:''},
			   {url: require('../img/set@3x.png'),name:'设置',query: '/setUp',params:{id: id}},
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
		this.getMsg();
		this.userId = JSON.parse(this.$route.query.tb_userInfo).id
		console.log(this.userId)
	},
	methods: {
		// 获取页面信息
		async getMsg(){
			var res = await this.ajax('/api/vip/home/'+this.token,{},'get');
			if(res && res.status == 200){
				this.account = res.data;
			}
		},
		goOther(src, data){
			if(src==='') this.isCash = true
			this.goUrl(src, data);

			// if(data==='') data = this.userId;
			// this.$router.push({path: src, query:{id:data}});
		}
	},
}
</script>
<style lang="sass" scoped>
.cash-box
	width: 100%;
	height: 100%;
	background: rgba(238,238,238,0.5);
	position: absolute;
	top: 0;
	text-align: center;
	.del-img
		width: 1rem;
		height: 1rem;
		background: url(../img/delete@2x.png) no-repeat;
		background-size: 0.7rem;
		position: absolute;
		right: 0
		top: 0.3rem;
	.money-input
		width: 80%;
		height: 40%;
		background: #fff;
		border-radius: 0.3rem;
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
			top: 0.8rem;
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

