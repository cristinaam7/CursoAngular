import { Injectable } from '@angular/core';
import { Paises, PaisesSmall } from '../interfaces/paises.interface';
import { combineLatest, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  private _baseUrl: string = "https://restcountries.com/v3.1";

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http:HttpClient) { }

  public getPaisesPorRegion(region: string): Observable<PaisesSmall[]>{
    return this.http.get<PaisesSmall[]>(`${this._baseUrl}/region/${region}?fields=name,cca3`);
  }

  public getPaisesPorCodigo(paisCode: string): Observable<Paises[]>{
    if(!paisCode) { return of() }
    return this.http.get<Paises[]>(`${this._baseUrl}/alpha/${paisCode}`);
  }

  public getPaisesPorCodigoSmall(paisCode: string): Observable<PaisesSmall>{
    return this.http.get<PaisesSmall>(`${this._baseUrl}/alpha/${paisCode}?fields=name,cca3`);
  }

  public getPaisesPorCodigos(borders: string[]): Observable<PaisesSmall[]> {
    if(!borders) { [] }

    /*let fronteras: PaisesSmall[] = [];

    borders.forEach(codigo => {
      this.getPaisesPorCodigoSmall(codigo)
        .subscribe( pais => {
          fronteras.push(pais);
        })
    });

    return fronteras;*/

    let peticiones: Observable<PaisesSmall>[] = [];

    borders.forEach( codigo => {
      peticiones.push(this.getPaisesPorCodigoSmall(codigo));
    })

    return combineLatest(peticiones);

  }
}
