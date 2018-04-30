<template lang="pug">
div 
	img()
    

</template>

<script>
export default {
	name: 'HelloWorld',
    data () {
        return {
			usetId: '',
			imgSrc: ''
        }
    },
    mounted(){
		this.usetId = this.$route.query.id;
		this.getCode();
	},
	methods: {
		async getCode(){
			var res = await this.ajax('/api/team/qrcode/'+this.usetId,{},'get');
			if(res && res.status==200){
				this.imgSrc = res.model;
			}
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

