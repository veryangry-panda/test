<?php 
	/**
	*	capture checkcode image
	*	return json data
	*		result => success
	*	image path: /value/images/CaptureGrade/checkcode.jpg
	*/
	exec( "python ../../python/CaptureGrade/CaptureViewState1.py" );
	exec( "python ../../python/CaptureGrade/CaptureImage.py" );

	$arr = Array(
		"result" => "success"
	);
	echo json_encode( $arr );
	return;
 ?>