//input:
//	name: cookie's name
//	val: cookie's value
//	days
//output:
//	false
//	true
function set_cookie_func( name, val, days ){
	var date = new Date();
	date.setTime( date.getTime() + days * 24 * 60 * 60 * 1000 );
	document.cookie = name + "=" + val + ( (days==null) ? "" : ";expires=" + date.toGMTString() );
}

//input:
//	cookie name
//output:
//	cookie
function get_cookie_func( coo_nam ){
	var name = coo_nam + "=";
	var ca = document.cookie.split(';');
	for( var i = 0; i < ca.length; i++ ){
		var pre_coo = ca[i].trim();
		// console.log(pre_coo);
		if( pre_coo.indexOf(coo_nam) == 0 ){
			return pre_coo.substring( coo_nam.length + 1, pre_coo.length );
		}
	}
	return '';
}
//检查cookie
//function checkCookie(ele){
//	value=getCookie(ele)
//	if (value!=null && value!="" ){
////	  	alert('Welcome again '+username+'!')
//		return value;
//	}
////	else{
////		username=prompt('Please enter your name:',"")
//		//跳转到登录界面
//		
////	  	if (username!=null && username!=""){
////	    	setCookie('username',username,365)
////	    }
////	}
//	return '';
//}
//设置背景图片的尺寸
function setSize() {
	var winWidth = 0;
	var winHeight = 0;

	(function findDimensions() //函数：获取尺寸
	{
		//获取窗口宽度
		if(window.innerWidth) {
			winWidth = window.innerWidth;
		} else if((document.body) && (document.body.clientWidth)) {
			winWidth = document.body.clientWidth;
		}
		//获取窗口高度
		if(window.innerHeight) {
			winHeight = window.innerHeight;
		} else if((document.body) && (document.body.clientHeight)) {
			winHeight = document.body.clientHeight;
		}
		//通过深入Document内部对body进行检测，获取窗口大小
		if(document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
			winHeight = document.documentElement.clientHeight;
			winWidth = document.documentElement.clientWidth;
		}

	})();
//	findDimensions();
//	console.log(winHeight)
//	console.log(winWidth)
	//设置背景图片，使背景图片填充满屏幕
	var body = document.getElementsByTagName("body")[0];
	//          body.style.width=winWidth;
	//          body.style.height=winHeight;
	var str = '';
	str += winWidth;
	str += 'px ';
	str += winHeight;
	str += 'px'
	body.style.backgroundSize = str;
}