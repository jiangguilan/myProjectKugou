<?php
	header("Content-Type:application/json;charset=utf-8");
	include("init.php");
	@$uname=$_REQUEST["uname"];
	@$upwd=$_REQUEST["upwd"];
	$uPattern='/^[a-zA-Z0-9_@.]{3,20}$/';
	$pPattern='/^[a-zA-Z0-9_]{3,20}$/';
	if(!preg_match($uPattern,$uname)){
		echo '{"code":-2,"msg":"用户名格式不正确"}';
		exit;
	}
	if(!preg_match($pPattern,$upwd)){
		echo '{"code":-3,"msg":"密码格式不正确"}';
		exit;
	}
	$sql="select * from users where (uname='$uname' OR phone='$uname' OR email='$uname') AND upwd=md5('$upwd') AND expire='0'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if($row!==null){
		echo '{"code":1,"msg":"登录成功"}';
	}else{
		echo '{"code":-1,"msg":"用户名或密码错误"}';
	}
?>