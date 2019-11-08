<?php
    include './base.php';

    $pagenum = $_GET['pagenum'];
    $pagesize = $_GET['pagesize'];

    $start = ($pagenum - 1) * $pagesize;
    $sql = "SELECT * FROM `goods`LIMIT $start, $pagesize";

    $res = mysql_query($sql);
    if(!$res){
        die('error for query:' . mysql.error());
    }
    $arr = array();
    while($row = mysql_fetch_assoc($res)){
        array_push($arr,$row);
    }
    echo json_encode($arr);
?>