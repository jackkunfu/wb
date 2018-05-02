<template lang="pug">
div.my-team
    .team-1(v-for="(item1,i) in teamList" @click="getData(item1.userId,1,i)")
        p.msg-1
            span.name1(value="item1.userId") {{item1.nikeName}}
            span.grade1 二级
            span.right {{item1.mobile}}
        .team-1(v-for="(item2,i2) in item1.children")
            p.msg-1
                span.name1 {{item2.nikeName}}
                span.grade1 三级
                span.right {{item2.mobile}}
            .team-1(v-for="(item3,i3) in item2.children")
                p.msg-1
                    span.name1(value='21') {{item3.nikeName}}
                    span.grade1 四级
                    span.right {{item3.mobile}}

</template>

<script>
 import Vue from 'vue' 
// $(function(){
    
//     $('.team-1').click(function(e){
//         alert(111)
//         $(this).children('.msg-1').children('.name1').toggleClass('active');
//         var a = $(this).children('.msg-1').children('.name1').hasClass('active');
//         if(a) {
//             $(this).children('.team-1').show()
//         }
//         if(!a) $(this).children('.team-1').hide();
//         e.stopPropagation();
//     })
// })
    
export default {
    name: 'mTeam',
    data () {
        return {
            show: false,
            teamList: [
                // {
                //     name: '李四',
                //     mobile: 1366666666,
                //     grade: '二级',
                //     children: [
                //         {
                //             name:'王五',
                //             mobile:13777777777,
                //             grade: '三级',
                //             children: [
                //                 {name: '赵六',mobile: 13888888888,grade: '四级',},
                //                 {name: '赵六',mobile: 13888888888,grade: '四级',},
                //             ]
                //         },{
                //             name:'王五',
                //             mobile:13777777777,
                //             grade: '三级',
                //             children: [
                //                 {name: '赵六',mobile: 13888888888,grade: '四级',},
                //                 {name: '赵六',mobile: 13888888888,grade: '四级',},
                //             ]
                //         }
                //     ]
                // },
                // {
                //     name: '李四',
                //     mobile: 1366666666,
                //     grade: '二级',
                //     children: [
                //         {
                //             name:'王五',
                //             mobile:13777777777,
                //             grade: '三级',
                //             children: [
                //                 {name: '赵六',mobile: 13888888888,grade: '四级',},
                //                 {name: '赵六',mobile: 13888888888,grade: '四级',},
                //             ]
                //         },{
                //             name:'王五',
                //             mobile:13777777777,
                //             grade: '三级',
                //             children: [
                //                 {name: '赵六',mobile: 13888888888,grade: '四级',},
                //                 {name: '赵六',mobile: 13888888888,grade: '四级',},
                //             ]
                //         }
                //     ]
                // }
            ]
        }
    },
    mounted(){
        this.list();
        console.log(this.$route.query.data)
    },
    methods: {
        async getData(id,lay,i){
            alert(134)
            var res = await this.ajax('/api/team/list', { userId: id });
            if(res && res.status == 200) Vue.set(this.teamList[i], 'children', res.data);
            console.log(this.teamList);
            
            
            // this.teamList.forEach(v=>{
            //     if(v.userId==id) v.children = res.data;
                
            //     console.log(this.teamList);
            // });
            if(lay==1){
                alert(22)
                $('.my-team').children('.team-1').eq(i).children('.msg-1').children('.name1').toggleClass('active');
                var a = $('.my-team').children('.team-1').eq(i).children('.msg-1').children('.name1').hasClass('active');
                alert(a)
                if(a) {
                    $('.my-team').children('.team-1').eq(i).children('team-1').show()
                }
                if(!a) $('.my-team').children('.team-1').eq(i).children('team-1').hide();
            }
            

        },
        async list(){
            var res = await this.ajax('/api/team/list', { userId: this.$route.query.data });
            if(res && res.status == 200){
                if(res.data.length != 0) this.teamList = res.data;
                console.log('this.teamList')
                console.log(this.teamList)
            }
        }
        
    },
    watch:{
        
    }
}
</script>
<style lang="sass" scoped>
.team-1
    &.active
        >.team-1
            display: block;
    >.team-1
        display: none;

.my-team
    text-align: left;
    font-size: 0.4rem;
    .team-1
        .msg-1
            padding: 0.5rem 0.5rem;
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

