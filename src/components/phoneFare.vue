<template lang="pug">
div.phone-fare
	.pay-mobile 1330000001
	.pay-money
		.pay-title 请选择充值面额
		.pay-card(@click="payCard(i,item.id)" v-for="(item, i) in payList")
				.money-title {{item.total}}元
				p 售价:{{item.price}}元
		
	.pay-type
		.pay-title 选择支付方式
		p(@click="payType=1")
			span.pay-wx 微信支付
			span.right(:class="{active: payType==1}")
		p(@click="payType=2")
			span.pay-qb 钱包支付
			span.right(:class="{active: payType==2}")
		button(@click="goPay") 立即充值
		
		
    

</template>

<script>

export default {
	name: 'HelloWorld',
    data () {
        return {
            payList: [
				{total: 30, price: 29.99, id: 11},
				{total: 30, price: 29.99, id: 12},
				{total: 30, price: 29.99, id: 13},
				{total: 30, price: 29.99, id: 14},
			],
			payType: 0,
			payId: '',
        }
    },
    mounted(){
    },
	methods: {
		// 选择支付金额
		payCard(v,id){
			this.payId = id;
			$('.pay-money').children('.pay-card').removeClass('active');
			$('.pay-money').children('.pay-card').eq(v).addClass('active');
		},
		// 去支付
		goPay(){
			if(this.payType===0) {
				alert('请选择支付方式');
				return
			};
			if(this.payId=='') {
				alert('请选择充值金额');
				return
			};
			alert(this.payType);
			alert(this.payId);
		}
	},
}
</script>
<style lang="sass" scoped>
.phone-fare
	width: 100%;
	text-align: left;
	background: #F8F8F8;
	.pay-mobile,.pay-money,.pay-type,
		padding: 0.5rem 0.5rem;
		background: #fff;
	.pay-mobile
		font-size: 0.55rem;
		border-bottom: 1px solid #F8F8F8;
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
			

			


				
				
			

	.pay-title
		font-size: 0.3rem;
		color: #888888;
</style>

