/*加载登录界面*/
$("#rLogin").click(function(e){
	$.ajax({
			type:"get",
			url:"login.html",
			success:function(data){
				$("#loadLogin").html(data);
				//关闭登录窗口
				closeLogin();
				//登录操作
				toLogin();
			},
			error:function(){
				alert("网络故障请检查");
			},
			dataType:"html"
		})
})
/*注册*/
$("#register").click(function(e){
	e.preventDefault();
	if($("#agreeBook").is(":checked")){
		var tel=$("#phone").val();
		var p=$("#rupwd").val();
		var r=$("#reupwd").val();
		var g=$("#gender:checked").val();
		if(tel!==null&p!==null&r!==null&g!==null){
			$.ajax({
				url:"data/register.php",
				type:"POST",
				data:{phone:tel,upwd:p,rupwd:r,gender:g},
				success:function(data){
					if(data.code==1){
						alert(data.msg);
					}else{
						alert(data.msg);
					}
				},
				error:function(){
					alert("网络故障请检查");
				},
			})
		}else{
			alert("请把信息填完整");
			}
	}else{
		alert("请同意协议");
		}
})
/*验证密码强度*/
$("#upwd").blur(function(){
	var p=$("#upwd").val();
	console.log(p);
	var pReg1=/^[0-9]{3,12}$/i;
	var pReg2=/^[a-zA_Z0-9]{6,20}$/i;
	var pReg3=/^[a-zA_Z0-9_@.]{10,20}$/i;
	if(pReg1.test(p)){
		console.log("弱");
		$("#sick").css("background","green");
		return;
	}
	if(pReg2.test(p)){
		console.log("中");
		$("#sick").css("background","orange");
		$("#ok").css("background","orange");
		return;
	}
	if(pReg3.test(p)){
		console.log("强");
		$("#sick").css("background","red");
		$("#ok").css("background","red");
		$("#strong").css("background","red");
		return;
	}
	});
