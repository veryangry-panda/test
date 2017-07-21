<?php 
	/**
		input:
			username
			password
		output:
			result => fail
				failReason => username or password is empty
					or checkcode is empty
					or checkout is wrong
					or password is wrong
					or need to login in again

			result => success
				grade => json array, example:[{"className": "大学生心理健康", "credit": "0.5", "GPA": "4.50", "grade": "优秀"}, {"className": "大学英语Ⅱ", "credit": "3.0", "GPA": "4.10", "grade": "91"}]
	*/
	$username = $_POST["username"];
	$password = $_POST["password"];
	$checkcode = $_POST["checkcode"];
	// $username = "B16041718";
	// $password = "";
	// $checkcode = "rjkba";
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
	system( "python ../../python/CaptureGrade/CaptureViewState2.py" );
	system( "python ../../python/CaptureGrade/CaptureGrade.py" );
	return;
 ?>