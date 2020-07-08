console.log("hahahah")
$('.lp').mouseenter(function(){
    $(this).css({
        color:"#000",
        background:'none'
    })
    $(this).children().eq(0).removeClass("icon-jiankuohaoxia").addClass('icon-jiankuohaoshang')
    $(this).children().eq(1).css({
        display:"block"
    })
})

$('.lp').mouseleave(function(){
    $(this).css({
        color:"#fff",
        background:'none'
    })
    $(this).children().eq(0).removeClass("icon-jiankuohaoshang").addClass('icon-jiankuohaoxia')
    $(this).children().eq(1).css({
        display:"none"
    })
})

// 商品列表请求数据

$.ajax({
    url:"/ldm",
    success:function(data){
        // var str = ''
        console.log(data.data)
        $.each(data.data.content,function(index,value){
            // console.log(value)
            // console.log(value[0])
            if(value.sale_point){
                $('#list_all').children().eq(1).append(
                `
                <div class="p_list col-md-3 col-sm-4 col-xs-6">
                    <a href="${value.link}">
                        <img src="${value.image}" alt="">
                        <div>
                            <p class="image">${value.product_name} ${value.color_name}</p>
                            <p class="details"></p>
                            <p class="price">￥${value.price}
                                <span style="text-decoration: line-through;">${value.price<value.origin_price? value.origin_price : ''}</span>
                            </p>
                        </div>
                        <div>
                            <div class="sale_point" style="text-align: center;background-color: rgb(222, 99, 79); left: 20px;">
                                <span>${value.sale_point.block_image_icon.text}</span>
                            </div>
                        </div>
                    </a>
                </div>
                `)

            }else{
                $('#list_all').children().eq(1).append( `
                <div class="p_list col-md-3 col-sm-4 col-xs-6">
                    <a href="${value.link}">
                        <img src="${value.image}" alt="">
                        <div>
                            <p class="image">${value.product_name} ${value.color_name}</p>
                            <p class="details"></p>
                            <p class="price">￥${value.price}
                                <span style="text-decoration: line-through;">${value.price<value.origin_price? value.origin_price : ''}</span>
                            </p>
                        </div>
                    </a>
                </div>
                `)
            }
            // str += str
        })

        $.each(data.data.recommend,function(index,value){
            $('.weini').append(`
            <div class="p_list col-md-3 col-sm-4 col-xs-6">
                <a href="${value.link}">
                    <img src="${value.image}" alt="">
                    <div>
                        <p class="image">${value.product_name} ${value.color_name}</p>
                        <p class="details"></p>
                        <p class="price">
                            ￥${value.price}
                        </p>
                    </div>
                </a>
            </div>
            `)
        })
        
    }
})




// || value.price != value.origin_price

