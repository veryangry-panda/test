<?php 
	/**
	*	capture checkcode image
	*	return json data
	*		result => success
	*	image path: /value/images/CaptureGrade/checkcode.jpg
	*/
	system( "python ../../python/CaptureGrade/CaptureViewState1.py" );
	system( "python ../../python/CaptureGrade/CaptureImage.py" );

	$arr = Array(
		"result" => "success"
	);
	echo json_encode( $arr );
	return;
 ?>