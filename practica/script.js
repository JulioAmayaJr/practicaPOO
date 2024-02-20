class Persona{
    constructor(nombre,genero,fechaNacimiento){
        this.nombre=nombre,
        this.genero=genero,
        this.fechaNacimiento=fechaNacimiento
    }

    get Nombre(){
        return this.nombre
    }

    verificarGenero(){
        if(this.genero=="M"){
            return "Masculino"
        }else if(this.genero=="F"){
            return "Femenino"
        }
    }

    obtenerFecha(){
        let fechaActual=new Date()
        let yearActual=fechaActual.getFullYear();
        let inputFecha=this.fechaNacimiento.split("-")
        let yearNacimiento=inputFecha[0]
        return yearActual - yearNacimiento
    }

    datosPersonales(){
        return this.nombre+" tiene "+this.obtenerFecha()+ " y es "+this.verificarGenero()
    }


}


const inputDate=document.getElementById("fecha")
const botonEvaluar=document.getElementById("evaluar")
const labelResultado=document.getElementById("resultado")
botonEvaluar.addEventListener("click",()=>{

let inputNombre=document.getElementById("nombre").value
let inputGenero=document.getElementById("genero").value
let inputFecha=document.getElementById("fecha").value
const persona1=new Persona(inputNombre,inputGenero,inputFecha)
//yyyy-mm-dd

labelResultado.innerText=persona1.datosPersonales()



})