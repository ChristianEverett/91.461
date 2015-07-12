<?php
	$to = $_POST["email"];
	$subject = $_POST["subject"];
	$message = $_POST["message"];
	
	//mail(to,subject,message,headers,parameters)
	mail($to, $subject, $message, "From:Do_Not_Reply@gmail.com" );
	
	//mail("christian.everett@comcast.net","test","test","From: christian.everett1@gmail.com");

?>