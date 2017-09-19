<?php 
	/**
	*	capture checkcode image
	*	return json data
	*		result => success
	*	image path: /value/images/CaptureGrade/checkcode.jpg
	*/
	$rootPath = $_SERVER['DOCUMENT_ROOT'];
	$programName = 'Wechat/wechat';
	$dirPath = "python/CaptureGrade";
	system( sprintf( "python %s/%s/%s/CaptureViewState1.py", $rootPath, $programName, $dirPath ) );
	system( sprintf( "python %s/%s/%s/CaptureImage.py", $rootPath, $programName, $dirPath ) );

	$arr = Array(
		"result" => "success"
	);
	echo json_encode( $arr );
	return;
 ?>