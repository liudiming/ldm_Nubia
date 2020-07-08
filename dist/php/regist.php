<?php
    header("content-type:text/html;charset=utf-8");
    $un = $_GET["username"];
    $pw = $_GET["password"];

    // echo $pw;
    // echo "<br>";
    $link = mysqli_connect("localhost","root","root","nubia");
    // if($link){
    //     echo "success";
    // }else{
    //     echo "fail";
    // }

    $sql = "INSERT `user` (`username`,`password`) VALUES ('$un','$pw')";

    $res = mysqli_query($link,$sql);
    if($un == "" || $pw == ""){
        echo "fail";
    }else{
        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }


    // if($res){
    //     // echo "注册成功"
    //     echo "success";

    // }else{
    //     echo "fail";
    // }






?>