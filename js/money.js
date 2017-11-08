/**
 * Created by 吴晗 on 2017/11/6 0006.
 */
$(function () {
    var page =0;
    render(page)
    $(".page .up").on("click",function () {
        if(page<=0){
            page=1;
        }
        page--;
        render(page)
        $(".info option").text(page+1+"/14");
    });
    $(".page .down").on("click",function () {
        if(page>=13){
            page=12;
        }
        page++;
        render(page)
        $(".info option").text(page+1+"/14");
    });
    
    function render(page) {
        $.ajax({
            type:"get",
            url:"http://192.168.32.34:9090/api/getmoneyctrl",
            data:{
                pageid:page
            },
            dataType:"json",
            success:function (data) {
                console.log(data);
                $(".content_main ul").html(template("tpl",data));
            }

        })
    }

})