<?php

    $conn = mysql_connect('localhost','root','roy');
    if(!$conn){
        die('error for connect:' . mysql_error());
    }

    mysql_select_db('xiaomi');
?>