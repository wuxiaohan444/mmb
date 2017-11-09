/**
 * Created by 吴晗 on 2017/11/8 0008.
 */
$(function () {
    $.ajax({
        type:"get",
        url:"http://192.168.32.26:9090/api/getsitenav",
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".m_content ul").html(template("tpl",data));
        }
    });
})