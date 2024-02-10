import { Component, Input } from '@angular/core';
import { ExamenInterface } from '../model/examen-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-respuesta-examen',
  standalone: true,
  imports: [CommonModule],
  template: `<li *ngFor="let resp of examenInterfaceList">
    <span>{{resp.name}}</span> <span>{{resp.repeticiones}}</span>
  </li>`,
  styleUrl: './respuesta-examen.component.css'
})
export class RespuestaExamenComponent {
  @Input() examenInterfaceList!:ExamenInterface[];
}
