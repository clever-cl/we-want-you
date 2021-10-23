<form class="form-horizontal" accept-charset="UTF-8" action="index.php"  method="post">
    <div class="card-body">
        <div class="row">
            <div class="col-4">
                <label for="exampleInputEmail1"></label>
                <input type="text" 
                       name="Number" 
                       class="form-control" 
                       placeholder="Rut" 
                       value="<?php echo $all_album['Number']  ?>" 
                       disable>
            </div>
        </div>
        <div class="row">
            <div class="col-5">
                <label for="exampleInputEmail1"></label>
                <input type="text" 
                       name="Year" 
                       class="form-control" 
                       placeholder="Nombres" 
                       value="<?php echo  $all_album['Year']; ?>" 
                       disable>
            </div>
            <div class="col-5">
                <label for="exampleInputEmail1"></label>
                <input type="text" 
                       name="Artist" 
                       class="form-control" 
                       placeholder="Apellidos" 
                       value="<?php echo $all_album["Artist"] ?>" 
                       disable>
            </div>
        </div>
        <div class="row">
            <div class="col-5">
                <label for="exampleInputEmail1"></label>
                <input type="text" 
                       name="Genre" 
                       class="form-control" 
                       placeholder="Email" 
                       value="<?php echo $all_album['Genre'] ?>" disable>
            </div>
            <div class="col-5">
                <label for="exampleInputEmail1"></label>
                <input type="text" 
                       name="Subgenre" 
                       class="form-control" 
                       placeholder="Fecha Activacion" 
                       value="<?php echo $all_album['Subgenre'] ?>" 
                       disable>
            </div>
        </div>                       
    </div>
    <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" name="delete_record_usr" class="btn btn-primary">Delete</button>
    </div>
</form>
