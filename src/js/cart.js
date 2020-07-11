$(".table-add").on("click",function(){
    console.log($(".num").val())
    var num = parseInt($(".num").val())
    $(".num").val(num+1)
    var num1 = parseInt($(".num").val())
    var price1 = parseInt($('.productPrice').text().slice(2,6))
    var sum = num1 * price1
    $(".sum").text("￥"+sum)
})

$(".table-cut").on("click",function(){
    // console.log($(".num").val())
    var num = parseInt($(".num").val())
    $(".num").val(num-1)
    if($(".num").val()<1){
        alert("确定不购买这个商品了嘛？")
    }
    var num1 = parseInt($(".num").val())
    var price1 = parseInt($('.productPrice').text().slice(2,6))
    var sum = num1 * price1
    $(".sum").text("￥"+sum)
})


$.ajax({
    url:'../php/showlist.php',
    success:function(data){
        console.log(data)
    },
    dataType:"json"
})

