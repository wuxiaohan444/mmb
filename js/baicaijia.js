/**
 * Created by 吴晗 on 2017/11/7 0007.
 */
$(function () {
    var id = getid();
    $.ajax({
        type:"get",
        url:"http://192.168.32.34:9090/api/getbaicaijiatitle",
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".m_nav ul").html(template("tpl",data));

            var ul = document.querySelector(".m_nav ul");
            var lis=document.querySelectorAll(".m_nav ul>li");
            
           for(var i = 0;i<lis.length;i++){
               lis[i].onclick=function () {
                   for(var j = 0;j<lis.length;j++){
                       lis[j].className="fl"
                   }
                   var nid = this.dataset["id"];
                   render(nid);
                   lis[nid].className="fl now"
               }
           }
            var width =lis[0].offsetWidth*(i+1);
            ul.style.width=width+"px";
        }
    });
    
    render(id);
    function render(id) {
        $.ajax({
            type:"get",
            url:"http://192.168.32.40:9090/api/getbaicaijiaproduct",
            data:{
                titleid:id
            },
            dataType:"json",
            success:function (data) {
                // console.log(data);
                $(".m_content ul").html(template("tpl2", data));

            }
        })
    }

})