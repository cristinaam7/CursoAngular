import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  public login(){
    this.authService.login()
      .subscribe(resp => console.log(resp));
    this.router.navigate(['../heroes/listado'])
  }

}
