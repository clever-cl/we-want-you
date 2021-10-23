<?php
require_once("ClaseConeccion.php");
class album extends  Coneccion
{
    private $dba            ;    private $album    ;
    public function __construct()
    {
        $this->dba=parent::conecta();
        $this->album  =   array();
    }
    private function set_names()
    {
        return $this->dba->query("SET NAMES 'utf8'");    
    }
    
    
    public function deleteAlbum($Number)
    {
        if(isset($Number))
        {
            self::set_names();
            $sql="DELETE FROM album WHERE album.Number = ?";
            $stmt=$this->dba->prepare($sql);
            $stmt->execute( array($Number) ) ;
            return null;
        }else
        {
            header("Location: index.php");
        }
    }

    public function get_all_album()
    {
        self::set_names();
        $sql="SELECT album.Number, album.Year, album.Artist, album.Genre, album.Subgenre from album ";
        foreach ($this->dba->query($sql) as $row)
            {
                $this->album[]=$row;
            }  
            return $this->album;
            $this->dba=null;
    }
    
}
?>