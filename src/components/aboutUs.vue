<template lang="pug">
div.about-us
	div 《快腾通快充平台服务协议》（以下简称“本协议”）由您与快腾通快充共同缔结，本协议具有合同效力。为使用快腾通快充平台的服务，您应当阅读并遵守本协议、请您务必审慎阅读、充分理解各条款内容，特别是免除或者减轻我们责任的条款、管辖与法律适用条款，以及开通或使用某项服务的单独协议。限制、免责条款可能用文字形式提示您注意。除非您已阅读并接受本协议所有条款，否则您无权使用快腾通快充平台提供的服务。您使用快腾通快充的服务即视为您已阅读并同意上述协议的约束。如果您未满18周岁，请在法定监护人的陪同下阅读本协议，并特别注意未成年人使用条款。

	

</template>

<script>

export default {
	name: 'HelloWorld',
    data () {
        return {
			article: '遥忆有家，牵惹情怀，冷冬觅影，早随风儿吹拂，悄然遁隐，俏丽嫣然大地彤，百花开放姹紫红；盎然春意水润浓，惟见人间笑意融。'
        }
    },
    mounted(){
	},
	methods: {
		goOther(src){
			this.$router.push({path: src})
		}
	}
}
</script>
<style lang="sass" scoped>
.about-us
	font-size: 0.4rem;
	padding: 0.5rem;
	text-align: left;
</style>

