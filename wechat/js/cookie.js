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
