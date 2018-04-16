<?php
$page=isset($_GET['page']) ? $_GET['page']:1;
$qty=isset($_GET['qty']) ?$_GET['qty']:24;

//文件路径
$path='../api/data/goodslist.json';

//打开文件
$file=fopen($path,'r');

//读取文件内容
$cont=fread($file,filesize($path));

//json=>array
$data=json_decode($cont);

$res=array(
    "total"=>count($data),
    "data"=>array_slice($data,$qty*($page-1),$qty),
    "qty"=>$qty*1,
    "page"=>$page*1
    );
echo json_encode($res,JSON_UNESCAPED_UNICODE);







?>
