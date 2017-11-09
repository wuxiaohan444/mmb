/**
 * Created by 吴晗 on 2017/11/7 0007.
 */
$(function () {
    var id = getid();
    $.ajax({
        type: "get",
        url: "http://192.168.32.26:9090/api/getcouponproduct",
        data: {
            couponid: id
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            $(".m_content ul").html(template("tpl", data));
            $(".modal ul").html(template("tp2", data));
            var lis = $(".m_content ul li");
            for (var i = 0; i < lis.length; i++) {
                lis[i].onclick = function () {
                    $(".modal").show();
                    $(".fa-close").on("click", function () {
                        $(".modal").hide();
                    })

                    var count = 0;
                    $(".arrow-right").click(function () {
                        count++;
                        if (count == $(".slider li").length) {
                            count = 0;
                        }
                        $(".slider li").eq(count).stop().fadeIn().siblings("li").fadeOut();
                    });

                    $(".arrow-left").click(function () {
                        console.log(count);
                        count--;
                        if (count == -1) {
                            count = $(".slider li").length - 1;
                        }
                        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
                    })
                }
            }
        }
    });
})