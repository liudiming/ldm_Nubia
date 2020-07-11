$.ajax({
    url:'../php/showlist.php',
    success:function(data){
        // console.log(data.data)
        $("tbody").empty()
        $.each(data.data,function(index,value){
            // console.log(value)
            // console.log(data.data.length)
            // var shuliang = data.data.length
            $(".shuliang").text(data.data.length)
            var price = (value.product_price)
            price = parseInt(price.slice(1,5))
            var sum = value.product_num * price
            // console.log(price)
            var str = `<tr index="${value.product_id}" class="product${value.product_id}">
                            <td class="productImage">
                                <img src="${value.product_img}" alt="">
                            </td>
                            <td class="productname">
                                <a href="" class="pdt-title">${value.product_name}</a>
                            </td>
                            <td class="productPrice"> ${value.product_price}</td>
                            <td>
                                <div class="btn-cnts">
                                    <span class="table-cut">-</span>
                                    <input type="text" value="${value.product_num}" class="num cart-cnt" maxlength="2" readonly="readonly">
                                    <span class="table-add">+</span>
                                </div>
                            </td>
                            <td class="sum" style="line-height: 1.8;">
                                ￥${sum}
                            </td>
                            <td>
                                <a title="删除" href="" class="cart-close close">x</a>
                            </td>
                        </tr>`

                $("tbody").append(str)
        })
    },
    dataType:"json"
})



// console.log($('.table-add'))

$("tbody").on("click",function(){
    // console.log($(this).children().length)
    $(this).children().on("click",function(){
        console.log($(this).children(".table-add"))

    })
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







