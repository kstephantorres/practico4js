class Persona{
    #nombre 
    #edad
    #dni
    #sexo //(H hombre, M mujer), 
    #peso  
    #altura
    #nacimiento
    #generacion
    
    constructor(nombre,edad,sexo,peso,altura,nacimiento,generaciones){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = this.generarDni();
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#nacimiento = nacimiento;
        this.#generacion = this.darGeneracion(generaciones)   
    }
    get nombre(){
        return this.#nombre;
    }
    
    set nombre(nombre){
        this.#nombre = nombre;
    }
    
    get edad(){
        return this.#edad;
    }
    
    set edad(edad){
        this.#edad = edad;
    }
    
    get dni(){
        return this.#dni;
    }
    
    set dni(dni){
        this.#dni = dni;
    }
    
    get sexo(){
        return this.#sexo;
    }
    
    set sexo(sexo){
        this.#sexo = sexo;
    }
    
    get peso(){
        return this.#peso;
    }
    
    set peso(peso){
        this.#peso = peso;
    }
    
    get altura(){
        return this.#altura;
    }
    
    set altura(altura){
        this.#altura = altura;
    }
    
    get nacimiento(){
        return this.#nacimiento;
    }
    
    set nacimiento(nacimiento){
        this.#nacimiento = nacimiento;
    }
    get generacion(){
        if(this.#generacion) 
            return this.#generacion
        else{
            return ''
        }
    }
    
    set generacion(generacion){
        this.#generacion = generacion;
    }
    darGeneracion(generaciones){
        let g = null
        if(generaciones)
        {
            generaciones.map((generacion)=>{
                if (this.nacimiento >= generacion.marcoInicio && this.nacimiento <= generacion.marcoFinal) {
                    g =  generacion
                }
            })
        }
        return g
    }
    mostrarGeneracion(){
        return `Nombre: ${this.nombre}
        \nAño de nacimiento: ${this.nacimiento}
        \nGeneracion: ${this.generacion.nombre}
        \nRasgo Característico: ${this.generacion.rasgo}
        `
    }
    esMayorDeEdad(){
        if(this.edad>=18)
            return 'Es mayor de edad'
        else
            return 'Es menor de edad' 
    }
    mostrarDatos(){
        return `Nombre: ${this.nombre}
        \nEdad: ${this.edad}
        \nDNI: ${this.dni}
        \nSexo: ${this.sexo}
        \nPeso: ${this.peso}
        \nAltura: ${this.altura}
        \nNacimiento: ${this.nacimiento}
        \nGENERACIÓN: ${this.generacion.mostrarDatos()} 
        `
    }
    generarDni(){
        return Math.floor(Math.random() * 90000000) + 10000000;
    }
}

class Generacion{
    #nombre
    #marcoInicio
    #marcoFinal
    #poblacion
    #circunstancia
    #rasgo
    constructor(nombre,marcoInicio,marcoFinal,poblacion,circunstancia,rasgo){
        this.#nombre = nombre;
        this.#marcoInicio = marcoInicio;
        this.#marcoFinal = marcoFinal;
        this.#poblacion = poblacion;
        this.#circunstancia = circunstancia;
        this.#rasgo = rasgo;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }
    get marcoInicio(){
        return this.#marcoInicio;
    }
    set marcoInicio(marcoInicio){
        this.#marcoInicio = marcoInicio;
    }
    get marcoFinal(){
        return this.#marcoFinal;
    }
    set marcoFinal(marcoFinal){
        this.#marcoFinal = marcoFinal;
    }
    get poblacion(){
        return this.#poblacion;
    }
    set poblacion(poblacion){
        this.#poblacion = poblacion;
    }
    get circunstancia(){
        return this.#circunstancia;
    }
    set circunstancia(circunstancia){
        this.#circunstancia = circunstancia;
    }
    get rasgo(){
        return this.#rasgo;
    }
    set rasgo(rasgo){
        this.#rasgo = rasgo;
    }
    mostrarDatos(){
        return `
         - Nombre de la generación: ${this.nombre}
         - Marco Temporal: ${this.marcoInicio} - ${this.marcoFinal}
         - Poblacion: ${this.poblacion}
         - Circunstancia: ${this.circunstancia}
         - Rasgo: ${this.rasgo}
        `
    }
}

const generacionZ = new Generacion('Generación Z',1994,2010,7800000,'Expansión masiva de internet','Irreverencia 😛')
const generacionY = new Generacion('Generación Y (millennials)',1981,1993,7200000,'Inicio de la digilitación','Frustración 😖')
const generacionX = new Generacion('Generación X',1969,1980,9300000,'Crisis del 73 y transición española','Obsesión por el éxito 😎')
const generacionBB = new Generacion('Baby Boom',1949,1968,12200000,'Paz y explosión demográfica','Ambición 🤑')
const generacionSG = new Generacion('Silent Generation (Los niños de la posguerra)',1930,1948,6300000,'Conflictos bélicos','Austeridad 😐')

const generaciones = [generacionZ,generacionY,generacionX,generacionBB,generacionSG]



const persona1 = new Persona('Kevin',30,'M',89,170,1993,generaciones)
const persona2 = new Persona('José',17,'M',110,182,2006,generaciones)
const persona3 = new Persona('Mirta',43,'F',75,155,1980,generaciones)
const persona4 = new Persona('Francisca',58,'F',80,160,1965,generaciones)
const persona5 = new Persona('Marcelino',78,'M',79,169,1945,generaciones)


const btnMostrarGeneracion1 = document.getElementById('btnMostrarGeneracion1')
const btnMostrarGeneracion2 = document.getElementById('btnMostrarGeneracion2')
const btnMostrarGeneracion3 = document.getElementById('btnMostrarGeneracion3')
const btnMostrarGeneracion4 = document.getElementById('btnMostrarGeneracion4')
const btnMostrarGeneracion5 = document.getElementById('btnMostrarGeneracion5')

btnMostrarGeneracion1.addEventListener('click',()=>{
    alert(persona1.mostrarGeneracion())
})
btnMostrarGeneracion2.addEventListener('click',()=>{
    alert(persona2.mostrarGeneracion())
})
btnMostrarGeneracion3.addEventListener('click',()=>{
    alert(persona3.mostrarGeneracion())
})
btnMostrarGeneracion4.addEventListener('click',()=>{
    alert(persona4.mostrarGeneracion())
})
btnMostrarGeneracion5.addEventListener('click',()=>{
    alert(persona5.mostrarGeneracion())
})


const btnMayorDeEdad1 = document.getElementById('btnMayorDeEdad1')
const btnMayorDeEdad2 = document.getElementById('btnMayorDeEdad2')
const btnMayorDeEdad3 = document.getElementById('btnMayorDeEdad3')
const btnMayorDeEdad4 = document.getElementById('btnMayorDeEdad4')
const btnMayorDeEdad5 = document.getElementById('btnMayorDeEdad5')


btnMayorDeEdad1.addEventListener('click',()=>{
    alert(persona1.esMayorDeEdad())
})
btnMayorDeEdad2.addEventListener('click',()=>{
    alert(persona2.esMayorDeEdad())
})
btnMayorDeEdad3.addEventListener('click',()=>{
    alert(persona3.esMayorDeEdad())
})
btnMayorDeEdad4.addEventListener('click',()=>{
    alert(persona4.esMayorDeEdad())
})
btnMayorDeEdad5.addEventListener('click',()=>{
    alert(persona5.esMayorDeEdad())
})


const btnMostrarDatos1 = document.getElementById('btnMostrarDatos1')
const btnMostrarDatos2 = document.getElementById('btnMostrarDatos2')
const btnMostrarDatos3 = document.getElementById('btnMostrarDatos3')
const btnMostrarDatos4 = document.getElementById('btnMostrarDatos4')
const btnMostrarDatos5 = document.getElementById('btnMostrarDatos5')

btnMostrarDatos1.addEventListener('click',()=>{
    alert(persona1.mostrarDatos())
})
btnMostrarDatos2.addEventListener('click',()=>{
    alert(persona2.mostrarDatos())
})
btnMostrarDatos3.addEventListener('click',()=>{
    alert(persona3.mostrarDatos())
})
btnMostrarDatos4.addEventListener('click',()=>{
    alert(persona4.mostrarDatos())
})
btnMostrarDatos5.addEventListener('click',()=>{
    alert(persona5.mostrarDatos())
})
