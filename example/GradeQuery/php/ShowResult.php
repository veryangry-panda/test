<?php 
	$username = $_POST["username"];
	$password = $_POST["password"];
	if( $username == "" || $password == "" ) {
		echo "username is empt";
		return;
	}

	$fout = fopen( "../value/parameter/username.txt", "w" );
	$arr = array(
		"username" => $username,
		"password" => $password
	);
	$res = json_encode( $arr );
	fwrite( $fout, $res );
	fclose( $fout );

	system( "python ../python/Login.py" );
	exec( "python ../python/CaptureViewState2.py" );
	system( "python ../python/CaptureGrade.py" );
	return;
 ?>