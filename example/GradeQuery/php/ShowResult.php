<?php 
	$username = $_POST["username"];
	if( $username == "" ) {
		echo "username is empt";
		return;
	}
	include 'MysqlHeader.php';
	$sql = "select password from login where username = '$username'";
	$result = mysqli_query( $con, $sql);
	$test = mysqli_fetch_array( $result );
	$password = $test[0];
	$fout = fopen( "../value/parameter/username.txt", "w" );
	$arr = array(
		"username" => $username,
		"password" => $password
	);
	$res = json_encode( $arr );
	fwrite( $fout, $res );
	fclose( $fout );

	exec( "python ../python/Login.py" );
	exec( "python ../python/CaptureViewState2.py" );
	exec( "python ../python/CaptureGrade.py" );

	$filePath = "../value/parameter/gradeJson.txt";
	$fin = fopen( $filePath, "r" );
	$res = fread( $fin, filesize($filePath) );
	echo $res;
	return;
 ?>