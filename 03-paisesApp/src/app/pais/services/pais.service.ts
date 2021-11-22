import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../intefaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  get httpParam(){
    return new HttpParams()
      .set('fields', 'name,population,flag,capital,ccn3');
  }

  public buscarPais(termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, {params: this.httpParam}  );
  }

  public buscarCapital(termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, {params: this.httpParam}  );
  }

  public buscarRegion(termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ termino }`;
    return this.http.get<Country[]>( url, {params: this.httpParam} );
  }

  public getPaisPorAlpha( id: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url );
  }
}
