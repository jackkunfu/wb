<template lang="pug">
div.order-page
	div(v-if="!orderId")
		.order-list(v-for="(item,i) in orderList")
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

	div(v-if="orderId")
		.order-list(v-for="(item,i) in orderList")
			.order-name
				span.left {{item.name}}
				span.right {{item.time | timeAll}}
			.order-msg
				p.order-mobile 手机号：
					span  {{item.mobile}}
				p 金额：
					span {{item.money}}
				p 支付状态：
					span(:class="{active: !item.payStatus}")  {{item.payStatus | pay}}

	.none(v-if="orderList.length == 0") 暂无

</template>

<script>

export default {
	name: 'order',
    data () {
		var token = this.$route.query.token;
		var type = this.$route.query.type;
        return {
			type: !!type,
			token,
			orderId: true,      // true: 我的订单  false: 下级充值订单
            orderList: [
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
            ],
			page: 1,    // 当前页
			done: true,   //  请求是否完成
			isMore: true
        }
    },
    mounted(){
		this.list();
		this.$nextTick(()=>{
			$(document).scroll(()=>{
				if($(document).height()-$(document).scrollTop()-$(window).height == 0){
					this.page++;
					this.list(1);
				}
			})
		})
	},
	methods: {
		async list(concat){
			if(!this.isMore) return
			if(!this.done) return;
			this.done = false;
			var url = this.type ? '/api/order/my_order_list/' : '/api/order/child_order/';   // 0下级
			var type = this.type ? 'post' : 'get';
			var options = this.type ? { page: this.page, row: 10 } : {};
			var res = await this.ajax(url + this.token, options, type);
			if(res && res.status == 200){
				if(concat) this.orderList = this.orderList.concat(res.data);
				else this.orderList = res.data;
				console.log(this.orderList);
				console.log(this.orderList.length)
				if(res.data.length < 10) this.isMore = false;
			}
			this.done = true;
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

