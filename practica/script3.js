class Mascota {
    constructor(id, nombre, raza, edad, precio, tipo) {
        this.id = id
        this.nombre = nombre
        this.raza = raza
        this.edad = edad
        this.precio = precio
        this.tipo = tipo
    }

    get Id() {
        return this.id
    }

    set Id(id) {
        return this.id = id
    }

}
class TiendaMascotas {
    constructor() {
        this.MascotaDisponible = []
        this.mascotasVendidas = []
    }
agregarMascota(mascota){
    this.MascotaDisponible.push(mascota)

}
eliminarMascota(mascota){
    let eliminarMascota=this.MascotaDisponible.indexOf(mascota)
    if (eliminarMascota != -1){
        this.MascotaDisponible.slice(eliminarMascota, 1)
        console.log("Se elimino")
    }else
    console.log ("error de parametros")
}
buscarMascota(mascota){
    let mascotaEncontrada = this.MascotaDisponible.find(e=>e.Id==mascota.Id)
    if(mascotaEncontrada != undefined){
        console.log(mascotaEncontrada)
        return mascota.id
    }

}

    comprarMascota(mascota,cliente){
        if (mascota.MascotaDisponible()){
            const venta = { cliente: cliente, mascota: mascota}
            this.mascotasVendidas.push(venta)
            this.eliminarMascota(mascota)
        }
    }
}

class Cliente {
    constructor(nombre, dui){
        this.nombre = nombre
        this.dui = dui
    }
    get Nombre(){
        return this.nombre
    }

    set Nombre(nombre){
        return this.nombre = nombre 
    }
}