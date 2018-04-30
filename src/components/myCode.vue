<template lang="pug">
div 
	img()
    

</template>

<script>
export default {
	name: 'HelloWorld',
    data () {
        return {
			
        }
    },
    mounted(){
		this.orderId = this.$route.query.id;
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

