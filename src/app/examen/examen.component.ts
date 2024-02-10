import { Component, importProvidersFrom, inject } from '@angular/core';
import { RespuestaExamenComponent } from '../respuesta-examen/respuesta-examen.component';
import { ExamenInterface } from '../model/examen-interface';
import { ExamenServiceService } from '../services/examen-service.service';

@Component({
  selector: 'app-examen',
  standalone: true,
  imports: [RespuestaExamenComponent],
  template: `<button class="primary" type="button" (click)="llamaServicio()" [disabled]="isDisabled">Da click para obtener el array</button>
  <section class="component">
      <app-respuesta-examen [examenInterfaceList]="examenInterfaceList"></app-respuesta-examen>
  </section>`,
  styleUrl: './examen.component.css'
})
export class ExamenComponent {
  isDisabled:boolean=false;
  examenService:ExamenServiceService = inject(ExamenServiceService)
  examenInterfaceList:ExamenInterface[]=[{
      name:"david rincon angeles",
      repeticiones:0
    }
  ]
  llamaServicio(){
    this.examenService.getResponseExamen().then(examenInterfaceList=>{
      this.examenInterfaceList=examenInterfaceList;
    })
  }
}
