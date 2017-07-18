<?php 
	$command = $_POST["command"];
	echo $command;
	if( $command == "generate" ) {
		$path = "/data/wwwroot/www.bule007.cn/WeChat/GradeQuery/python/";
		system("python '$path'CaptureViewState1.py");
		system("python '$path'CaptureImage.py");
		return;
	}
	if( $command == "store" ) {

		echo "flag";
		$checkcode = $_POST["checkcode"];

		$fout = fopen( "../value/parameter/checkcode.txt", "w" );
		fwrite( $fout, $checkcode );
		fclose( $fout );

		echo "file write success";
		return;
	}
 ?>