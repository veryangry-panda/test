<?php 
	/**
	*	input:
	*		username
	*		password
	*	output:
	*		json data
	*			username => inputed username
	*			password => inputed password
	*/
	$username = $_POST["username"];
	$password = $_POST["password"];
	// $username = "aa";
	// $password = "b";
	$arr = Array(
		"username" => $username,
		"password" => $password
	);
	$json = json_encode( $arr );
	echo $json;
	return;
 ?>