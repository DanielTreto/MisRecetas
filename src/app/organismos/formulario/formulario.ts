import { Component, output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { recetaModel } from '../../model/RecetaModel';
import { Boton } from '../../átomos/boton/boton';
import { RecetaService } from '../../services/receta-service';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, Boton],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss',
})
export class Formulario {
  constructor(private recetaService: RecetaService){};
  recetaNueva = output<recetaModel>();

  static noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    const isWhitespace = control.value.trim().length === 0;
    const isValid = !isWhitespace;
    // Si no es válido (solo tiene espacios), devuelve un objeto de error
    return isValid ? null : { 'whitespace': true };
  }

  recetaForm = new FormGroup({
    titulo: new FormControl('', [Validators.required, Formulario.noWhitespaceValidator] ),
    imagen: new FormControl('', [Validators.required, Validators.pattern(/^[http]/)]),
    ingredientes: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z,]/)]),
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

  submit() {
    if (this.recetaForm.valid) {
      let receta = new recetaModel(0,
        this.recetaForm.value.titulo ?? '',
        this.recetaForm.value.imagen ?? '',
        this.recetaForm.value.ingredientes?.split(',') ?? [],
        0,
        0
      );
      this.recetaService.anadirReceta(receta);
      this.recetaForm.reset();
    } else {
      console.log('Formulario inválido. Revise los campos.');
    }
  }

}
