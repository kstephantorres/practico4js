class Producto{
    #codigo
    #nombre
    #precio
    constructor(codigo, nombre, precio){
        this.#codigo=codigo
        this.#nombre=nombre
        this.#precio=precio
    }

    get codigo(){
        return this.#codigo
    }
    set codigo(codigo){
        this.#codigo=codigo
    }
    get nombre(){
        return this.#nombre
    }
    set nombre(nombre){
        this.#nombre=nombre
    }
    get precio(){
        return this.#precio
    }
    set precio(precio){
        this.#precio=precio
    }

    imprimir(){
        alert(`Producto
        \n-------------------
        \nCodigo: ${this.codigo}
        \nNombre: ${this.nombre}
        \nPrecio: ${this.precio}
        `)
    }
}

const productoA= new Producto('7 791234 56789 5','Vaso (Vidrio)',450)
const productoB= new Producto('7 791234 98765 5','Taza (Porcelana)',1500)
const productoC= new Producto('7 791234 25846 5','Plato (Porcelana)',1800) 

const productos= [productoA,productoB,productoC]

const btnListarProductos = document.getElementById('btnListarProductos')

btnListarProductos.addEventListener('click',()=>{
    productos.map((producto)=>{
        producto.imprimir()
    })
})