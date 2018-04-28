<template lang="pug">

    .enroll
        .login(v-if="!isFogt && !isZhuce")
            .box
                .label 用户名
                input(v-model="login.userName" placeholder="请输入用户名")

            .box
                .label 密码
                input(v-model="login.password" type="password" placeholder="请输入密码")

            .btn 登陆

            .left(@click="isFogt=true;isZhuce=false;") 找回密码
            .right.theme-color(@click="isZhuce=true;isFogt=false;") 免费注册

        .sign-in(v-if="isZhuce")
            .box
                .label 手机号
                input(v-model="zhuce.userName" placeholder="请输入用户名")
            .box
                .label 验证码
                input(v-model="zhuce.userName" placeholder="请输入用户名")
            .box
                .label 设置密码
                input(v-model="zhuce.userName" placeholder="请输入用户名")
            .box
                .label 确认密码
                input(v-model="zhuce.userName" placeholder="请输入用户名")
            .box
                .label 昵称
                input(v-model="zhuce.userName" placeholder="请输入用户名")
            .box
                .label 推荐人ID
                input(v-model="zhuce.userName" placeholder="请输入用户名")

            .btn 注册

            .left(@click="isFogt=true;isZhuce=false;") 找回密码
            .right.theme-color(@click="isZhuce=isFogt=false;") 已有账号登陆


        .foft(v-if="isFogt")
            .box
                .label 用户名
                input(v-model="login.userName" placeholder="请输入用户名")

            .btn 重置密码

            .left(@click="isZhuce=true;isFogt=false;") 免费注册
            .right.theme-color(@click="isZhuce=isFogt=false;") 已有账号登陆

</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                isZhuce: false,
                isFogt: false,
                login: {
                    userName: '',
                    password: '',
                },
                fogt: {

                },
                zhuce: {

                }           
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
    font-size: 0.45rem;

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

    .sign

    
</style>

