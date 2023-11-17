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
const rectangulo = new Rectagulo(10, 15)

const btnMostrarRec = document.getElementById('btnMostrarRec')
const btnPerimetro = document.getElementById('btnPerimetro')
const btnArea = document.getElementById('btnArea')

btnMostrarRec.addEventListener('click',()=>{
    alert(`Rectangulo \n-Alto: ${rectangulo.alto} \n-Ancho: ${rectangulo.ancho}`)
})

btnPerimetro.addEventListener('click',()=>{
    alert(`Perímetro: ${rectangulo.perimetro()}`)
})
btnArea.addEventListener('click',()=>{
    alert(`Área: ${rectangulo.area()}`)
})

// const rectangul

// const btnCrearRec = document.getElementById('btnCrearRec')
// const btnPerimetro = document.getElementById('btnPerimetro')
// const btnArea = document.getElementById('btnArea')

// const altoInput = document.getElementById('altoInput')
// const anchoInput = document.getElementById('anchoInput')

// btnCrearRec.addEventListener('click',()=>{
//     if(altoInput.value && anchoInput.value ){
        
//     }
// })