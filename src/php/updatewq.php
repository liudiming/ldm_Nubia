<?php

require('./_connect.php');
$id = $_REQUEST['id'];
$type = $_REQUEST['type'];

$sql = "SELECT * FROM `cart` WHERE `product_id` = $id";

$res = mysqli_query($conn,$sql);

$row = mysqli_fetch_assoc($res);

$num = $row['product_num'];







?>