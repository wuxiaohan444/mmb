/**
 * Created by 吴晗 on 2017/11/7 0007.
 */
$.ajax({
    type:"get",
    url:ip+"/api/getcoupon",
    dataType:"json",
    success:function (data) {
        console.log(data);
        $(".m_content ul").html(template("tpl",data))
    }
})