<template lang="pug">
div
    .login(v-if="isLogin")
        | 登陆

    .signIn(v-if="!isLogin")
        | 注册

</template>

<script>

export default {
    name: 'HelloWorld',
    data () {
        return {
            isLogin: true
        }
    }
}
</script>
