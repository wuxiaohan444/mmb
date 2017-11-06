/**
 * Created by 吴晗 on 2017/11/6 0006.
 */
$(function () {
    var search = location.search;
    search = search.slice(1);
    var arr = search.split("&");
    var Arr=arr[0].split("=");
    var id =Arr[1];
    $.ajax({
        type:"get",
        url:"http://192.168.32.36:9090/api/getproduct",
        data:{
            productid:id
        },
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".m_nav .cate").html(template("tpl",data));
            $(".main_t").html(template("tpl2",data));
            $(".main_c").html(template("tpl4",data));
        }
    });
    $.ajax({
        type:"get",
        url:"http://192.168.32.36:9090/api/getproductcom",
        data:{
            productid:id
        },
        dataType:"json",
        success:function (data) {
            // console.log(data);
           $(".comment_c ").html(template("tpl3",data));
        }
    })
})