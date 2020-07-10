$(".table-add").on("click",function(){
    console.log($(".num").val())
    var num = parseInt($(".num").val())
    $(".num").val(num+1)
})

$(".table-cut").on("click",function(){
    console.log($(".num").val())
    var num = parseInt($(".num").val())
    $(".num").val(num-1)
})

