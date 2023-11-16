const auto = {
    color: 'azul',
    marca: 'Toyota',
    modelo: 'Etios Sedán',
    anio: 2024,
    encendido: true,
    encender(){
        alert('Auto encendido')
        this.encendido=true
    },
    apagar(){
        alert('El auto se apagó')
        this.encendido=false
    }
}


const btnEncender = document.getElementById('btnEncender')

btnEncender.addEventListener('click',()=>{
    auto.encender()
})

const btnApagar = document.getElementById('btnApagar')

btnApagar.addEventListener('click',()=>{
    auto.apagar()
})



