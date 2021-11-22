import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
    private routes: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      return this.authService.verificarAutentificacion()
                .pipe(
                  tap( estaAutentificado => {
                    if(!estaAutentificado){
                      this.routes.navigate(['./auth/login']);
                    }
                  })
                )

      /*if(this.authService.auth.id){
        return true;
      }
      else{
        console.log('Acceso denegado: CanActivated');
        return false;
      }*/
  }

  canLoad(
    route: Route, 
    segments: UrlSegment[]):  Observable<boolean> | Promise<boolean> | boolean{
    
      return this.authService.verificarAutentificacion()
              .pipe(
                tap( estaAutentificado => {
                  if(!estaAutentificado){
                    this.routes.navigate(['./auth/login']);
                  }
                })
              );

      /*if(this.authService.auth.id){
        return true;
      }
      else{
        console.log('Acceso denegado: CanLoad');
        return false;
      }*/
  }
  
}
