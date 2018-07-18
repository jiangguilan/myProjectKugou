<?php
header("Content-Type:application/json;charset=utf-8");
include("init.php");
$sql="select sid,listImg,ctr,creater,intro from songlist ORDER BY ctr DESC";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,1);
echo json_encode($rows);
?>