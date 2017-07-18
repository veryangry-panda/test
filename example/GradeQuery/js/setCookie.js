//input:
//	name: cookie's name
//	val: cookie's value
//	days
//output:
//	false
//	true
var setCookie = function( name, val, days ){
	var date = new Date();
	date.setTime( date.getTime() + days * 24 * 60 * 60 * 1000 );
	document.cookie = name + "=" + val + ( (days==null) ? "" : ";expires=" + date.toGMTString() );
}