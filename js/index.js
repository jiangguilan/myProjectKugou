$(document).ready(function(){
	$.ajax({
		 type:"get",
		 url:"data/banner.php",
		 success:function(msg){
				var msg=JSON.parse(msg);
					var i=1;
					var canMove=true;
					function autoMove(){
						if(i>=0&&i<=4&&canMove){
							var href=msg[i][1];
							$(".banner div#showBanner a").css({"background":"url("+href+") no-repeat center center",
								"transition":"all .5s linear"});
							i++;
							var a=$("#circle").children("li:eq("+(i-1)+")").find("a");
							a.addClass("bannerAHover");
							a.parent().siblings().find("a").removeClass("bannerAHover");
						}else{
							clearInterval(timer);
						}
						if(i>4){
							i=0;
						}
					}
					/*鼠标点击当前a改变图片*/
					$(".banner>a").click(function(e){
						 e.preventDefault();
						 var tar=$(e.target);
						 if(i>0&&tar.hasClass("clk_left")){i--}
						 else if(i<4&&tar.hasClass("clk_right")){i++}
						 else if(i==0&&tar.hasClass("clk_left")){i=4}
						 else{i=0};
						 $(".banner div#showBanner a").css("background","url("+msg[i][1]+") no-repeat center center");
						 var a=$("#circle").children("li:eq("+(i)+")").find("a");
						 a.addClass("bannerAHover");
						 a.parent().siblings().find("a").removeClass("bannerAHover");
					})
					/*鼠标经过当前a改变图片*/
					$("#circle").mouseover(function(event){
						if(event.target.nodeName=="A"){
							 var index = $(event.target).attr("index");
							$(event.target).addClass("bannerAHover");
							$(event.target).parent().siblings().find("a").removeClass("bannerAHover");
							$(".banner div#showBanner a").css("background","url("+msg[index][1]+") no-repeat center center");
						}
					});
					var timer=setInterval(autoMove,3000);
					/*鼠标进入banner停止轮播*/
					$(".banner").mouseenter(
						function(){//关闭轮播的开关变量
							canMove=false;
							clearInterval(timer);
							timer=null;
						}
					);
					/*鼠标离开banner继续轮播*/
					$(".banner").mouseleave(
						function(){//打开轮播的开关变量
							canMove=true;
							timer=setInterval(autoMove,3000);
						}
					);
		 },
		 error:function(){
			alert("网络故障请检查");
		 },
		 dataType:"text"
		})
	$.ajax({
		type:"get",
		 url:"data/songlist.php",
		 success:function(msg){
			 var msg=JSON.parse(msg);
			 var html='';
			 for(var arr of msg){
				  html+=`
						<li style="background:url(${arr.listImg}) no-repeat top center">
							<p class="right p1"></p>
							<span class="span1"></span>
							<span class="span2"><span>${arr.ctr}</span>万</span>
							<p class="p2"></p>
							<span class="span3">${arr.intro}</span>
							<span class="span4">${arr.creater}</span>
							<p class="p3">
								<a class="p4"></a>
							</p>
						</li>
				  `;
			 }
			  $(".songList").html(html);
				$(".songList").click(function(e){
					var tar=$(e.target);
					var p3=tar.children().children(".p3");
					console.log(p3);
					if(p3){
						location.href="song.html";
					}
				})
		},
		 error:function(){alert("网络故障请检查")},
		 dataType:"html"
		})
})
