$(document).ready(function(){
	$.ajax({
		type:"get",
		 url:"data/song.php",
		 success:function(msg){
			 var msg=JSON.parse(msg);
			 var html='';
			 for(var arr of msg){
				  html+=`
						<li>
							<input type="checkbox">
							<span>${arr.songId}</span>
							<span>${arr.song}</span>
							<p class="right">
								<b class="play"></b>
								<i class="songShare"></i>
							</p>
						</li>
				  `;
			 }
			 $("#showSong").html(html);
		},
		 error:function(){alert("网络故障请检查")},
		 dataType:"html"
		})
})
