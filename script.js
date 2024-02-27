class Producto {
  constructor(nombre, precio, stock) {
    (this.nombre = nombre), (this.precio = precio), (this.stock = stock);
  }

  get Nombre() {
    return this.nombre;
  }

  get Precio() {
    return this.precio;
  }

  get Stock() {
    return this.stock;
  }

  actualizarInventario(cantidad) {
    return (this.stock -= cantidad);
  }
}
class Electronico extends Producto {
  constructor(nombre, precio, stock, tipo, id) {
    super(nombre, precio, stock);
    this.tipo = tipo;
    this.id = id;
  }

  get Id() {
    return this.id;
  }

  buscarPorID(id) {
    if (this.id == id) {
      return this.nombre;
    }
  }

  get Tipo() {
    return this.tipo;
  }
}
class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
  }
  get Nombre() {
    return this.nombre;
  }
}

function agregarProducto(producto) {
  const tabla = document.getElementById("tBodyTabla");
  const fila = document.createElement("tr");

  fila.classList.add(
    "odd:bg-white",
    "odd:dark:bg-gray-900",
    "even:bg-gray-50",
    "even:dark:bg-gray-800",
    "border-b",
    "dark:border-gray-700"
  );
  fila.innerHTML += `
  <td><input type="text" value="${producto.Id}"  /></td>
  <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${producto.Nombre}</th>
  <td class="px-6 py-4 price">${producto.Precio}</td>
  <td class="px-6 py-4">${producto.Stock}</td>
  <td class="px-6 py-4">${producto.Tipo}</td>
  <td class="px-6 py-4"><input type="number" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Ingrese la cantidad " required />
</td>
  `;
  tabla.appendChild(fila);
}
const buttonComprar = document.getElementById("comprar");
const laptop = new Electronico(
  'Apple MacBook Pro 17"',
  1000,
  10,
  "Portátil",
  1
);
const celular = new Electronico('Iphone 14"', 1500, 5, "Celular", 2);
console.log(laptop);
agregarProducto(laptop);
agregarProducto(celular);
buttonComprar.addEventListener("click", () => {
  const ids = document.querySelectorAll("#tBodyTabla input[type='text']");
  const name = document.querySelectorAll("#tBodyTabla th");
  const inputs = document.querySelectorAll("#tBodyTabla input[type='number']");
  const price = document.querySelectorAll("#tBodyTabla td.price");
  const compra = [];

  ids.forEach((id, index) => {
    if (inputs[index].value != "") {
      console.log(price);
      objectCompa = {
        id: id.value,
        nombre: name[index].textContent,
        precio: price[index].textContent,
        cantidad: inputs[index].value,
      };
      compra.push(objectCompa);
    }
  });

  let total = 0;
  compra.forEach((compra) => {
    total += compra.precio * compra.cantidad;
    console.log("El producto que compro es: " + compra.nombre);
    console.log("La cantidad es: " + compra.cantidad);
  });
  console.log("El total es: " + total);
});
