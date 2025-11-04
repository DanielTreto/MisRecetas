export class recetaModel {
    titulo: string;
    imagen: string;
    ingredientes: string[];

    constructor(titulo: string, imagen:string, ingredientes:string){
        this.titulo = titulo;
        this.imagen = imagen;
        this.ingredientes = ingredientes.split(",");
    }



}