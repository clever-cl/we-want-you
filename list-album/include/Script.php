<script src="./dist/plugins/jquery/jquery.min.js"></script>
<script src="./dist/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="./dist/js/adminlte.js"></script>
<script src="./dist/plugins/chart.js/Chart.min.js"></script>
<script src="./dist/js/demo.js"></script>
<script src="./dist/js/pages/dashboard3.js"></script>
<script src="./dist/plugins/datatables/jquery.dataTables.js"></script>
<script src="./dist/plugins/datatables/dataTables.bootstrap4.js"></script>
<script src="./dist/plugins/slimScroll/jquery.slimscroll.min.js"></script>
<script src="./dist/plugins/fastclick/fastclick.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<!-- page script -->
<script>
  $(function () {
    $("#example1").DataTable();
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false
    });
  });
</script>