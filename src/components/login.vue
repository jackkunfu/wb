<template lang="pug">

    .enroll
        .login(v-if="isLogin")
            .box
                .label 用户名
                input(v-model="userName")

            .box
                .label 密码
                input(v-model="password")

        .signIn(v-else="")

</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                isLogin: true,
                userName: '',
                password: ''
            }
        },
        mounted(){
            this.messageTip('123', true)
        }
    }
</script>

<style lang="sass" scoped>
.enroll
    padding: 0.6rem 0.35rem;
    text-align: left;

    .box
        width: 100%;
        height: 1.28rem;
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 0.2rem;
        color: #888;
        margin-bottom: 0.4rem;
        font-size: 0.4rem;
        
        .label
            width: 2.5rem;
            line-height: 0.88rem;
            float: left;

        input
            height: 0.88rem;
            border: none;
            &:focus
                outlet: none;

input
    border: none;

.button
    background: red;
    
</style>

