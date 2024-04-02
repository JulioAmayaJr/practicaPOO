import Libro from './libro.js';
import Prestamo from './prestamo.js';

const libro = new Libro('Harry Potter y el cáliz de fuego', 'J. K. Rowling', 640);
console.log(libro.obtenerTitulo()); 

const fechaInicio = new Date(2024, 3, 1); 
const fechaFin = new Date(2024, 3, 15); 
const prestamo = new Prestamo(libro, fechaInicio, fechaFin);
console.log(prestamo.obtenerLibro().obtenerTitulo());

