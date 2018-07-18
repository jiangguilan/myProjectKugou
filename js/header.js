/*加载头部界面*/
$(document).ready(function(){
	$.ajax({
		type:"get",
		url:"header.html",
		success:function(html){
			$("#header").html(html);
			/*鼠标经过导航栏*/
			mouseHover();
			/*加载登录界面*/
			$("#login-btn").click(function(){
				$.ajax({
					type:"get",
					url:"login.html",
					success:function(data){
						$("#login").html(data);
						closeLogin();
						toLogin();
					},
					error:function(){
						alert("网络故障请检查");
					},
					dataType:"html"
				})
			})
		},
		dataType:"text"
	})

function mouseHover(){
/*鼠标经过头部导航*/
 var liList=$(".homeNav.left>li");
 for(var i=0;i<liList.length;i++){
		(function(i){
			 $(liList[i]).mouseover(function () {
						$(this).children().css("background","#0C8ED9");
						$(this).siblings().children().css("background","none");
						$(".homeNav_second").css("background","#2c323b");
				 })
			})(i)
		} 
}


})