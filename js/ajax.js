function ajax(obj){	//我准备向ajax()函数传入一个对象参数
	//obj对象里面包含以下5个参数
	var type = obj.type.toUpperCase() || "POST";//type: 传输类型get/post
	var url = obj.url || "";	//url: 请求地址
	var data = obj.data || null;	//data: 请求参数(uname:lin,upwd:123)
	var callback = obj.callback || function(){};//callback: 请求成功后的回调函数
	var dataType = obj.dataType || "JSON";//dataType: 服务器返回类型是json还是其他
	//上面这一堆操作相当于向函数传入5个变量
	//创建XHR对象
	var xhr = new window.XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
	var params = [];
	var search = "";
	if(data){
		for(var key in data){
			params.push(key+"="+data[key]);//[uname=x,upwd=xx]
		}
		search = params.join("&");	//uname=x&upwd=xx..
	}
	if(type=="GET"&&data){
		url += "?"+search;//将url拼接为 xxx.php?uname=x&upwd=xx..
	}
	xhr.open(type,url,true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4&&xhr.status==200){
			if(dataType=="JSON"){
				callback(JSON.parse(xhr.responseText));
			}else{
				callback(xhr.responseText);
			}
		}
	}
	if(type=="GET"){
		xhr.send(null);
	}else if(type=="POST"){
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(search);
	}
}

//使用说明
/*
	调用：
		ajax({
			type:"get",		//或者post	//不写默认为post
			url:"xxx.php",	//请求文件
			data:{			
				uname:xxx,	//查询的参数
				upwd:xxx,
				...
			},
			callback:function(msg){		//msg=>xhr.responseText/JSON.parse(xhr.responseText)
				...
			},
			dataType:"text"		//数据类型,不写默认为 json
		})
	
	注：
		所有参数都可不写，视情况而定
	
 */