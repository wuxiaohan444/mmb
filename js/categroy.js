/**
 * Created by 吴晗 on 2017/11/6 0006.
 */
$(function () {
    $.ajax({
        type:"get",
        url:"http://192.168.32.36:9090/api/getcategorytitle",
        dataType:"json",
        success:function (data) {
            console.log(data);
            $(".m_content ul").html(template("tpl",data));
            $(".c_title").each(function (i,e) {
                var id =$(this).data("id");
                $(this).on("click",function () {
                   $(".c_main").eq(i).toggleClass("now");
                    render(id);
                })
            })
        }
    });
    function render(id) {
        $.ajax({
            type:"get",
            url:"http://192.168.32.36:9090/api/getcategory",
            data:{
                titleid:id
            },
            dataType:"json",
            success:function (data) {
                console.log(data);
                $(".c_main").html(template("tpl2",data));
            }
        });
    }
})