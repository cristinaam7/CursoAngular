import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private serviceUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.serviceUrl}/heroes`);
  }

  public getHeroePorId(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.serviceUrl}/heroes/${id}`);
  }

  public getSugerencias(termino: string): Observable<Heroe[]>{
    const params = new HttpParams()
          .set('q', termino)
          .set('_limit', 6);
    
    return this.http.get<Heroe[]>(`${this.serviceUrl}/heroes`, {params: params});
  }

  public agregar(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.serviceUrl}/heroes`, heroe);
  }

  public editar(heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.serviceUrl}/heroes/${heroe.id}`, heroe);
  }

  public eliminar(id: string): Observable<any>{
    return this.http.delete<any>(`${this.serviceUrl}/heroes/${id}`);
  }
}
