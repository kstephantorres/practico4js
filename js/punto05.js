class Persona{
    #nombre 
    #edad
    #dni
    #sexo //(H hombre, M mujer), 
    #peso  
    #altura
    #nacimiento
    
    constructor(nombre,edad,dni,sexo,peso,altura,nacimiento){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#nacimiento = nacimiento;
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
}