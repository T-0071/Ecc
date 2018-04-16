<?php

require('cont.php');


$sql="select * from goods";

$result=$conn->query($sql);
$row=$result->fetch_all(MYSQLI_ASSOC);


echo json_encode($row,JSON_UNESCAPED_UNICODE);

$conn->close();




?>