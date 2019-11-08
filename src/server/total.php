<?php

    include './base.php';

    $sql = 'SELECT COUNT(*) `total` FROM `goods`' ;

    $res = mysql_query($sql);
    if(!$res){
        die('error for query:' . mysql_error());
    }

    $row = mysql_fetch_assoc($res);
    echo json_encode($row);
    // var_dump($row);
?>