var baseUrl = '';
export default function(Vue){
    Vue.prototype.ajax = function(url, data, type){
        // $('#messageTip').remove();
        if($('#tip').length < 1){
            $('body').append('<div id="tip">加载中...</div>');
        }
        return new Promise(function(rs, rj){
            $.ajax({
                url: url.substring(0, 5) === '/api/' ? baseUrl + url : url,
                type: type || 'post',
                dataType: 'json',
                data: data
            }).done(function(data){
                rs(data);
            }).fail(e => {
                console.log(e);
            }).complete(()=>{
                $('#tip').remove()
            })
        })
    }
    
    Vue.prototype.goUrl = function(url, data){      // 路由跳转
        this.$router.push({
          path: url,
          query: data || {}
        })
    }

    Vue.prototype.messageTip = function(str, type){      // 提示  str  内容   type  控制展示对图片
        // $('#tip').remove();
        $('#messageTip').remove();
        var img = type ? 'ok.png' : 'nok.png';
        $('body').append(`<div id="messageTip"><img src="${img}" />${str}</div>`);
        // setTimeout( ()=> { $('#messageTip').remove(); }, 2000)
    }

    Vue.prototype.timeAll = function(t){     // 时间格式：2018-04-27 20:49:29
        var datetime = new Date(t);
        var year = datetime.getFullYear();
        var month = datetime.getMonth() + 1;
        var date = datetime.getDate();
        var hour = datetime.getHours();
        var minutes = datetime.getMinutes();
        var second = datetime.getSeconds();
        if (date < 10) { date = '0' + date };
        if (month < 10) { month = '0' + month };
        return year + '-' + month + '-' + date + ' ' + hour + ':' + minutes + ':' + second;
    }

}
