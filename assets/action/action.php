<?php
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'niazadnan77@gmail.com';
    $email_subject = 'New form submission';
    $email_body = "User name: $first_name.\n".
                  "User Email: $email.\n".
                  "User Message: $message.\n";
    
    $to = 'adnanniaz77@yahoo.com';
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html")
?>