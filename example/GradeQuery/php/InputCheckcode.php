<?php 
	$command = $_POST["command"];
	// echo $command;
	if( $command == "generate" ) {
		system("python ../python/CaptureViewState1.py");
		system("python ../python/CaptureImage.py");
		return;
	}
	if( $command == "store" ) {

		// echo "flag";
		$checkcode = $_POST["checkcode"];

		$fout = fopen( "../value/parameter/checkcode.txt", "w" );
		fwrite( $fout, $checkcode );
		fclose( $fout );

		// echo "file write success";
		return;
	}
 ?>