const cuenta = {
    titular: 'Alex',
    saldo:0,
    ingresar(ingreso){
        ingreso>=0 ? this.saldo+= ingreso : alert('No se puede ingresar números negativos.')
    },
    extraer(extraccion){
        extraccion<=this.saldo? this.saldo-=extraccion : alert('No cuenta con los fondos suficientes.')
    },
    informar(){
        alert(`Titular: ${this.titular} \nSaldo disponible: $${this.saldo}`)
    },
    getSaldo(){return this.saldo}
} 


const btnIngresar= document.getElementById('btnIngresar')
const btnExtraer= document.getElementById('btnExtraer')
const btnInformar= document.getElementById('btnInformar')

btnIngresar.addEventListener('click',()=>{
    const ingreso = parseInt(prompt('Ingrese el monto a ingresar: '))
    !isNaN(ingreso) && ingreso>=0 ? cuenta.ingresar(ingreso) : alert('Error!!!. Ingreso un monto inválido')
})

btnExtraer.addEventListener('click',()=>{
    console.log(btnExtraer.innerText)
    const extraccion = parseInt(prompt('Ingrese el monto a extraer: '))
    !isNaN(extraccion) && extraccion<=cuenta.getSaldo() ? cuenta.extraer(extraccion) : alert('Error!!!. Ingreso un monto inválido')
})

btnInformar.addEventListener('click',()=>cuenta.informar())