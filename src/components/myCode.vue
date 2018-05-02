<template lang="pug">
div 
	img(:src="imgSrc")
    
</template>

<script>
export default {
	name: 'myCode',
    data () {
		var usetId = this.$route.query.id;
        return {
			usetId,
			imgSrc: '/api/team/qrcode/'+this.usetId
        }
    },
    mounted(){
		// this.getCode();
	},
	methods: {
		async getCode(){
			this.imgSrc = '/api/team/qrcode/'+this.usetId;
			// var res = await this.ajax('/api/team/qrcode/'+this.usetId,{},'get');
			// if(res && res.status==200){
			// 	this.imgSrc = res.model;
			// }
		}
	}
}
</script>
<style lang="sass" scoped>
	img
		width: 6rem;
		height: 6rem;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		min-width: 3rem;
		max-width: 10rem;
		text-align: center;
</style>

