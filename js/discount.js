/**
 * Created by 吴晗 on 2017/11/7 0007.
 */
$(function () {
    var id = getid();
    console.log(id);
    $.ajax({
        type:"get",
        url:"http://192.168.32.26:9090/api/getdiscountproduct",
        data:{
            productid :id
        },
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".m_content").html(template("tpl",data))
        }
    })
})