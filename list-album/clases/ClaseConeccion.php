<?php
abstract class Coneccion
{
    private $dbh;
    public function Conecta()
    {   
        // local
        return $this->dbh=new PDO('mysql:host=127.0.0.1;dbname=music', "root","");
    
    }
} 
