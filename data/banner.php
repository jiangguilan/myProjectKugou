<?php
header("Content-Type:application/json;charset=utf-8");
include("init.php");
$sql="select * from banner";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result);
echo json_encode($rows);
?>