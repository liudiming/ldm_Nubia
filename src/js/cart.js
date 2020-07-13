function update(){
    $.ajax({
        url:'../php/showlist.php',
        success:function(data){
            $("tbody").empty()
            $.each(data.data,function(index,value){
                $(".shuliang").text(data.data.length)
                var price = (value.product_price)
                price = parseInt(price.slice(1,5))
                var sum = value.product_num * price
    
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
                                        <span class="table-cut${value.product_id}">-</span>
                                        <input type="text" value="${value.product_num}" class="num cart-cnt" maxlength="2" readonly="readonly">
                                        <span class="table-add${value.product_id}">+</span>
                                    </div>
                                </td>
                                <td class="sum" style="line-height: 1.8;">￥${sum}</td>
                                <td>
                                    <a title="删除" class="cart-close close${value.product_id}">x</a>
                                </td>
                            </tr>`
    
                    $("tbody").append(str)     
                    add(`.table-add${value.product_id}`)   
                    cut(`.table-cut${value.product_id}`)    
                    close(`.close${value.product_id}`)
            })
            // console.log($(".sum").text().split("￥"))
            var arr = $(".sum").text().split("￥")
            console.log(arr)
            var sum1 = 0
            $.each(arr,function(index,value){
                value = value * 1
                sum1 += value
            })
            var strr = `<b>¥</b>
                        ${sum1}`
            $(".total").empty()
            $(".total").append(strr)
        },
        dataType:"json"
    })
}



update()


function add(M){
    $(M).on("click",function(){
        var id = $(this)[0].className.slice(9)
        $.ajax({
            url:"../php/updatewq.php",
            data:{
                id:id,
                type:"add"
            },
            success:function(data){

                update()
                console.log("hahahaha")
            }
        })

    })
}


function cut(N){
    $(N).on("click",function(){
        var id = $(this)[0].className.slice(9)
        $.ajax({
            url:"../php/updatewq.php",
            data:{
                id:id,
                type:"cut"
            },
            success:function(data){
                update()
                
            }
        })

    })
}


function close(D){
    $(D).on("click",function(){
        var id = $(this)[0].className.slice(16)
        console.log(id)
        $.ajax({
            url:"../php/delwq.php",
            data:{
                id:id,
            },
            success:function(data){
                update()
            }
        })

    })
}