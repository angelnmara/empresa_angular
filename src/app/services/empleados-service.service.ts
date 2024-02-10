import { Injectable } from '@angular/core';
import { EmpleadoInterface } from '../model/empleado-interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {
  
  url = "http://localhost:8080/private/employee";

  empleadoInterfaceList:EmpleadoInterface[] = [{
    id:0,
    name:"",
    role:""
  }]
  

  constructor() { }
  async getResponseEmpleado(requestOpenia: EmpleadoInterface[]): Promise<EmpleadoInterface[]>{
    try{
      const data = await fetch(this.url, {method:'GET',     
    headers: {      
      'Content-Type': 'application/json'
    }});
    if(data.ok){
      return await data.json() ?? {};
    }else{
      this.empleadoInterfaceList[0].name="no se encontro el empleado"
      return this.empleadoInterfaceList;
    }    
    }catch(error){
      console.log(error);
      this.empleadoInterfaceList[0].name="no se encontro el empleado"
      return this.empleadoInterfaceList;
    }    
  }
}
