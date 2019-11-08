<?php

  header('content-type:text/html;charset=utf-8;');

  # 有一个请求会到达我这里
  # 并且是 POST 方式发送的请求
  # 后端要做的事情
  # 1. 接受 POST 请求的参数
  #    有一个 关联型数组叫做 $_POST
  #    这里面就存储着前端传递过来的数据

  $username = $_POST['username'];
  $password = $_POST['password'];

  # 去到数据库里面进行查询

  $conn = mysql_connect('localhost', 'root', 'roy');
  mysql_select_db('xiaomi');

  # 准备 sql 语句
  $sql = "SELECT * FROM `user` WHERE `username`='$username' AND `password`='$password'";

  # 执行 sql 语句
  $res = mysql_query($sql);

  if (!$res) {
    die('执行 sql 语句出错： ' . mysql_error());
  }

  # 能到这里 说明 sql 语句没问题
  $row = mysql_fetch_assoc($res);

  # 得到 false 说明按照你给我的用户名和密码我没有查询到数据
  // var_dump($row); // 打印出来一个 false，说明 sql 语句没问题

  # 如果 $row 的结果是 false，表示灭有查询到匹配的内容，登录失败
  # 如果 $row 的时候是一个数据，表示有查询到匹配的内容，登录成功
  if (!$row) {
    // 能进入 if 条件，表示 !$row 是 true，$row 是 false
    // 登录失败
    // 提示一个文字，用户名或密码错误
    $arr = array(
        "message" => "登陆失败",
        "code" => 0
    );
    
    echo json_encode($arr);
  } else {
    // 登录成功
    # 后端可以增加一一个响应头
    # 下面这个表示你把地址栏变成什么内容
    echo json_encode(array(
        "message" => "登陆成功",
        "code" => 1
    ));
  };

?>