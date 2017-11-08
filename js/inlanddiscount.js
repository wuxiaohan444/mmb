/**
 * Created by 吴晗 on 2017/11/7 0007.
 */
$(function () {
    $.ajax({
        type:"get",
        url:"http://192.168.32.34:9090/api/getinlanddiscount",
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".main").html(template("tpl",data));
        }
    })
})