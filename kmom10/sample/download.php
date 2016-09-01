<?php
error_reporting(-1);
session_name(preg_replace('/[^a-z\d]/i', '', __DIR__));
session_start();

$action = empty($_GET['action']) ? null : $_GET['action'];
$item = isset($_POST['itemid']) ? $_POST['itemid'] : null;
$cssChanges = isset($_POST['css']) ? $_POST['css'] : null;
$jsChanges = isset($_POST['js']) ? $_POST['js'] : null;

if($action == "changeCss" || !isset($_SESSION['cart'])) {
    $myfile = fopen("style2.less", "w") or die("Unable to open file!");
    $txt = $cssChanges;
    fwrite($myfile, $txt);
    fclose($myfile);

    $myfile = fopen("req-info.js", "w") or die("Unable to open file!");
    $txt = $jsChanges;
    fwrite($myfile, $txt);
    fclose($myfile);

    $files = array('main2.js', 'shah-slider.html', 'style.less', 'style2.less', 'req-info.js', 'js/jquery-3.1.0.js', 'js/less.js', 'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg');
    $zipname = 'shah-slider.zip';
    $zip = new ZipArchive;
    $zip->open($zipname, ZipArchive::CREATE);
    foreach ($files as $file) {
        $zip->addFile($file);
    }
    $zip->close();
}

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
echo json_encode($_SESSION['cart']);