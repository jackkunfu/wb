<template lang="pug">
div.phone-fare
	.pay-advert(v-if="isAdvert")
		.advert-bg
			i(@click="isAdvert=false")
			.advert-title {{advertMsg.title}}
			.advert-content {{advertMsg.subTitle}}
	.pay-mobile
		input(type="number" v-model="mobile")
	.pay-money
		.pay-title 请选择充值面额
		.pay-card(@click="payCard(i,item.id,item.image)" v-for="(item, i) in payList")
				.money-title {{item.title}}
				p 售价:{{item.price}}元
	.pay-line 	
	.pay-type
		.pay-title 选择支付方式
		p(@click="payType=1")
			span.pay-wx 微信支付
			span.right(:class="{active: payType==1}")
		p(@click="payType=2")
			span.pay-qb 钱包支付
			span.right(:class="{active: payType==2}")
		button(@click="goPay") 立即充值
	.pay-img(v-if="isImg")
		i.del-img(@click="isImg=false")
		img(:src="payImg")


</template>

<script>

export default {
	name: 'HelloWorld',
    data () {
		var query = this.$route.query;
        return {
			token: query.token,
			mobile: query.data,
            payList: [
				// {total: 30, price: 29.99, id: 11},
				// {total: 30, price: 29.99, id: 12},
				// {total: 30, price: 29.99, id: 13},
				// {total: 30, price: 29.99, id: 14}
			],
			advertMsg: {
			},
			payType: 0,
			payId: '',
			payImg: '', // 微信支付的二维码
			isImg: false, // 微信支付二维码
			isAdvert: true, // 广告
        }
    },
    mounted(){
		console.log(this.$route.query);
		this.getList();
		this.getAdvert();
    },
	methods: {
		// 获取广告信息
		async getAdvert(){
			var res = await this.ajax('/api/ad/payad',{},'get');
			if(res && res.status==200) this.advertMsg = res.data;
			console.log(this.advertMsg)
		},
		// 获取话费列表
		async getList(){
			var res = await this.ajax('/api/item/list',{},'get');
			if(res && res.status==200){
				this.payList = res.data;
				console.log(this.payList)
				this.payImg = this.payList[0].image;
				console.log(this.payImg)
			} 

		},
		// 选择支付金额
		payCard(v,id,img){
			this.payId = id;
			this.payImg = img;
			$('.pay-money').children('.pay-card').removeClass('active');
			$('.pay-money').children('.pay-card').eq(v).addClass('active');
		},
		// 去支付
		async goPay(){
			if( !(/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.mobile.trim())) ) return this.messageTip('手机号格式有误~');
			if(this.payType===0) return this.messageTip('请选择支付方式~');
			if(this.payId=='') return this.messageTip('请选择充值金额~');
			var resUrl = this.payType === 1 ? '/api/order/createOrder/' : '/api/order/pay/';
			var res = await this.ajax(resUrl+this.token, {
				// token: this.token,
				itemId: this.payId,
				phone: this.mobile.trim()
			});
			if(res && res.status==200) {
				if(this.payType===1) this.isImg = true;
				if(this.payType===2) this.messageTip('支付成功~',true)
			};
			
			
		}
	},
}
</script>
<style lang="sass" scoped>
.phone-fare
	height: 100%;
.pay-img,.cash-box
	width: 100%;
	height: 100%;
	background: rgba(238,238,238,0.9);
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
	img
		width: 80%;
		height: 80%;
		position: relative;
		top: 10%;
.pay-advert
	width: 100%;
	height: 100%
	position: fixed;
	vertical-align: middle;
	z-index: 10;
	
	.advert-bg
		width: 80%;
		// height: 100%;
		background: url(../img/bg.png) no-repeat;
		background-size: 100%;
		margin: 0 auto;
		padding-top: 0.8rem;
		color: #fff
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		// top: 50%

		


		// margin: -8rem -4rem;
		i
			display: inline-block;
			width: 1rem;
			height: 1rem;
			background: url(../img/delete@2x.png) no-repeat;
			background-size: 0.5rem;
			position: absolute;
			right: 0
			top: 0.3rem;
		.advert-title
			font-size: 0.7rem;
			font-weight: 600;
		.advert-content
			padding: 0 1rem;
			font-size: 0.44rem;
			line-height: 0.7rem;
			margin-top: 4rem;
			text-align: left;
			



.phone-fare
	width: 100%;
	height: 100%;
	text-align: left;
	background: #fff;
	.pay-mobile, .pay-money, .pay-type
		padding: 0.5rem 0.5rem;
		background: #fff;
	.pay-mobile
		border-bottom: 1px solid #F8F8F8;
		input
			font-size: 0.55rem;
	.pay-line
		width: 100%;
		height: 0.5rem;
		background: #f9f9f9;
	.pay-money
		// margin-right: -0.33rem;
		margin-bottom: 0.65rem;
		.pay-card
			width: 30%;
			display: inline-block;
			text-align: center;
			padding: 0.2rem 0;
			border: 1px solid #FE4C0C;
			border-radius: 5px;
			color: #FE4C0C;
			margin-top: 0.5rem;
			margin-right: 0.48rem;
			opacity: 0.5;
			&:nth-child(4)
				margin-right: 0;
			&.active
				background: #FE4C0C;
				color: #fff;
				opacity: 0.5;
			.money-title
				font-size: 0.55rem;
			p
				font-size: 0.4rem;
	.pay-type
		p
			font-size: 0.44rem;
			height: 1.7rem;
			line-height: 1.7rem;
			border-bottom: 1px solid #F8F8F8;
			margin: 0 -0.5rem;
			padding: 0 0.5rem;
			.right
				position: relative;
				top: 40%;
				width: 0.5rem;
				height: 0.5rem;
				border: 1px solid #ECECEC;
				border-radius: 0.5rem;
				&.active
					background: url(../img/choose@3x.png) no-repeat;
					background-size: 0.5rem;
					border: none;
			.pay-wx,.pay-qb
				padding-left: 0.6rem;
			.pay-wx
				background: url('../img/wxzf@3x.png') no-repeat;
				background-size: 0.5rem;
			.pay-qb
				background: url('../img/qbzf@3x.png') no-repeat;
				background-size: 0.5rem;
		button
			width: 100%;
			height: 1.2rem;
			line-height: 1.2rem;
			background: #FE4C0C;
			border-radius: 4px;
			border: none;
			margin-top: 2rem;
			color: #FDCFBE;
			border: none;
			
	.pay-title
		font-size: 0.3rem;
		color: #888888;
</style>

