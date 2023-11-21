class Libro{
    #ISBN
    #titulo
    #autor
    #nPaginas
    
    constructor(isbn, titulo, autor, nPaginas) {
        this.#ISBN = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#nPaginas = nPaginas;
      }
    
      get ISBN() {
        return this.#ISBN;
      }
    
      set ISBN(isbn) {
        this.#ISBN = isbn;
      }
    
      get titulo() {
        return this.#titulo;
      }
    
      set titulo(titulo) {
        this.#titulo = titulo;
      }
    
      get autor() {
        return this.#autor;
      }
    
      set autor(autor) {
        this.#autor = autor;
      }
    
      get nPaginas() {
        return this.#nPaginas;
      }
    
      set nPaginas(nPaginas) {
        this.#nPaginas = nPaginas;
      }
      mostrarLibro(){
        return `El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.nPaginas}`
      }
}


const libro1 = new Libro(9789877671735,'El principito','Antoine de Saint-Exupéry',144)
const libro2 = new Libro(9788491294788,'El niño, el topo, el zorro y el caballo','Charlie Mackesy',128)


const btnMostrarLibro1 = document.getElementById('btnMostrarLibro1')
const btnMostrarLibro2 = document.getElementById('btnMostrarLibro2')

btnMostrarLibro1.addEventListener('click',()=>{
    alert(libro1.mostrarLibro())
})
btnMostrarLibro2.addEventListener('click',()=>{
    alert(libro2.mostrarLibro())
})


const btnMasPaginas = document.getElementById('btnMasPaginas')

btnMasPaginas.addEventListener('click',()=>{
    if(libro1.nPaginas > libro2.nPaginas){
        alert(`El libro ${libro1.titulo} tine más páginas (${libro1.nPaginas})`)
    }else{
        alert(`El libro ${libro2.titulo} tine más páginas (${libro1.nPaginas})`)
    }
})

