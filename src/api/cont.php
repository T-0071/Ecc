<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'h5_1801';

    $conn = new mysqli($servername, $username, $password, $dbname);

    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');




?>