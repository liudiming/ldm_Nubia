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
    console.log($(this).text())
    // console.log($(this)[0])
    // console.log($("#selectColor").children().eq(0)[0])
    
    if($(this)[0]==$("#selectColor").children().eq(0)[0]){
        $("#imgSrc").attr("src","https://oss.static.nubia.cn/active/5ea01230a0ce944.png")
        $("#img_thumb").children().eq(0).children().attr("src","https://oss.static.nubia.cn/active/5ea01230a0ce944.png")
        $("#img_thumb").children().eq(1).children().attr("src","https://oss.static.nubia.cn/active/5ea012309a6673.png")
        $("#img_thumb").children().eq(2).children().attr("src","https://oss.static.nubia.cn/active/5ea012309d51c2.png")
        $("#img_thumb").children().eq(3).children().attr("src","https://oss.static.nubia.cn/active/5ea01230b6dc348.png")       
    }
    if($(this)[0]==$("#selectColor").children().eq(1)[0]){
        $("#imgSrc").attr("src","https://oss.static.nubia.cn/active/5ea30ec20b13056.png")
        $("#img_thumb").children().eq(0).children().attr("src","https://oss.static.nubia.cn/active/5ea30ec20b13056.png")
        $("#img_thumb").children().eq(1).children().attr("src","https://oss.static.nubia.cn/active/5ea30ec00bf3c13.png")
        $("#img_thumb").children().eq(2).children().attr("src","https://oss.static.nubia.cn/active/5ea30ebfbb0027.png")
        $("#img_thumb").children().eq(3).children().attr("src","https://oss.static.nubia.cn/active/5ea30ebe2ef8630.png")           
    }
    if($(this)[0]==$("#selectColor").children().eq(2)[0]){
        $("#imgSrc").attr("src","https://oss.static.nubia.cn/active/5ed0b2e115b2191.png")
        $("#img_thumb").children().eq(0).children().attr("src","https://oss.static.nubia.cn/active/5ed0b2e115b2191.png")
        $("#img_thumb").children().eq(1).children().attr("src","https://oss.static.nubia.cn/active/5ed0b2e111f0e65.png")
        $("#img_thumb").children().eq(2).children().attr("src","https://oss.static.nubia.cn/active/5ed0b2e1101f030.png")
        $("#img_thumb").children().eq(3).children().attr("src","https://oss.static.nubia.cn/active/5ed0b2e122b2138.png")
    }
    var str = `nubia Play 8GB+128GB ${$(this).text()}/氘锋充电器套装`
    $(".shoujiColor").text(str)
})

$("#selectSpec").children().on("click",function(){
    $("#selectSpec li").removeClass('cur')
    $(this).addClass('cur')
    if($(this)[0]==$("#selectSpec").children().eq(0)[0]){
        var str = ``
    }
})