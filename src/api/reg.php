<?php

require('cont.php');

    $username = isset($_GET['username']) ? $_GET['username'] :null;
    $password = isset($_GET['password']) ? $_GET['password'] :null;
    $type = isset($_GET['type']) ? $_GET['type'] :null;

    $sql = "select username from user where username='$username'";

    $result = $conn->query($sql);

    if($result->num_rows>0){

        echo "fail";
    }else{ 

    $password = md5($password);
    if($type ==='reg'){
        //加密密码 md5(str)
        //注册保存到数据库
        $sql = "insert into user(username,password) values('$username','$password')";
        //执行sql语句
        $res = $conn->query($sql);

            if($resl){
                 

                echo "success"; 

                
            }else{
                echo "fail";
            }
        
    }else{
        echo "success";
    }
}




?>