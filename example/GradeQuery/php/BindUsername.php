<?php 
	$username = $_POST["username"];
	$password = $_POST["password"];
	include 'MysqlHeader.php';
	$sql = "select username from login where username = '$username'";
	$result = mysqli_query( $con, $sql);
	$test = mysqli_fetch_array( $result );
	if( $test[0] == "" ) {
		// username don't exit in the database
		$sql = "INSERT INTO login (username, password) VALUES ('$username', '$password')";
		mysqli_query( $con, $sql);
		echo "insert";
		return;
	} else {
		// exit
		$sql = "UPDATE login SET password = '$password' WHERE username = '$username'";
		mysqli_query( $con, $sql);
		echo "update";
		return;
	}
 ?>