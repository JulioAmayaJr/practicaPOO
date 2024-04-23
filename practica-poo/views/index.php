<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></head>
<body>
    
<div class="card shadow mb-4">
    <div class="card-header py-3 bg-second-primary">
        <h6 class="m-0 font-weight-bold text-black">Lista de Mascotas</h6>
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-sm-3">
                <button class="btn btn-success" id="btnNewUser" data-toggle="modal" data-target="#modalData"><i class="fas fa-user-plus"></i> Nueva Mascota</button>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-sm-12">
                <table class="table table-bordered" id="tbdata" cellspacing="0" style="width:100%">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Raza</th>
                            <th>Edad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody id="tbodyMascota">
                       
                          
                      
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>



<!--  Modal-->
<div class="modal fade" id="modalData" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h6>Detalle Mascota</h6>
                <button class="close" type="button" id="btnClose" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">

                <input type="text" value="0" id="txtId">
                <div class="row">
                    <div class="col-sm-8">
                    <div class="form-row">
                        <div class="form-group col-sm-6">
                            <label for="txtNombre">Nombre</label>
                            <input type="text" class="form-control form-control-sm input-validar" id="txtNombre" name="name" required>
                        </div>
                        <div class="form-group col-sm-6 d-flex align-items-end">
                            <div class="w-100">
                                <label for="txtEdad">Edad</label>
                                <input type="number" class="form-control form-control-sm input-validar" id="txtEdad" name="name" required>
                            </div>
                            <label for="txtEdad" class="ml-2 mb-0">Meses</label>
                        </div>
                    </div>

                        <div class="form-row">

                        </div>
                        <div class="form-row">
                        <div class="form-group col-sm-6">
                                <label for="txtRaza">Raza</label>
                                <input type="text" class="form-control form-control-sm input-validar" id="txtRaza" name="name" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <img id="imgUser" style="max-width:200px;" src="https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-veterinario-dibujado-mano_52683-132120.jpg" class="rounded mx-auto d-block" alt="Foto usuario">
                    </div>

                </div>

            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary btn-sm" id="btnGuardar">Guardar</button>


                <button class="btn btn-danger btn-sm" type="button" data-dismiss="modal">Cancel</button>
            </div>

        </div>
    </div>
</div>
<script src="../js/mascota.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
</body>
</html>