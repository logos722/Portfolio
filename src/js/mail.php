<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient_email = "logos535@gmail.com"; // Замените на свой адрес электронной почты
    $name = $_POST["name"];
    $text = $_POST["text"];
    $sender_email = $_POST["email"];

    // Дополнительные заголовки
    $headers = "From: $sender_email\r\n";
    $headers .= "Reply-To: $sender_email\r\n";

    // Отправка письма
    mail($recipient_email, $name, $text, $headers);
};
?>
