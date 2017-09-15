window.onload=function(){
	//设置背景图片的尺寸
	setSize();
	
	//处理成绩
	setScore();

	// setColor();
}

function setScore() {
	var str = window.location.search;

	var arr = str.split('&');
	var checkcode = arr[0].slice(1);

	var schoolYear = arr[1];

	var term = arr[2];

	var username = get_cookie_func("username");
	var password = get_cookie_func("password");
	var ajax = new XMLHttpRequest();
	ajax.open('post', 'php/CaptureGrade/CaptureScore.php');
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send('username=' + username + '&password=' + password + '&checkcode=' + checkcode + '&schoolYear=' + schoolYear + '&term=' + term);
	ajax.onreadystatechange = function() {
<<<<<<< HEAD
		if(ajax.readyState == 4 && ajax.status === 200) {
			console.log( ajax.responseText )
            console.log( "b" )
=======
		if(ajax.readyState == 4 && ajax.status == 200) {
			console.log( ajax.responseText )
>>>>>>> 005c52adbafb9593c4cc3680154f1ebd7d2371fc
			var jsObj = JSON.parse(ajax.responseText);
			if(jsObj.result == "success") {
				// console.log(jsObj.result)
				// console.log(jsObj["GPA"]);
				// console.log(jsObj);
				var strJson = '';
				for(var i = 0; i < jsObj.grade.length; i++) {
					strJson += '<tr>'
					strJson += '<td>' + jsObj.grade[i].className + '</td>'
					strJson += '<td>' + jsObj.grade[i].credit + '</td>'
					strJson += '<td>' + jsObj.grade[i].GPA + '</td>'
					strJson += '<td>' + jsObj.grade[i].grade + '</td>'
					strJson += '</tr>'
				}
				var tbody = document.querySelector("#tbody")
				tbody.innerHTML = strJson;
				document.querySelector("#loading").parentNode.removeChild(document.querySelector("#loading"));

                setColor();


			} else {
				document.querySelector("#loading").parentNode.removeChild(document.querySelector("#loading"));
				document.body.innerHTML = jsObj.result;
				document.body.innerHTML = jsObj.failReason;
				var index = 0;
				//延迟5秒钟
				var timer = setInterval(function() {
					index++;
					if(index == 5) {
						clearInterval(timer);
					}
				}, 1000)
				//					window.location.href="bind.html?"+target;
				window.location.href = "bind.html?";


			}

		}
	}
}

function setColor() {
    var Tr =document.querySelectorAll("tr");
    for(var i=0;i<Tr.length;i++){
        if(i%2==0){
            Tr[i].className="color1";
        }
        else {
            Tr[i].className="color2";
        }
    }

}