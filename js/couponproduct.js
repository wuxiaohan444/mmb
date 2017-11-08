/**
 * Created by 吴晗 on 2017/11/7 0007.
 */
$(function () {
    var id = getid();
    $.ajax({
        type: "get",
        url: "http://192.168.32.34:9090/api/getcouponproduct",
        data:{
            couponid:id
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            $(".m_content ul").html(template("tpl", data));
            var lis=$(".m_content ul li");
            for(var i =0;i<lis.length-1;i++){
                lis[i].onclick=function () {
                    $(".modal").toggleClass("now");
                }
            }
        }
    });


})