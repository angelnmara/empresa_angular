import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  id:number,
  name: string;  
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', role: 'H'},
  {id: 2, name: 'Helium', role: 'He'},
  {id: 3, name: 'Lithium', role: 'Li'},
  {id: 4, name: 'Beryllium', role: 'Be'},
  {id: 5, name: 'Boron', role: 'B'},
  {id: 6, name: 'Carbon', role: 'C'},
  {id: 7, name: 'Nitrogen', role: 'N'},
  {id: 8, name: 'Oxygen', role: 'O'},
  {id: 9, name: 'Fluorine', role: 'F'},
  {id: 10, name: 'Neon', role: 'Ne'},
];

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  displayedColumns: string[] = ['id', 'name', 'role'];
  dataSource = ELEMENT_DATA;
}