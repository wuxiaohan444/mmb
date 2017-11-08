/**
 * Created by 吴晗 on 2017/11/8 0008.
 */
$(function () {
    var brandtitleid = getid();
    $.ajax({
        type: "get",
        url: "http://192.168.32.34:9090/api/getbrand",
        dataType: "json",
        data: {
            brandtitleid: brandtitleid
        },
        success: function (data) {
            console.log(data);
            $(".m_content ul").html(template("tpl", data))
        }
    });
    $.ajax({
        type: "get",
        url: "http://192.168.32.34:9090/api/getbrandproductlist",
        dataType: "json",
        data: {
            brandtitleid: brandtitleid,
            pagesize: 4
        },
        success: function (data) {
            console.log(data);
            $(".m_tv ul").html(template("tpl2", data))

            var id = $(".m_tv ul li").data("id");
            var img = $(".m_tv ul li").data("img");
            $.ajax({
                type: "get",
                url: "http://192.168.32.34:9090/api/getproductcom",
                dataType: "json",
                data: {
                    productid: id
                },
                success: function (data) {
                    console.log(data);
                    data.img=img;
                    $(".review ul").html(template("tpl3", data))
                }
            })

        }
    });


})