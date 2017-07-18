//input:
//	cookie name
//output:
//	cookie
function getCookie( coo_nam ){
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