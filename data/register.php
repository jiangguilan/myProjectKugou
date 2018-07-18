<?php
header("Content-Type:application/json;charset=utf-8");
include("init.php");
$phone=$_REQUEST["phone"];
$upwd=$_REQUEST["upwd"];
$rupwd=$_REQUEST["rupwd"];
$gender=$_REQUEST["gender"];
if($upwd==$rupwd){
	//echo '{"code":2,"msg":"密码一致通过"}';
	$sql="insert into users values(null,null,md5('$upwd'),null,'$phone',null,null,'$gender',now(),null,'0',0,'')";
	$result=mysqli_query($conn,$sql);
	if(!$result){
		echo '{"code":-1,"msg":"注册失败"}';
	}else{
		echo '{"code":1,"msg":"注册成功"}';
	}
}


//$row=mysqli_affected_rows($conn);

?>