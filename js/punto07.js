class Contacto{
    #nombre
    #telefono

    constructor(nombre, telefono){
        this.#nombre = nombre
        this.#telefono = telefono
    }    
    get nombre() {
        return this.#nombre
      }
    
    set nombre(nombre) {
      this.#nombre = nombre
    }
    
    get telefono() {
      return this.#telefono
    }
    
    set telefono(telefono) {
      this.#telefono = telefono
    }
    mostrarContacto(){
        return `
        Nombre: ${this.nombre}
        Telefono: ${this.telefono} 
        `
    }  
}


class Agenda{
    #contactos
    #maximo
    constructor(maximo){
        this.#maximo = maximo
        this.#contactos = []
    }

    get contactos() {
        return this.#contactos
    }

    setContactos(contacto) {
        this.#contactos.push(contacto)
    }

    get maximo() {
        return this.#maximo
    }

    set maximo(maximo) {
        this.#maximo = maximo
    } 
    buscar(nombre){
        const longitud = this.contactos.length
        let indice =-1
        for(let i=0; i<longitud;i++){
            if(this.contactos[i].nombre === nombre)
            indice = i
        }

        return indice
    }    

    repetido(contacto){
       
        if(this.contactos.length !== 0)
        {            
            let bandera = false

            if(this.buscar(contacto.nombre) !==-1){
                bandera = true
            }  
            return bandera
        }else{
            return false
        }
    }
    cupo(){
        return this.contactos.length < this.maximo
    }

    aniadirContacto(contacto){
        if(this.cupo() ){
           
            if(!this.repetido(contacto)){
                this.setContactos(contacto)
            }
            else{
                alert('El contacto esta repetido')
            }
        }else{
            alert('La agenda esta llena')
        }
    }

    listarContactos(){
        const longitud = this.contactos.length
        let mensaje=''
        for(let i=0; i<longitud;i++){
            mensaje += this.contactos[i].mostrarContacto()+'\n'
        }
        return mensaje
    }

}

const btntamanioAgenda = document.getElementById('btntamanioAgenda')
const btnAbrirMenu = document.getElementById('btnAbrirMenu')

let agenda 

btntamanioAgenda.addEventListener('click',()=>{
    const tamanio = parseInt(prompt('Definir tamaño de la agenda:'))
    if(tamanio){
        agenda = new Agenda(tamanio)
        btntamanioAgenda.disabled=true
        btnAbrirMenu.disabled=false
    }else{
        alert('No ingreso un tamaño valido')
    }
})



btnAbrirMenu.addEventListener('click',()=>{
    let op
    do{
        op = parseInt(prompt(`
        ---------------- MENÚ --------------
        1 - Añadir contacto
        2 - Consultar contacto
        3 - Listar contactos
        4 - Buscar contacto
        5 - Eliminar contacto
        6 - Agenda llena
        7 - Disponibilidad de la agenda
        `))
        switch(op){
            case 1:{    
                const nombre = prompt('Ingrese el nombre: ')
                const numero = parseInt(prompt('Ingrese el número: ')) 
                if(numero) 
                {
                    const contacto = new Contacto(nombre,numero)
                    agenda.aniadirContacto(contacto) 
                }else{
                    alert('Ingreso un dato invalido')
                }
                break
            }
            case 2:{
                const nombre = prompt('Ingrese el nombre: ')
                const numero = parseInt(prompt('Ingrese el número: ')) 
                if(numero) 
                {
                    const contacto = new Contacto(nombre,numero)
                    agenda.repetido(contacto) ? alert('El contacto existe en la agenda') : alert('El contacto NO existe en la agenda')
                }else{
                    alert('Ingreso un dato invalido')
                }
                break
            }
            case 3:{
                alert(agenda.listarContactos())
                break
            }
            case 4:{
                const nombre = prompt('Ingrese el nombre del contacto: ')
                const index = agenda.buscar(nombre)
                index === -1 ? alert('No encontro el contacto') : alert(`El número del contacto es: ${agenda.contactos[index].telefono}`)
                break
            }
            case 5:{
                const nombre = prompt('Ingrese el nombre del contacto: ')
                const index = agenda.buscar(nombre)
                
                if (index === -1){
                    alert('No encontro el contacto')
                }else{
                    agenda.contactos.splice(index,1)
                }
                break
            }
            case 6:{
                agenda.cupo() ? alert('La agenda NO esta llena') : alert('La agenda esta llena')
                break
            }
            case 7:{
                const cupos = agenda.maximo - agenda.contactos.length

                if(agenda.cupo()){
                    alert(`Se puede ingresar ${cupos} contatos mas.`)
                }else{
                    alert('La agenda esta llena')
                }

                break
            }
            default: alert('Ingresó una opcion invalida. Se cerrará el menú...')
        }
    }while( op === 1 || op === 2 || op === 3 || op === 4 || op === 5 || op === 6 || op === 7 )

})
