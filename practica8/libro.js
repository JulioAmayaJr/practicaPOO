class Libro {
    constructor(titulo, autor, numPaginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
  
    obtenerTitulo() {
      return this.titulo;
    }
  
    obtenerAutor() {
      return this.autor;
    }
  
    obtenerNumPaginas() {
      return this.numPaginas;
    }
  }
export default Libro;