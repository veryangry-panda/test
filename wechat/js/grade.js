window.onload=function(){
	//设置背景图片的尺寸
	setSize();
	
	//处理成绩
	setScore();
}

function setScore(){
		var str=window.location.search;
//		console.log(str)
		var arr=str.split('&');
		var checkcode=arr[0].slice(1);
//		console.log(checkcode)
		var schoolYear=arr[1];
//		console.log(schoolYear)
		var term=arr[2];
//		console.log(term)
		var username=get_cookie_func("username");
//		console.log(username)
		var password=get_cookie_func("password");
//		console.log(password)
		var ajax=new XMLHttpRequest();
		ajax.open('post','php/CaptureGrade/CaptureScore.php');
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		ajax.send('username='+username+'&password='+password+'&checkcode='+checkcode+'&schoolYear='+schoolYear+'&term='+term);
		ajax.onreadystatechange=function(){
			if(ajax.readyState==4&&ajax.status==200){
				var jsObj=JSON.parse(ajax.responseText);
//				console.log(jsObj)
//				console.log(jsObj.length);//underfined
//				console.log(jsObj.grade.length)
//				for(var i=0;i<jsObj.grade.length;i++){
//					console.log(jsObj.grade[i]);
//				}
				console.log(jsObj.result)
//				
				console.log(jsObj.GPA)
				if(jsObj.result=="success"){
					var strJson='';
					for(var i=0;i<jsObj.grade.length;i++){
						strJson+='<tr>'
						strJson+='<td>'+jsObj.grade[i].className+'</td>'
						strJson+='<td>'+jsObj.grade[i].credit+'</td>'
						strJson+='<td>'+jsObj.grade[i].GPA+'</td>'
						strJson+='<td>'+jsObj.grade[i].grade+'</td>'
						strJson+='</tr>'
					}
					var tbody=document.querySelector("#tbody")
					tbody.innerHTML=strJson;
				}else{
					document.body.innerHTML=jsObj.result;
					document.body.innerHTML=jsObj.failReason;
					window.location.href="bind.html";
					
				}
				
			}
		}
	}