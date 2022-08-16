<?php
    header("Access-Control-Allow-Origin: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    if (isset($_POST) && isset($_POST['subject']) && isset($_POST['email'])  && isset($_POST['message'])){
        extract($_POST);
        if(!empty($_POST["message"]) && !empty($_POST["email"]) && !empty($_POST["subject"])){
            $subject = trim(htmlspecialchars($_POST["subject"])); 
            $email = trim(htmlspecialchars($_POST["email"]));
            $message = trim(htmlspecialchars($_POST["message"]));
        } else {
            exit();
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            exit();
        }
        
        if (strlen($message) < 20 || strlen($message) > 500) {
            exit();
        }

        http_response_code(200);
        $to = "palois89@protonmail.com";
        $from = $_POST['email'];

        $headers = "MIME-Version: 1.0\r\n";
        $headers.= "Content-type: text/html; charset=UTF-8\r\n";
        $headers.= "From: <" . $from . ">";

        mail($to, $subjet, $message, $headers);

        echo json_encode(array(
            "sent" => true
        ));
    }else{

        // tell the user about error
        echo json_encode(["sent" => false, "message" => "Something went wrong"]);
    }

?>

  