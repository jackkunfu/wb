<template lang="pug">
div.order-page
	.order-list(v-for="(item,i) in listArr")
		.order-name
			span.left {{item.name}}
			span.right {{item.time | timeAll}}
		.order-msg
			p.order-mobile 手机号：
				span  {{item.mobile}}
			p  金额：
				span {{item.money}}
			p 佣金：
				span {{item.commision}}
			p 支付状态：
				span(:class="{active: !item.payStatus}")  {{item.payStatus | pay}}

	.none(v-if="listArr.length == 0") 暂无

</template>

<script>

export default {
	name: 'cashRecd',
    data () {
		var token = this.$route.query.token;
        return {
			token,
            listArr: [
                // {
                //     name:'张三',
				// 	mobile: '13333333333',
				// 	time: 1524831951993,
				// 	money: 100,
				// 	commision: 10,
				// 	payStatus: true
				// },
				// {
                //     name:'李四',
				// 	mobile: '13333333333',
				// 	time: 1524831951993,
				// 	money: 100,
				// 	commision: 10,
				// 	payStatus: false
				// },
				// {
                //     name:'张三',
				// 	mobile: '13333333333',
				// 	time: 1524831951993,
				// 	money: 100,
				// 	commision: 10,
				// 	payStatus: true
                // }
            ]
        }
    },
    mounted(){
		this.list();
	},
	methods: {
		async list(){
			var url = '/api/withdraw/list/'+this.token;
			var res = await this.ajax(url, {});
			if(res && res.status == 200){
				this.listArr = res.data;
			}
		}
	}
}
</script>
<style lang="sass" scoped>
.order-mobile
	margin-bottom: 0.4rem;
.order-page
	background: #F8F8F8;
	font-size: 0.3rem;
	color: #888888;
	span
		font-size: 0.44rem;
		color: #2B2B2B;
		&.active
			color: #E03F46;
		&.right
			font-size: 0.3rem;
			color: #888888;
	.order-list
		background: #fff;
		margin-bottom: 0.5rem;
		div
			padding: 0.4rem 0.5rem;
		.order-name
			overflow: hidden;
			border-bottom: 1px solid #F8F8F8;
		.order-msg
			p
				display: inline-block;
				width: 50%;
				text-align: left;
				span
					font-weight: 500
</style>

