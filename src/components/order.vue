<template lang="pug">
div.order-page
	.order-list(v-for="(item,i) in orderList")
		.order-name
			span.left {{item.name}}
			span.right {{item.time | timeAll}}
		.order-msg
			p.msg-top
				span 手机号： {{item.mobile}}
				span 金额：{{item.money}}
			p
				span 佣金： {{item.commision}}
				span 支付状态： 
					b(:class="{active: !item.payStatus}") {{item.payStatus | pay}}
    

</template>

<script>

export default {
	name: 'HelloWorld',
    data () {
        return {
            orderList: [
                {
                    name:'张三',
					mobile: '13333333333',
					time: 1524831951993,
					money: 100,
					commision: 10,
					payStatus: true

				},
				{
                    name:'李四',
					mobile: '13333333333',
					time: 1524831951993,
					money: 100,
					commision: 10,
					payStatus: false

				},
				{
                    name:'张三',
					mobile: '13333333333',
					time: 1524831951993,
					money: 100,
					commision: 10,
					payStatus: true

                },
            ]
        }
    },
    mounted(){
        this.messageTip('123', true)
    }
}
</script>
<style lang="sass" scoped>
.msg-top
	margin-bottom: 1rem;
.active
	color: #E03F46;
.order-page
	background: #F8F8F8;
	.order-list
		background: #eee;
		margin-bottom: 1rem;
		div
			padding: 0.8rem 1rem;
		.order-name
			overflow: hidden;
			border-bottom: 1px solid #F8F8F8;
		.order-msg
			span
				display: inline-block;
				width: 50%;
				text-align: left;
				b
					font-weight: 500
</style>

