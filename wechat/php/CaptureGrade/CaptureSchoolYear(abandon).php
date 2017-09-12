<?php 
	/**
	*	input:
	*		username
	*		password
	*		checkcode
	*	output:
	*		PS: part of output is included in python file
	*		result => fail
	*			failReason => username or password is empty
	*				or checkcode is empty
	*				or checkout is wrong
	*				or password is wrong
	*				or need to login in again
	*
	*		result => success
	*			schoolYear => an array, example, ["2016-2017", "2015-2016"]
	*/

	$username = $_POST["username"];
	$password = $_POST["password"];
	$checkcode = $_POST["checkcode"];

	// $username = "B16041718";
	// $password = "";
	// $checkcode = "4m1y";
	if( $username == "" || $password == "" ) {
		$arr = Array(
			"result" => "fail",
			"failReason" => "username or password is empty"
		);
		echo json_encode( $arr );
		return;
	}
	
	if( $checkcode != "" ) {
		$fout = fopen( "../../value/parameter/CaptureGrade/checkcode.txt", "w" );
		fwrite( $fout, $checkcode );
		fclose( $fout );
	} else {
		$arr = Array(
			"result" => "fail",
			"failReason" => "checkcode is empty"
		);
		echo json_encode( $arr );
		return;
	}

	$fout = fopen( "../../value/parameter/CaptureGrade/username.txt", "w" );
	$arr = array(
		"username" => $username,
		"password" => $password
	);
	$res = json_encode( $arr );
	fwrite( $fout, $res );
	fclose( $fout );

	exec( "python ../../python/CaptureGrade/Login.py", $info );
	if( $info ) {
		echo $info[0];
		return;
	}
	system( "python ../../python/CaptureGrade/CaptureSchoolYear.py" );
 ?>