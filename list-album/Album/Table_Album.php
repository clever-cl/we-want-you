<div class="card-body">
    <table id="example1" class="table table-bordered table-hover">
        <thead>
            <tr>
                <th>Number</th>
                <th>Year</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Subgenre</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <?php
                foreach($alb as $all_album  ) {
                ?>        
                    <tr>
                        <td><?php echo $all_album['Number'] ?></td>
                        <td><?php echo $all_album['Year'] ?></td>                        
                        <td><?php echo $all_album["Artist"]; ?></td>
                        <td><?php echo $all_album['Genre'] ?></td>
                        <td><?php echo $all_album['Subgenre'] ?></td>
                        
                        <td>
                            <a href="#view_<?php echo $all_album["Number"]; ?>" class="btn btn-block btn-success" data-toggle="modal"> Eliminar</a>
                        </td>
                        <div class="modal fade" id="view_<?php echo  $all_album["Number"]; ?>">
                            <div class="modal-dialog">
                                <div class="modal-content modal-xl">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Editar Usuario <?php echo $all_album["Artist"];?></h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <?php
                                            include('view_album.php');
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tr>
                    <?php
                } ?>
        </tbody>
        <tfoot>
            <tr>
            <th>Number</th>
                <th>Year</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Subgenre</th>
                <th></th>
            </tr>
        </tfoot>
    </table>
</div>

<script>


f

</script>