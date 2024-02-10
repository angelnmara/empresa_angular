import { Injectable } from '@angular/core';
import { ExamenInterface } from '../model/examen-interface';

@Injectable({
  providedIn: 'root'
})
export class ExamenServiceService {

  url = "http://localhost:8080/private/examen/1";
  exmenInterfas:ExamenInterface[]=[{
    name:"",
    repeticiones:1
  }]


  constructor() { }
  async getResponseExamen(): Promise<ExamenInterface[]>{
    try{
      const data = await fetch(this.url, {method:'GET',     
    headers: {      
      'Content-Type': 'application/json'
    }});
    if(data.ok){
      return await data.json() ?? {};
    }else{
      this.exmenInterfas[0].name="no se encontro el empleado"
      return this.exmenInterfas;
    }    
    }catch(error){
      console.log(error);
      this.exmenInterfas[0].name="no se encontro el empleado"
      return this.exmenInterfas;
    }    
  }
}
