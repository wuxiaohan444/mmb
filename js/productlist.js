/**
 * Created by 吴晗 on 2017/11/6 0006.
 */
$(function () {
    var id = getid();
    var totalCount = 0;
    var pagesize = 0;
    var page = 1;
    render(id, page);
    function render(id, page) {
        $.ajax({
            type: "get",
            url: "http://192.168.32.26:9090/api/getproductlist",
            data: {
                pageid: page,
                categoryid: id
            },
            success: function (data) {
                // console.log(data);
                $(".m_main").html(template("tpl2", data))
                totalCount = data.totalCount;
                pagesize = data.pagesize;
            }
        })
    }

    $(".page .up").on("click", function () {
        time();
        if (page <=1) {
            page = 2;
        }
        page--;
        render(id, page)
        $(".info option").text(page + "/" + Math.ceil(totalCount / pagesize));
        console.log(page);
    });
    $(".page .down").on("click", function () {
        time();
        if (page >= Math.ceil(totalCount / pagesize)) {
            page = Math.ceil(totalCount / pagesize)-1;
        }
        page++;
        render(id, page)
        $(".info option").text(page + "/" + Math.ceil(totalCount / pagesize));
        console.log(page);
    });

    $.ajax({
        type: "get",
        url: ip+"/api/getcategorybyid",
        data: {
            categoryid: id
        },
        dataType: "json",
        success: function (data) {
            // console.log(data);
            $(".m_nav .cate").html(template("tpl", data))
        }
    })
    function time() {
        setTimeout(function () {
            var count = Math.ceil(totalCount / pagesize);
            var datas = [];
            for (var i = 0; i < count; i++) {
              var  data = {count: count};
                datas.push(data);
            }
            $(".info").html(template("tpl3", {data: datas}));
            $("option").each(function (i, e) {
                $("option").eq(page - 1).prop("selected", true);
            });

        }, 100)
    }
    $("select").on("change",function () {
      page= +$("select").val()+1;
        render(id,page);
    });
    time();
})
