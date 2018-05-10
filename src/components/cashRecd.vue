<template lang="pug">
div.order-page
	.order-list(v-for="(item,i) in listArr")
		.order-name
			span.left {{mobile}}
			span.right {{item.created | timeAll}}
		.order-msg
			p  提现金额：
				span {{item.price}}
			p 提现状态：
				span(:class="{active: item.status==3}")  {{item.statusStr}}

	.none(v-if="listArr.length == 0") 暂无

</template>

<script>

export default {
	name: 'cashRecd',
    data () {
		var token = this.$route.query.token;
		var mobile = this.$route.query.mobile;
        return {
			token,
			mobile,
            listArr: [],
			page: 1,    // 当前页
			done: true,   //  请求是否完成
			isMore: true,
			statusList: {
				1: '申请',
				2: '同意',
				3: '拒绝',
				4: '完成',
			}
        }
    },
    mounted(){
		this.list();
		this.$nextTick(()=>{
			$(document).scroll(()=>{
				if($(document).height()-$(document).scrollTop()-$(window).height() == 0){
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
			var res = await this.ajax('/api/withdraw/list/'+this.token, { page: this.page, rows: 10 });
			if(res && res.status == 200){
				var data = res.data;
				if(concat) this.listArr = this.listArr.concat(data);
				else this.listArr = data;
				if(data.length < 10) this.isMore = false;
			}
			this.done = true;
			this.listArr.forEach(v=>{
				if(v.status) v.statusStr = this.statusList[v.status];
			})
			console.log('this.listArr')
			console.log(this.listArr)
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

