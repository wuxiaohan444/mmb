/**
 * Created by 吴晗 on 2017/11/7 0007.
 */
$(function () {
    $.ajax({
        type:"get",
        url:ip+"/api/getinlanddiscount",
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".main").html(template("tpl",data));
        }
    })
})