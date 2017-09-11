window.onload=function(){
	//设置背景图片的尺寸
	setSize();
	
	//绑定正方账号
	bindAccount();
}



//绑定正方账号
function bindAccount() {
	document.querySelector("#submit").onclick = function() {
		//当触发点击事件时，获取用户的名字和密码
		var username = document.querySelector("#account").value
		var password = document.querySelector("#password").value;
		//对名字和密码是否为空进行判断
		if(username != '' && password != '') {
			//如果不为空存入cookie中
			set_cookie_func("username", username, 30)
			set_cookie_func("password", password, 30)
			//进入验证码界面
			window.location.href = "verification.html";
		}

	}
}
