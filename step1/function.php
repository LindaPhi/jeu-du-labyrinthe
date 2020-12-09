<?php
$file = 'labyrinthes.json';
$data = file_get_contents($file);
$obj = json_decode($data);
echo $obj;
?>