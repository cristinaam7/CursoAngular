import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public miForm: FormGroup = this.fb.group({
    nombre: ['Cristina', [Validators.required, Validators.minLength(5)]],
    email: ['cris@cris.es', [Validators.required, Validators.email]],
    password: ['1234567', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  public registrar(){
    
    const {nombre, email, password} = this.miForm.value;
    
    this.authService.registro(nombre, email, password)
      .subscribe( resp => {
        if(resp === true){
          this.router.navigateByUrl('/dashboard');
        }
        else{
          Swal.fire("Error", resp, 'error')
        }
      });
  }

}
