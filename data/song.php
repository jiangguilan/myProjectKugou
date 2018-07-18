<?php
header("Content-Type:application/json;charset=utf-8");
include("init.php");
$sql="select * from song limit 0,34";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,1);
echo json_encode($rows);
?>