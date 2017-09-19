<?php 
	/**
	*	input:
	*		username
	*		password
	*		checkcode
	*		schoolYear, example, 2016-2017
	*		term, example, 1
	*	output:
	*		PS: part of output is included in python file
	*		result => fail
	*			failReason => username or password is empty
	*				or checkcode is empty
	*				or checkout is wrong
	*				or password is wrong
	*				or need to login in again
	*				or school year or term is empty
	*
	*		result => success
	*			grade => json array, example:[{"className": "大学生心理健康", "credit": "0.5", "GPA": "4.50", "grade": "优秀"}, {"className": "大学英语Ⅱ", "credit": "3.0", "GPA": "4.10", "grade": "91"}]
	*			GPA => 5.01
	*/

	$username = $_POST["username"];
	$password = $_POST["password"];
	$checkcode = $_POST["checkcode"];
	$schoolYear = $_POST["schoolYear"];
	$term = $_POST["term"];

	$rootPath = $_SERVER["DOCUMENT_ROOT"];
	$programDir = "Wechat/wechat";
	$valuePath = "value/parameter/CaptureGrade";
	$pythonPath = "python/CaptureGrade";

	// $username = "B16041718";
	// $password = "";
	// $checkcode = "4hc1";
	// $schoolYear = "2016-2017";
	// $term = "2";
	if( $username == "" || $password == "" ) {
		$arr = Array(
			"result" => "fail",
			"failReason" => "username or password is empty"
		);
		echo json_encode( $arr );
		return;
	}
	if( $schoolYear == "" || $term == "" ) {
		$arr = Array(
			"result" => "fail",
			"failReason" => "school year or term is empty"
		);
		echo json_encode( $arr );
		return;
	} else {
		$arr = Array(
			"schoolYear" => $schoolYear,
			"term" => $term
		);

		$fout = fopen( sprintf( "%s/%s/%s/term.txt", $rootPath, $programDir, $valuePath ), "w" );
		fwrite( $fout, json_encode( $arr ) );
		fclose( $fout );
	}
	
	if( $checkcode != "" ) {
		$fout = fopen( sprintf( "%s/%s/%s/checkcode.txt", $rootPath, $programDir, $valuePath ), "w" );
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

	$fout = fopen( sprintf( "%s/%s/%s/username.txt", $rootPath, $programDir, $valuePath ), "w" );
	$arr = array(
		"username" => $username,
		"password" => $password
	);
	$res = json_encode( $arr );
	fwrite( $fout, $res );
	fclose( $fout );

	exec( sprintf( "python %s/%s/%s/Login.py", $rootPath, $programDir, $pythonPath ), $info );
	if( $info ) {
		echo $info[0];
		return;
	}
	system( sprintf( "python %s/%s/%s/CaptureViewState2.py", $rootPath, $programDir, $pythonPath ) );
	system( sprintf( "python %s/%s/%s/CaptureGrade.py", $rootPath, $programDir, $pythonPath ) );
	return;
 ?>