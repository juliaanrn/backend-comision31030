class Usuario {
    constructor(nombre,apellido,libros,mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
}
// Método para obtener el nombre completo del Usuario //
    getFullName(){
        return `El nombre y apellido del usuario ${this.nombre} es: ${this.nombre} ${this.apellido}`;  
    }

// Método para obtener la cantidad de mascotas del usuario //
    countMascotas(){
       let mascota1 = (this.mascotas.length > 1) ? 'mascotas' : 'mascota';
       return `El usuario ${this.nombre} ${this.apellido} tiene ${this.mascotas.length} ${mascota1}`;
          
 }
// Método para agregar un libro a la lista de libros del usuario //
    addBook(titulo, autor) {
        console.log(`Agregado libro ${titulo} a la lista de libros del usuario ${this.nombre}`);
        this.libros.push({nombre: titulo, autor: autor});
    }
// Método para obtener la lista de libros favoritos del usuario //
    getBookNames() {
        return `Esta es la lista de libros favoritos de ${this.nombre}: ${this.libros.map( (libro) => libro.nombre)}`;
    }
}

const Matias = new Usuario('Matias','Copetti',[{nombre: "Estudio en Escarlata", autor: "Arthut C. Doyle"} , {nombre: "El Señor de los Anillos" , autor: "J. R. R. Tolkien"}],['Firulais','Rocco']);
console.log(Matias.getFullName());
console.log(Matias.getBookNames());
Juan.addBook("El Silmarilion", "J. R. R. Tolkien");
console.log(Matias.getBookNames());
console.log(Matias.countMascotas());
Juan.addMascota("Firulais");
console.log(Matias.countMascotas());