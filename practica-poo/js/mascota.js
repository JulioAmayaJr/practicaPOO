class Mascota{
    constructor(id,nombre, raza,edad) {
        this.id=id;
        this.nombre = nombre;
        this.raza=raza;
        this.edad = edad;
      }

      listarMascotas(){
        fetch('http://localhost/practica-poo/select.php', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => {
            console.log(data); 
        
            data.forEach(element => {
               
                const fila = document.createElement("tr");
                const idCell = document.createElement("td");
                idCell.textContent = element.id_mascota;
                
        
                const opcionesCell = document.createElement("td");
                opcionesCell.classList.add("options");

                //Boton de editar
                const btnEditar = document.createElement("button");
                btnEditar.classList.add("btn", "btn-primary", "btn-sm", "update-button");
                btnEditar.textContent = "Editar";
                btnEditar.setAttribute("data-toggle", "modal");
                btnEditar.setAttribute("data-target", "#modalData");
                btnEditar.setAttribute("data-id", element.id_mascota);
                //Evento click boton editar
                btnEditar.addEventListener("click", (event) => {
                    event.preventDefault();
                    const idMascota = event.target.getAttribute("data-id");
                    txtId.value = idMascota;
                    

                });
                opcionesCell.appendChild(btnEditar);
    
                // Boton de eliminar
                const btnEliminar = document.createElement("button");
                btnEliminar.classList.add("btn", "btn-danger", "btn-sm", "delete-button");
                btnEliminar.textContent = "Eliminar";
                btnEliminar.setAttribute("data-id", element.id_mascota);
                btnEliminar.setAttribute("data-nombre", element.nombre);
                //Evento click boton eliminar
                btnEliminar.addEventListener("click", (event) => {
                    const idMascota = event.target.getAttribute("data-id");
                    this.nombre=event.target.getAttribute("data-nombre");
                   
                    this.eliminarMascota(idMascota)
                });
                opcionesCell.appendChild(btnEliminar);
            
               
                fila.appendChild(opcionesCell);
        
                const tbody = document.getElementById("tbodyMascota");
                tbody.appendChild(fila);
                console.log(element)
            });
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }

      listarMascotaPorId(){

      }

      agregarMascota() {
      
        }

        editarMascota(){
          
        }

        eliminarMascota(id){
            
           
           
        }


}


document.addEventListener("DOMContentLoaded", () => {
    const mascotas = new Mascota();
    mascotas.listarMascotas();
   
    const contenedorBotones = document.getElementById("tbodyMascota");
    const txtId = document.getElementById("txtId");
    const txtNombre=document.getElementById("txtNombre")
    const txtRaza=document.getElementById("txtRaza")
    const txtEdad=document.getElementById("txtEdad")
    const btnGuardar=document.getElementById("btnGuardar")
  

   
});
