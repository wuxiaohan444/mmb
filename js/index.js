/**
 * Created by 吴晗 on 2017/11/5 0005.
 */
$(function () {
    $.ajax({
        type: "get",
        url: "http://192.168.32.36:9090/api/getmoneyctrl",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $(".content_main ul").html(template("tpl", data));
            $(".content_main ul a").each(function (i, e) {
                $(this).prepend(data.result[i].productImgSm)
            })
        }
    });

    $.ajax({
        type: "get",
        url: "http://192.168.32.36:9090/api/getindexmenu",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $(".m_nav ul").html(template("tpl2", data));
            $(".m_nav ul a").each(function (i, e) {
                $(this).prepend(data.result[i].img);
                var $this = $(this);
                if (i > 7) {
                    $(".m_nav ul a").eq(i).parents().addClass("now");

                    $(".m_nav ul a").eq(7).on("click", function () {
                        $(".m_nav ul a").eq(i).parents().toggleClass("now");
                    })
                }
                $(".m_nav ul a").eq(0).attr("href", "categroy.html");
                $(".m_nav ul a").eq(1).attr("href", "money.html");
                $(".m_nav ul a").eq(4).attr("href", "money.html");
                $(".m_nav ul a").eq(6).attr("href", "categroy.html");
                $(".m_nav ul a").eq(9).attr("href", "categroy.html");
            })
        }
    });

})