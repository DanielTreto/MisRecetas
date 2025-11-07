import { Component } from '@angular/core';
import { Navegador } from "../navegador/navegador";
import { Formulario } from "../formulario/formulario";


@Component({
  selector: 'app-footer',
  imports: [Formulario],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
