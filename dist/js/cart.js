"use strict";$(".table-add").on("click",function(){console.log($(".num").val());var n=parseInt($(".num").val());$(".num").val(n+1)}),$(".table-cut").on("click",function(){console.log($(".num").val());var n=parseInt($(".num").val());$(".num").val(n-1)});