<?php
    header("content-type:text/html;charset=utf-8");
    $un = $_GET["username"];
    $pw = $_GET["password"];
    // echo $pw;
    // echo $pw;
    // echo "<br>";
    $link = mysqli_connect("localhost","root","root","nubia");
    // if($link){
    //     echo "success";
    // }else{
    //     echo "fail";
    // }

    $sql = "SELECT * FROM `user` WHERE `username` = '$un' AND `password` = '$pw'";

    $res = mysqli_query($link,$sql);

    $row = mysqli_fetch_assoc($res);

    // echo $row;
    // setcookie('name',$un,time()+60*60);

    if($row){
        // echo "登录成功";
        echo "success".$un;
    }else{
        echo $un;
    }






?>