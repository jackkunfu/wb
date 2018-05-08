<template lang="pug">
div.set-up
	div(v-for="(item,i) in setList" @click="goOther(item.src,item.data)")
		span.left {{item.name}}
		img(:src="item.url").right

    

</template>

<script>

export default {
	name: 'HelloWorld',
    data () {
        return {
			setList: [
				{url: require('../img/more@3x.png'),name:'修改密码',src:'/',data:{type:'isFogt',userId:this.$route.query.userId}},
				{url: require('../img/more@3x.png'),name:'关于我们',src:'/aboutUs',type:''},
			]
        }
    },
    mounted(){
		// console.log(this.$route.query.userId);
	},
	methods: {
		goOther(src,data){
			this.goUrl(src, data);
			// this.$router.push({path: src})
		}
	}
}
</script>
<style lang="sass" scoped>
.set-up
	width: 100%;
	height: 100%;
	background: #f9f9f9;
	font-size: 0.4rem;
	div
		height: 1.3rem;
		line-height: 1.3rem;
		padding: 0 0.5rem;
		background: #fff;
		margin-bottom: 0.1rem;
		img
			width: 0.2rem;
			position: relative;
			top: 0.5rem;
</style>

