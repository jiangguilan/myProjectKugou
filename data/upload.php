<?php
header("Content-Type:application/json;charset=utf-8");
include("init.php");
//include("imageUrl.php");
if(empty($_FILES)){
	die ('{"code":-1,"msg":"没有上传文件请检查"}');
}
	$name=$_FILES["mypic"]["name"];
	$size=ceil($_FILES["mypic"]["size"]/1024);
if($size>2048){
	die ('{"code":-2,"msg":"上传文件过大请检查"}');
}
$type=strstr($name,".");
if($type!=".jpg"&&$type!=".png"&&$type!=".gif"){
	die ('{"code":-3,"msg":"上传文件必须是图片格式"}');
}
$filename=time().rand(1,9999).$type;
$src=$_FILES["mypic"]["tmp_name"];
$des="../upload/user".$filename;
move_uploaded_file($src,$des);
//mkThumbnail($des,,,"../upload/user".$filename);
$id=$_REQUEST["id"];
$img=="upload/user".$filename;
$sql="update users set avatar='$img' where id=$id";
$result=mysqli_query($conn,$sql);
$row=mysqli_affected_row($result);
if($row>0){
	echo '{"code":1,"msg":"上传成功"}';
}else{
	echo '{"code":-2,"msg":"上传失败"}';
}
?>