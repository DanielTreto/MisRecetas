export class recetaModel {
    id: number;
    titulo: string;
    imagen: string;
    ingredientes: string[];
    mediaCalif: number = 0;
    numVotos: number = 0;


    constructor(id: number, titulo: string, imagen:string, ingredientes:string[], mediaCalif: number, numVotos: number){
        this.id = id;
        this.titulo = titulo;
        this.imagen = imagen;
        this.ingredientes = ingredientes;
        this.mediaCalif = mediaCalif;
        this.numVotos = numVotos;
    }

}