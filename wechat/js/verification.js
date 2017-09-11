window.onload=function(){
	//设置背景图片的尺寸
	setSize();
	
	//获取验证码
	getCode();
	
	//查询成绩
	queryResult();
}

//获取验证码
function getCode() {
	var timer = setInterval(function() {
		var ajax = new XMLHttpRequest();
		ajax.open("get", "php/CaptureGrade/CaptureCheckcode.php");
		ajax.send();
		ajax.onreadystatechange = function() {
			if(ajax.readyState == 4 && ajax.status == 200) {
				//json解析的异常处理
				try {
					var jsObj = JSON.parse(ajax.responseText);
					if(!JSON.parse(ajax.responseText)) {
						throw 'error';
					}
//					console.log(jsObj.result)
					if(jsObj.result == "success") {
						//设置验证码图片
						document.querySelector("#placeimg").style.backgroundImage = "url(value/images/CaptureGrade/checkcode.jpg)"
						clearInterval(timer);
					}
				} catch(er) {
					if(er == 'error') {
						document.body.innerHTML = "系统异常，请稍后再试"
					}
				}

			}
		}
	}, 1000)
}

//查询成绩
function queryResult(){
	//按钮的点击事件
	document.querySelector("#submit").onclick=function(){
		var checkcode=document.querySelector("#checkcode").value;
		console.log(checkcode)
		var schoolYear=document.querySelector("#schoolYear").value;
		console.log(schoolYear)
		var term=document.querySelector("#term").value;
		console.log(term)
		var str='';
		str+=checkcode;
		str+='&';
		str+=schoolYear;
		str+='&';
		str+=term;
		if(checkcode!=''&&schoolYear!=''&&term!=''){
			window.location.href="grade.html?"+str;
		}
		
	}
}
