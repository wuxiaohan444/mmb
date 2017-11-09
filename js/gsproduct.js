/**
 * Created by 吴晗 on 2017/11/8 0008.
 */
$(function () {
    var shopid = 0;
    var areaid = 0;
    render(0,0)

    $(".m_nav .ul a").eq(0).on("click", function () {
        $(".menu").toggleClass("now");
        $.ajax({
            type: "get",
            url: ip+"/api/getgsshop",
            dataType: "json",
            success: function (data) {
                console.log(data);
                $(".m_nav .menu ul").html(template("tpl", data));
                $(".menu ul>li").each(function (i, e) {
                    $(".menu ul>li").eq(i).on("click", function () {
                        $(".menu").toggleClass("now");
                        var text = $(this).text();
                        console.log(text);
                        $("#text").text(text);
                        $(".menu .fa-check").eq(i).show();
                        shopid=$(".menu ul>li").eq(i).data("id");
                        render(shopid,areaid);
                    })
                })

            }
        });

    })


    $(".m_nav .ul a").eq(1).on("click", function () {
        $(".menu").toggleClass("now");
        $.ajax({
            type: "get",
            url: ip+"/api/getgsshoparea",
            dataType: "json",
            success: function (data) {
                // console.log(data);
                $(".m_nav .menu ul").html(template("tpl2", data));
                $(".menu ul>li").each(function (i, e) {
                    $(".menu ul>li").eq(i).on("click", function () {
                        $(".menu").toggleClass("now");
                        var text = $(this).text().trim().slice(0, 2);
                        console.log(text);
                        $("#txt").text(text);
                        $(".menu .fa-check").eq(i).show();
                        areaid=$(".menu ul>li").eq(i).data("id");
                        render(shopid,areaid);

                    })
                })


            }
        });

    })


    $(".m_nav .ul a").eq(2).on("click", function () {
        $(".menu2").toggleClass("now");
    });


    function render(shopid, areaid) {
        $.ajax({
            type: "get",
            url: ip+"/api/getgsproduct",
            data: {
                shopid: shopid,
                areaid: areaid,
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                $(".m_content ul").html(template("tpl3", data));
            }
        });
    }

})


