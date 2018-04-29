<template lang="pug">
div.my-team
    .team-1(v-for="(item1,i) in teamList" @click="chooceTeam")
        p.msg-1
            span.name1(:class="{active:show}") {{item1.name}}
            span.grade1 {{item1.grade}}
            span.right {{item1.mobile}}
        .team-1(v-for="(item2,i2) in item1.children" )
            p.msg-1
                span.name1 {{item2.name}}
                span.grade1 {{item2.grade}}
                span.right {{item2.mobile}}
            .team-1(v-for="(item3,i3) in item2.children")
                p.msg-1
                    span.name1(value='21') {{item3.name}}
                    span.grade1 {{item3.grade}}
                    span.right {{item3.mobile}}

</template>

<script>

export default {
    name: 'HelloWorld',
    data () {
        return {
            show: false,
            teamList: [
                {
                    name: '李四',
                    mobile: 1366666666,
                    grade: '二级',
                    children: [
                        {
                            name:'王五',
                            mobile:13777777777,
                            grade: '三级',
                            children: [
                                {name: '赵六',mobile: 13888888888,grade: '四级',},
                                {name: '赵六',mobile: 13888888888,grade: '四级',},
                            ]
                        },{
                            name:'王五',
                            mobile:13777777777,
                            grade: '三级',
                            children: [
                                {name: '赵六',mobile: 13888888888,grade: '四级',},
                                {name: '赵六',mobile: 13888888888,grade: '四级',},
                            ]
                        }
                    ]
                },
                {
                    name: '李四',
                    mobile: 1366666666,
                    grade: '二级',
                    children: [
                        {
                            name:'王五',
                            mobile:13777777777,
                            grade: '三级',
                            children: [
                                {name: '赵六',mobile: 13888888888,grade: '四级',},
                                {name: '赵六',mobile: 13888888888,grade: '四级',},
                            ]
                        },{
                            name:'王五',
                            mobile:13777777777,
                            grade: '三级',
                            children: [
                                {name: '赵六',mobile: 13888888888,grade: '四级',},
                                {name: '赵六',mobile: 13888888888,grade: '四级',},
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        chooceTeam(){
            this.show = this.show ? false : true;
            alert(this.show)
        }
    },
}
</script>
<style lang="sass" scoped>
.my-team
    text-align: left;
    font-size: 0.4rem;
    .team-1
        .msg-1
            padding: 0.3rem 0.5rem;
            border-bottom: 1px solid #eee;
            .name1
                padding: 0 0.3rem 0 0.6rem;
                background: url('../img/unfold_02@3x.png') no-repeat left;
                background-size: 0.4rem;
                &.active
                    padding: 0 0.3rem 0 0.6rem;
                    background: url('../img/pack@3x.png') no-repeat left;
                    background-size: 0.4rem;
            .grade1
                color: rgba(255,255,255,0.8);
                font-size: 0.3rem;
                padding: 0.05rem 0.1rem;
                background: #FD501B;
                border-radius: 0.2rem; 
        .team-1
            padding-left: 0.5rem;
        .team-1
            .grade1
                background: #FEAE53;
            .team-1
                .msg-1
                    padding-left: 0
                    .grade1
                        background: #F1C85A;
                    .name1
                        background: none;
    
            

        


</style>

