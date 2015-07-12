<?php

const BytesPerMegaByte = 1048576;
const MaxMegaBytes = 500;

if ($_FILES['userfile']['error'] == UPLOAD_ERR_INI_SIZE || $_FILES["file"]["error"] > 0)
  {
      //echo "Error: " . $_FILES["file"]["error"] . "<br>";
  }
else
  {//if upload greater then limit
	if($_FILES["file"]["size"]/BytesPerMegaByte > MaxMegaBytes)
	{
		echo "File to Large Max 500 MegaBytes";
	}
	else
	{
		echo "Upload successful! <br>";
		echo "Upload: " . $_FILES["file"]["name"] . "<br>";
		echo "Type: " . $_FILES["file"]["type"] . "<br>";
		echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
		echo "Stored in: " . $_FILES["file"]["tmp_name"];
		
		/*if(file_exists("upload/" . $_FILES["file"]["name"]))
		{
			unlink("upload/" . $_FILES["file"]["name"]);
		}*/
		
		move_uploaded_file($_FILES["file"]["tmp_name"],"upload/" . $_FILES["file"]["name"]);
	 }
  }
?>