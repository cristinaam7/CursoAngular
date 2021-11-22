import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  private url: string = "http://localhost:3000/grafica";

  constructor(private http: HttpClient) { }

  /*public getUsuariosRedesSociales(){
    return this.http.get(this.url);
  }*/

  public getUsuariosRedesSociales(){
    return this.http.get(this.url).pipe(
      map( datos => {
        const labels = Object.keys(datos);
        const values = Object.values(datos);
        return {labels, values};
      })
    );
  }
}
