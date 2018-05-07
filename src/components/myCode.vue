<template lang="pug">
div.my-code 
	img(:src="imgSrc")
    
</template>

<script>
export default {
	name: 'myCode',
    data() {
		var userId = this.$route.query.id;
        return {
			userId,
			imgSrc: '/api/team/qrcode?userId='+ this.$route.query.id
        }
    },
    mounted(){
		// this.getCode();
		console.log(this.$route.query.id);
	},
	methods: {
		async getCode(){
			this.imgSrc = '/api/team/qrcode?userId='+ this.$route.query.id;
			// var res = await this.ajax('/api/team/qrcode/'+this.usetId,{},'get');
			// if(res && res.status==200){
			// 	this.imgSrc = res.model;
			// }
		}
	}
}
</script>
<style lang="sass" scoped>
.my-code
	width: 100%;
	height: 100%;
	background: url(../img/code-bg.jpg) no-repeat;
	background-size: 100%;
	img
		width: 6rem;
		height: 6rem;
		position: fixed;
		left: 50%;
		top: 57%;
		transform: translate(-50%,-50%);
		min-width: 3rem;
		max-width: 10rem;
		text-align: center;
</style>

