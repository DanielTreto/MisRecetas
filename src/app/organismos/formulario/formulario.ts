import { Component, output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { recetaModel } from '../../model/RecetaModel';
import { Input } from "../../átomos/input/input";
import { Boton } from "../../átomos/boton/boton";

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, Input, Boton],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss',
})
export class Formulario {
  recetaNueva = output<recetaModel>();

  recetaForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    ingredientes: new FormControl('', Validators.required),
  });

  get titulo() {
    return this.recetaForm.get('titulo');
  }

  get imagen() {
    return this.recetaForm.get('imagen');
  }

  get ingredientes() {
    return this.recetaForm.get('ingredientes');
  }

  id = 'ingredientes'

  submit() {
    if (this.recetaForm.valid) {
      let receta = new recetaModel(
        this.recetaForm.value.titulo ?? '',
        this.recetaForm.value.imagen ?? '',
        this.recetaForm.value.ingredientes ?? ''
      );
      this.recetaNueva.emit(receta);
      this.recetaForm.reset();
    } else {
      alert('Formulario inválido. Revise los campos.');
    }
  }
}
