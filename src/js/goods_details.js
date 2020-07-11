$("#img_thumb").children().on("click",function(){
    // console.log($(this))
    $("#img_thumb li").removeClass('selected')
    // console.log($(this))
    $(this).addClass('selected')
    // console.log($(this).children().attr("src"))
    $("#imgSrc").attr("src",$(this).children().attr("src"))
    
})



$(".dinwei").on("click",function(){

})

// console.log($("#selectColor").children())
$("#selectColor").children().on("click",function(){
    // console.log($("#selectColor li"))
    $("#selectColor li").removeClass('cur')
    $(this).addClass('cur')
    // console.log($(this).text())
    // console.log($(this)[0])
    // console.log($("#selectColor").children().eq(0)[0])
    
    if($(this)[0]==$("#selectColor").children().eq(0)[0]){
        $("#imgSrc").attr("src","https://oss.static.nubia.cn/active/5ea01230a0ce944.png")
        $("#img_thumb").children().eq(0).children().attr("src","https://oss.static.nubia.cn/active/5ea01230a0ce944.png")
        $("#img_thumb").children().eq(1).children().attr("src","https://oss.static.nubia.cn/active/5ea012309a6673.png")
        $("#img_thumb").children().eq(2).children().attr("src","https://oss.static.nubia.cn/active/5ea012309d51c2.png")
        $("#img_thumb").children().eq(3).children().attr("src","https://oss.static.nubia.cn/active/5ea01230b6dc348.png")       
        var str = $(".shoujiming1").text().slice(11,21)
        // console.log(str)
        // console.log($(this).text())
        var str1 = $(".shoujiming2").text().slice(11,21)
        $(".shoujiming1").text("nubia Play "+str+" "+$(this).text()+"/氘锋充电器套装")
        $(".shoujiming2").text("nubia Play "+str1+" "+$(this).text()+"/律音耳机套装")

    }
    if($(this)[0]==$("#selectColor").children().eq(1)[0]){
        $("#imgSrc").attr("src","https://oss.static.nubia.cn/active/5ea30ec20b13056.png")
        $("#img_thumb").children().eq(0).children().attr("src","https://oss.static.nubia.cn/active/5ea30ec20b13056.png")
        $("#img_thumb").children().eq(1).children().attr("src","https://oss.static.nubia.cn/active/5ea30ec00bf3c13.png")
        $("#img_thumb").children().eq(2).children().attr("src","https://oss.static.nubia.cn/active/5ea30ebfbb0027.png")
        $("#img_thumb").children().eq(3).children().attr("src","https://oss.static.nubia.cn/active/5ea30ebe2ef8630.png")           
        var str = $(".shoujiming1").text().slice(11,21)
        var str1 = $(".shoujiming2").text().slice(11,21)
        $(".shoujiming1").text("nubia Play "+str+" "+$(this).text()+"/氘锋充电器套装")
        $(".shoujiming2").text("nubia Play "+str1+" "+$(this).text()+"/律音耳机套装")
    }
    if($(this)[0]==$("#selectColor").children().eq(2)[0]){
        $("#imgSrc").attr("src","https://oss.static.nubia.cn/active/5ed0b2e115b2191.png")
        $("#img_thumb").children().eq(0).children().attr("src","https://oss.static.nubia.cn/active/5ed0b2e115b2191.png")
        $("#img_thumb").children().eq(1).children().attr("src","https://oss.static.nubia.cn/active/5ed0b2e111f0e65.png")
        $("#img_thumb").children().eq(2).children().attr("src","https://oss.static.nubia.cn/active/5ed0b2e1101f030.png")
        $("#img_thumb").children().eq(3).children().attr("src","https://oss.static.nubia.cn/active/5ed0b2e122b2138.png")
        var str = $(".shoujiming1").text().slice(11,21)
        var str1 = $(".shoujiming2").text().slice(11,21)
        $(".shoujiming1").text("nubia Play "+str+" "+$(this).text()+"/氘锋充电器套装")
        $(".shoujiming2").text("nubia Play "+str1+" "+$(this).text()+"/律音耳机套装")
    }
    // var str = `nubia Play 8GB+128GB ${$(this).text()}/氘锋充电器套装`
    // $(".shoujiColor").text(str)
})

