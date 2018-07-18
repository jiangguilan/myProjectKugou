$(document).ready(function(){
	
	
})

/*登录*/
function toLogin(){
	$("#toLogin").click(function(e){
		e.preventDefault();
		var n=$("#uname").val();
		var p=$("#upwd").val();
		var uReg=/^[a-zA_Z0-9_@.]{3,20}$/i;
		var pReg=/^[a-zA_Z0-9_]{3,20}$/i;
		console.log(p);
		if(!uReg.test(n)){
			alert("用户名格式不正确");
			return;
		}
		if(!pReg.test(p)){
			alert("密码格式不正确");
			return;
		}
		$.ajax({
			url:"data/login.php",
			type:"POST",
			data:{uname:n,upwd:p},
			success:function(data){
				if(data.code==1){
					//alert(data.msg);
					location.href="index.html";
				}else{
					alert(data.msg);
				}
			},
			error:function(){
				alert("网络故障请检查");
			}
		})
	})
}
		
	//关闭登录窗口
function closeLogin(){
	$("#closeLogin").click(function(e){
		 e.preventDefault();
		 $("#loginContent").css("display","none");
		 $("#containerLogin").css("display","none");
	})
}