<?php
if($_POST)
{
    $to_Email = "support@wilylab.com"; //Replace with recipient email address
    $to_Email = "himel.ceps@gmail.com"; //Replace with recipient email address
    
    //check $_POST vars are set, exit if any missing
    if(!isset($_POST["name"]) || !isset($_POST["email"]) || !isset($_POST["message"]))
    {
        $response = json_encode(array('type' => 'error', 'message' => 'Input fields are empty!'));
        die($response);
    }

    //Sanitize input data using PHP filter_var().
    $user_Name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $user_Email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $user_Subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
    $user_Message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    
    //additional php validation
    if (strlen($user_Name) < 4) // If length is less than 4 it will throw an HTTP error.
    {
        $response = json_encode(array('type' => 'error', 'message' => 'Name is too short or empty!'));
        die($response);
    }
	
    if (!filter_var($user_Email, FILTER_VALIDATE_EMAIL)) //email validation
    {
        $response = json_encode(array('type' => 'error', 'message' => 'Please enter a valid email!'));
        die($response);
    }
	
    if (strlen($user_Message) < 5) //check emtpy message
    {
        $response = json_encode(array('type' => 'error', 'message' => 'Too short message! Please enter something.'));
        die($response);
    }
    
    //proceed with PHP email.
    $headers = 'From: '.$user_Email.'' . "\r\n" . 'Reply-To: '.$user_Email.'' . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    
    // send mail
    $sent_Mail = @mail($to_Email, $user_Subject, $user_Message . '  -' . $user_Name, $headers);
	
	if ($sent_Mail)
	{
		$response = json_encode(array('type'=>'success', 'message' => 'Your message has been sent successfully.'));
		
	} else {
	
		$response = json_encode(array('type'=>'error', 'message' => 'Sorry, Server error! Please, try again.'));
	}
	
	echo $response;
 }
?>