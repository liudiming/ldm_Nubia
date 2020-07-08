function ajax(data,cb){
    var type = data.type
    var url = data.url
    var str = data.str
    // console.log(url)
    // console.log(type)
    // console.log(str)
    if(type == "get"){
        str = "?"+str
        url = url + str
        // console.log(url)
    }
    var xhr = new XMLHttpRequest()
    xhr.open(type,url,true)
    if(type == "post"){
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
        xhr.send(str)
        // console.log(url)
        // console.log(str)
    }else{
        xhr.send()

    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            // console.log(xhr.responseText)
            cb && cb(xhr.responseText)
        }
    }
}



function ajax1(data,cb){
    var type = data.type
    var url = data.url
    var str = data.str
    if(type == "jsonp"){
        var script = document.createElement("script")
        var callbackName = "ldm" + Math.random().toString().slice(2) + new Date().getTime()
        window[callbackName] = function(json){
            console.log(json)
        }
        script.src = url +"?"+ str + "&callbackName="+callbackName
        document.body.appendChild(script)

    }else{
        if(type == "get"){
            str = "?"+str
            url = url + str
        }
        var xhr = new XMLHttpRequest()
        xhr.open(type,url,true)
        if(type == "post"){
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
            xhr.send(str)
        }else{
            xhr.send()
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                console.log(xhr.responseText)
                cb(xhr.responseText)
            }
        }
    }
}