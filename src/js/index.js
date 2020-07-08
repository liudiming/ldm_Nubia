// console.log($(".nav_ul_cont").children())
$(".nav_ul_cont").children().mouseenter(function(){
    // $(this).children().eq(1).children().eq(0).children().eq(0).children().eq(0).children().eq(0).children().eq(0).children().eq(0).css({
    //     display:"block"
    // })
    // console.log($(this).children().eq(1).children().eq(0).children().eq(0).children().eq(0).children())
    
    $(this).children().eq(1).css({
        display:"block"
    })
    $(".header_cont").stop().animate({
        height:200
    })
    $(this).children().eq(1).children().eq(0).children().eq(0).children().eq(0).children().mouseenter(function(){
        // console.log($(this))
        $(".cont_con1").css({
            display:"none"
        })
        $(this).children().eq(1).css({
            display:"block"
        })
        $(this).children().eq(1).addClass(".active")
    })
    // $(this).children().eq(1).children().eq(0).children().eq(0).children().eq(0).children().mouseleave(function(){
    //     // console.log($(this))
    //     $(this).children().eq(1).css({
    //         display:"none"
    //     })
    // })
})

$(".nav_ul_cont").children().mouseleave(function(){
    // console.log($(this).children().eq(1))
    $(this).children().eq(1).css({
        display:"none"
    })
    $(".header_cont").stop().animate({
        height:0
    })
    
})


// console.log($(".cont_list").children().eq(0).children()[0])
// $(".cont_list").children().eq(0).children().mouseenter(function(){
//     console.log("hahaha")
//     console.log($(this))
// })


$(".user").mouseenter(function(){
    $(".user1").css({
        display:"block"
    })
})

$(".user").mouseleave(function(){
    $(".user1").css({
        display:"none"
    })
})

$(".cart").mouseenter(function(){
    $(".cart_cont").css({
        display:"block"
    })
})

$(".cart").mouseleave(function(){
    $(".cart_cont").css({
        display:"none"
    })
})

$(".icon-ziyuan1").on("click",function(){
    $(".search_input").css({
        opacity:1,
        zIndex:9999
    })
    $(".list_cont").css({
        display:"none"
    })
    $(".head_nav_right").css({
        display:"none"
    })
})

$(".icon-cha3").on('click',function(){
    $(".search_input").css({
        opacity:0,
        zIndex:-9999
    })
    $(".list_cont").css({
        display:"block"
    })
    $(".head_nav_right").css({
        display:"block"
    })
})


// 搜索框数据
$("#txt").on("input",function(){
    var text = $(this).val()
    // console.log(text)
    $.ajax({
        url:"/nubia_search?product_name="+text+"&page_size=10&page_num=1",
        success:function(shuju){
            // console.log(shuju["data"].search_list)
            $('.box_s').empty()
            $.each(shuju["data"].search_list, function (index, value) {
                $(".box_s").append('<li><a href="">' + value.product_name + '</a></li>')
            })
        },
        dataType: "json"
    })
})