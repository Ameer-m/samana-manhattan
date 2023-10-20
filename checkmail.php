<?php
  // Get the form data
  $name = $_POST['name']; 
$email = $_POST['email']; 
$phone_number = $_REQUEST['phone_number']['full'];
$city = $_POST['city'];

  // Set the email address that you want to send the form data to
  $to = 'keymaxmarketing107@gmail.com';

  // Set the subject of the email
  $subject = 'arabian ranches en Lead';

  // Build the message that you want to send
  $message = "Name: $name\nEmail: $email\n Phone: $phone_number\ncity: $city";

  // Set the headers of the email
  $headers = "From: $email\r\nReply-To: $email\r\n";

  // Send the email
  mail($to, $subject, $message, $headers);

  // Redirect the user to a thank you page
  header('Location: thank-you.html');
  exit;

?>