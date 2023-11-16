class Rectagulo {
    #alto
    #ancho
    constructor(alto, ancho)
    {
        this.#alto = alto
        this.#ancho = ancho
    }

    get alto(){
        return this.#alto
    }
    set alto(alto){
        this.#alto=alto
    }
    get ancho(){
        return this.#ancho
    }
    set ancho(ancho){
        this.#ancho=ancho
    }

    perimetro(){
        return (this.#alto+this.#ancho)*2
    }
    area(){
        return(this.#alto*this.#ancho)
    }

}


