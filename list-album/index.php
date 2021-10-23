<?php
    require_once('./Clases/ClaseAlbum.php');

    
    if (isset($_POST["delete_record_usr"])) {
       
        echo $_POST["Number"];
        $tra=new Album();
        $tra->deleteAlbum($_POST["Number"]);
    }

    $album=new Album();
    $alb=$album->get_all_album();


?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <?php 
            require_once('./Include/Header.php');
        ?>
    </head>
    <body class="hold-transition sidebar-mini">
 
        <div class="content-wrapper">        
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">Lista </h1>
                        </div>
                    <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Lista </li>
                    </ol>
                </div>
            </div>
        </div>

        <!-- Inicio de Contenidos -->
        <section class="content">
            <div class="card">  
                <?php
                    require_once('./album/Table_Album.php');
                ?>
            </div>            
           
        </section>
        <?php
           require_once('./Include/Script.php');
        ?>
    </body>
</html>
