<?php 
	$command = $_POST["command"];
	if( $command == "generate" ) {
		exec("python ../python/CaptureViewState1.py");
		exec("python ../python/CaptureImage.py");
		return;
	}
	if( $command == "store" ) {
		$checkcode = $_POST["checkcode"];
		$fout = fopen( "../value/parameter/checkcode.txt", "w" );
		fwrite( $fout, $checkcode );
		fclose( $fout );
		return;
	}
 ?>