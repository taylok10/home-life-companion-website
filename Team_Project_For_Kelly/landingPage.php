<!DOCTYPE html>
<html lang="en" id="html" >
	<head>
		<meta charset="utf-8" />
		<title>Home Page</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" /> 
		<link rel="stylesheet" href="css/style.css" />
	</head>
	<body>
		<header id="main_page_header">
			<div id="text_header">
			<h2 > Home Life Companion</h2>
			</div>
		</header>
		<main>
			<h1>Welcome to our website</h1>
			<p>We are developing an upcoming app that will allow you to ...</p><br>
			<p>Please see our introduction video below to find out what its all about</p>
			<div id="video">
				<br>
				<video src="video/final-movie.mp4" controls width="600px" ></video>
				<br>
			</div>
			<br>
			<p> Interested? Please enter you email below so that we can let you know when it's available</p>
			<form class="login" action="landingPage.php" method = "POST">
				<label> Please enter your email</label>
				<input type="email" name="email" required>
				<input type="submit" value="Submit" class="btn btn-primary" id="submit" name="login">
			</form>
		</main>	
	</body>
	<?php 
			include_once('connectdb.php');
			
			$email = htmlspecialchars($_POST['email']);
			
			try {
				$query = $db->prepare("INSERT INTO emailregistration (email) VALUES (?)");
				$query->execute(array($email));
				echo "<script>";
					echo "alert(\"Thankyou for submitting your email \"); ";
				echo "</script>";
			}
			catch (PDOException $ex) {
				echo("Failed to save email.<br>");
				echo($ex->getMessage());
				exit;
			}
	?>
		
</html>
