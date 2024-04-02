class Prestamo {
    constructor(libro, fechaInicio, fechaFin) {
      this.libro = libro;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
    }
  
    obtenerLibro() {
      return this.libro;
    }
  
    obtenerFechaInicio() {
      return this.fechaInicio;
    }
  
    obtenerFechaFin() {
      return this.fechaFin;
    }
  }
  
  export default Prestamo;
  