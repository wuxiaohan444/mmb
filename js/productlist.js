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
        url:"http://192.168.32.36:9090/api/getcategorybyid",
        data:{
            categoryid:id
        },
        dataType:"json",
        success:function (data) {
            // console.log(data);
            $(".m_nav .cate").html(template("tpl",data))
        }
    })

    var page =1;
    render(id,page)
    $(".page .up").on("click",function () {
        if(page<=1){
          page=2;
        }
        page--;
        render(id,page)
        console.log(page);
        $(".info option").text(page+"/3");
    });
    $(".page .down").on("click",function () {
        if(page>=3){
            page=2;
        }
        page++;
        render(id,page)
        console.log(page);
        $(".info option").text(page+"/3");
    });

    function render(id,page) {
        $.ajax({
            type:"get",
            url:"http://192.168.32.36:9090/api/getproductlist",
            data:{
                pageid:page,
                categoryid:id
            },
            success:function (data) {
                console.log(data);
                $(".m_main").html(template("tpl2",data))
            }
        })
    }

})