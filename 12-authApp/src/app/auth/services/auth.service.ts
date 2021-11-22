import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url: string = environment.urlAuth;
  private _usuario!: Usuario;

  get usuario (){
    return {...this._usuario};
  }

  constructor(private http: HttpClient) { }

  public login(user: string, password: string){
    const url = `${this._url}/auth`;
    const body = {email: user, password: password}
    
    return this.http.post<AuthResponse>(url, body)
    .pipe(
      //Guardar los datos del usuario
      tap( resp => {
        if(resp.ok){
          localStorage.setItem('token', resp.token!);
        }
      }),
      map( resp => resp.ok),
      catchError( err => of(err.error.msg) )
    );
  }

  public registro(name: string, user: string, password: string){
    const url = `${this._url}/auth/new`;
    const body = {name: name, email: user, password: password}
    
    return this.http.post<AuthResponse>(url, body)
    .pipe(
      //Guardar los datos del usuario
      tap( resp => {
        console.log(resp);
        if(resp.ok){
          localStorage.setItem('token', resp.token!);
        }
      }),
      map( resp => resp.ok),
      catchError( err => of(err.error.msg) )
    );
  }

  public validarToken(){
    const url = `${this._url}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, {headers: headers})
      .pipe(
        map( resp => {

          localStorage.setItem('token', resp.token!);
          this._usuario = {
            'name': resp.name!,
            'uid': resp.uid!,
            'email': resp.email!
          };
          return resp.ok;
        }),
        catchError( err => of(false))
      );
  }

  public logout(){
    //Limpia solo el token
    localStorage.removeItem('token');
    //Limpia todo lo que haya de mi app
    localStorage.clear();
  }
}
