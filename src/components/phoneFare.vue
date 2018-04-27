<template lang="pug">
div.phone-fare
	.pay-mobile 1330000001
	.pay-money
		.pay-title 请选择充值面额
		.pay-card(v-for="(item, i) in payList")
			.money-title {{item.total}}元
			p 售价：{{item.price}}元
		
	.pay-type
		.pay-title 选择支付方式
		
    

</template>

<script>

export default {
	name: 'HelloWorld',
    data () {
        return {
            payList: [
				{total: 30, price: 29.99},
				{total: 30, price: 29.99},
				{total: 30, price: 29.99},
				{total: 30, price: 29.99},
			]
        }
    },
    mounted(){
        this.messageTip('123', true)
    }
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
		margin-right: -0.33rem;
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
			margin-right: 0.33rem;
			.money-title
				font-size: 0.55rem;
			p
				font-size: 0.4rem;
				
			

	.pay-title
		font-size: 0.3rem;
		color: #888888;
</style>

