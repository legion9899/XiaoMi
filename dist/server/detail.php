<?php

    include './base.php';

    $id = $_GET['id'];

    $sql = "SELECT * FROM `goods` WHERE `goods_id` = '$id'";

    $res = mysql_query($sql);

    if(!$res){
        die('error for connect:' . mysql_error());
    }

    $row = mysql_fetch_assoc($res);

    echo json_encode($row);

?>