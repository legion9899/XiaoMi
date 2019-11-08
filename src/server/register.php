<?php

    header('content-type:text/html;charset=utf-8;');

    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = mysql_connect('localhost','root','roy');
    if(!$conn){
        die('error for mysql_connect: ' .mysql_error());
    }
    mysql_select_db('xiaomi');

    if ($username == '' or $password == '') {
        echo "输入不能为空";
    } else {
        $sql = "INSERT INTO `user` (`username`,`password`) VALUES ('$username','$password')";
        $result = mysql_query($sql);
        if ($result) {
            header('location: ../pages/login.html');
        } else {
            echo "注册失败";
        }
    }
?>