$("#selectSpec").children().on("click",function(){
    $("#selectSpec li").removeClass('cur')
    $(this).addClass('cur')
    if($(this)[0]==$("#selectSpec").children().eq(0)[0]){
        var str = $(".shoujiming1").text().slice(21)
        var str1 = $(".shoujiming2").text().slice(21)
        // console.log(str)
        // console.log(str1)
        // console.log($(this).text())
        // $(".shoujiming1").text("")
        $(".shoujiming1").text("nubia Play "+" "+$(this).text()+str)
        $(".shoujiming2").text("")
        $(".shoujiming2").text("nubia Play "+" "+$(this).text()+str1)
        $(".jiage").text("¥2399.00")
        var str2 = `¥2548.00
        <span>，省¥20.00 </span>`
        var str3 = `¥2458.00
        <span>，省¥40.00 </span>`
        $(".jiage1").empty()
        $(".jiage1").append(str2)
        $(".jiage2").empty()
        $(".jiage2").append(str3)
        var str4 = `<li>
                        <span>Play（${$(this).text()}）后盖宝（半年内保修1次）</span>
                        <p>￥39.00</p>
                    </li>
                    <li>
                        <span>Play（${$(this).text()}）后盖宝（1年内保修1次）</span>
                        <p>￥59.00</p>
                    </li>
                    <li>
                        <span>Play（${$(this).text()}）屏碎宝（半年内保修1次）</span>
                        <p>￥89.00</p>
                    </li>
                    <li>
                        <span>Play（${$(this).text()}）屏碎宝（1年内保修1次）</span>
                        <p>￥119.00</p>
                    </li>`

            $(".pinbao").empty()
            $(".pinbao").append(str4)
    }
    if($(this)[0]==$("#selectSpec").children().eq(1)[0]){
        var str = $(".shoujiming1").text().slice(21)
        var str1 = $(".shoujiming2").text().slice(21)
        $(".shoujiming1").text("nubia Play "+" "+$(this).text()+str)
        $(".shoujiming2").text("nubia Play "+" "+$(this).text()+str1)
        $(".jiage").text("¥2699.00")
        var str2 = `¥2848.00
        <span>，省¥20.00 </span>`
        var str3 = `¥2758.00
        <span>，省¥40.00 </span>`
        $(".jiage1").empty()
        $(".jiage1").append(str2)
        $(".jiage2").empty()
        $(".jiage2").append(str3)
        var str4 = `<li>
                        <span>Play（${$(this).text()}）后盖宝（半年内保修1次）</span>
                        <p>￥49.00</p>
                    </li>
                    <li>
                        <span>Play（${$(this).text()}）后盖宝（1年内保修1次）</span>
                        <p>￥79.00</p>
                    </li>
                    <li>
                        <span>Play（${$(this).text()}）屏碎宝（半年内保修1次）</span>
                        <p>￥99.00</p>
                    </li>
                    <li>
                        <span>Play（${$(this).text()}）屏碎宝（1年内保修1次）</span>
                        <p>￥149.00</p>
                    </li>`

            $(".pinbao").empty()
            $(".pinbao").append(str4)

        
    }
    if($(this)[0]==$("#selectSpec").children().eq(2)[0]){
        var str = $(".shoujiming1").text().slice(21)
        var str1 = $(".shoujiming2").text().slice(21)
        $(".shoujiming1").text("nubia Play "+" "+$(this).text()+str)
        $(".shoujiming2").text("nubia Play "+" "+$(this).text()+str1)
        $(".jiage").text("¥2999.00")
        var str2 = `¥3058.00
        <span>，省¥40.00 </span>`
        var str3 = `¥3148.00
        <span>，省¥20.00 </span>`
        $(".jiage1").empty()
        $(".jiage1").append(str2)
        $(".jiage2").empty()
        $(".jiage2").append(str3)
        var str4 = `<li>
                        <span>Play（${$(this).text()}）后盖宝（半年内保修1次）</span>
                        <p>￥49.00</p>
                    </li>
                    <li>
                        <span>Play（${$(this).text()}）后盖宝（1年内保修1次）</span>
                        <p>￥79.00</p>
                    </li>
                    <li>
                        <span>Play（${$(this).text()}）屏碎宝（半年内保修1次）</span>
                        <p>￥99.00</p>
                    </li>
                    <li>
                        <span>Play（${$(this).text()}）屏碎宝（1年内保修1次）</span>
                        <p>￥149.00</p>
                    </li>`

            $(".pinbao").empty()
            $(".pinbao").append(str4)
        // console.log($(".cur").text())
    }
})

$(".pinbao").children().on("click",function(){
    // console.log($(this))
    $(".pinbao").children().removeClass("cur")
    $(this).addClass("cur")
    // $(this).on("click",function(){
    //     $(this).removeClass("cur")
    // })
})

$(".addShopCar").on("click",function(){
    // console.log($(".cur").text())
    // var str = $(".cur").text().replace(/\W/g,"")
    // console.log(str)
    var id = 10003
    var name = $(".shoujiming1").text()
    var img = $("#imgSrc").attr('src')
    var price = $(".jiage").text()
    // console.log(name,img,price)
    // $.get("../php/addwq.php",{
    //     id:id,
    //     name:name,
    //     img:img,
    //     price:price
    // },function(data){
    //     console.log(data)
    //     if(data.code === 1){
    //         alert("加入购物车成功")
    //     }
    // })
    $.ajax({
        url:"../php/addwq.php",
        success:function(data){
            // console.log(data)
            if(data.code == 1){
                alert("加入购物车成功！")
            }
        },
        dataType:"json",
        data:{
            id:id,
            name:name,
            img:img,
            price:price
        }
    })





})