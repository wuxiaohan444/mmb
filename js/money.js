/**
 * Created by 吴晗 on 2017/11/6 0006.
 */
$(function () {
    var page =0;
    var totalCount = 0;
    var pagesize = 0;
    render(page);
    function render(page) {
        $.ajax({
            type:"get",
            url:"http://192.168.32.26:9090/api/getmoneyctrl",
            data:{
                pageid:page
            },
            dataType:"json",
            success:function (data) {
                // console.log(data);
                $(".content_main ul").html(template("tpl",data));
                totalCount = data.totalCount;
                pagesize = data.pagesize;
            }

        })
    }
    $(".page .up").on("click",function () {
        if(page<=0){
            page=1;
        }
        page--;
        render(page)
        $(".info option").text(page+1+"/"+Math.ceil(totalCount / pagesize));
        time();
    });
    $(".page .down").on("click",function () {
        if(page>=Math.ceil(totalCount / pagesize-1)){
            page=Math.ceil(totalCount / pagesize)-2;

        }
        page++;
        render(page);
        console.log(page);
        $(".info option").text(page+1+"/"+Math.ceil(totalCount / pagesize));
        time();
    });
    time();
    function time() {
        setTimeout(function () {
            var count = Math.ceil(totalCount / pagesize);
            var datas = [];
            for (var i = 0; i < count; i++) {
                var  data = {page: page + i, count: count};
                datas.push(data);
            }
            $(".info").html(template("tpl2", {data: datas}));
            $("option").each(function (i, e) {
                $("option").eq(page).prop("selected", true);
            });
        }, 100)
    }
    $("select").on("change",function () {
        page= +$("select").val();
        render(page);
    });
})