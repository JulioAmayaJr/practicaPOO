class Tienda{
    constructor(bebida,descuento,cantidad){
        this.bebida=bebida,
        this.descuento=descuento,
        this.cantidad=cantidad
    }


    getTotal(){
        if(this.descuento){
            const objetoBedidaDescuento={
                coca: "0.50",
                pepsi: "0.50",
                up : "0.50",
                pilsener: "0.75"
            }
            let bebidaPrecio=objetoBedidaDescuento[this.bebida]
            return this.cantidad * bebidaPrecio
        }else{
            const objetoBedida={
                coca: "0.75",
                pepsi: "0.75",
                up : "0.75",
                pilsener: "1.00"
            }
            let bebidaPrecio=objetoBedida[this.bebida]
            return this.cantidad * bebidaPrecio
        }
    }
    datosDeVenta(){
        return "El total es: "+this.getTotal()
    }

}


const botonEvaluar=document.getElementById("evaluar")
const check2=document.getElementById("descuento")
let estado
check2.addEventListener("change",()=>{
    if(check2.checked){
        estado=true
    }else{
        estado=false
    }
})


botonEvaluar.addEventListener("click",()=>{
    let selectBebida=document.getElementById("bebidas").value
    let cantidad=document.getElementById("cantidad").value
    const venta1=new Tienda(selectBebida,estado,cantidad)
    alert(venta1.datosDeVenta())
   
    
})