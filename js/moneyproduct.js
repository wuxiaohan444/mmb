/**
 * Created by 吴晗 on 2017/11/6 0006.
 */
$(function () {
    var id = getid();
    $.ajax({
        type:"get",
        url:"http://192.168.32.34:9090/api/getmoneyctrlproduct",
        data:{
            productid:id
        },
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".m_content").html(template("tpl",data))
        }
    })

})