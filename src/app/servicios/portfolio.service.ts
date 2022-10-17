import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }
//creación de un servicio en su clase @Injectable para ser consumida por todos los componentes.
  obtenerDatos(){
    console.log("El servicio portfolio está corriendo");
  }
}
