/**
 * Created by 吴晗 on 2017/11/6 0006.
 */
$(function () {
    var search = location.search;
    search = search.slice(1);
    var arr = search.split("&");
    var Arr = arr[0].split("=");
    var id = Arr[1];

    $.ajax({
        type:"get",
        url:"http://192.168.32.36:9090/api/getmoneyctrlproduct",
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