import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesModule } from '../../heroes.module';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px
    }`
  ]
})
export class AgregarComponent implements OnInit {

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  public heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: ''
  }

  constructor(private heroeService: HeroesService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private snackBar: MatSnackBar,
      private dialog: MatDialog) { }

  ngOnInit(): void {

    if( this.router.url.includes('agregar')){
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroeService.getHeroePorId(id) )
    )
    .subscribe( heroe => this.heroe = heroe);
  }

  public guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){
      this.heroeService.editar(this.heroe)
        .subscribe( heroe => this.mostrarSnackBar('Registro actualizado'));
    }
    else{
      this.heroeService.agregar(this.heroe)
        .subscribe( heroe => {
          this.mostrarSnackBar('Registro actualizado');
          this.router.navigate(['heroes/editar', heroe.id]);
        });
    }
  }

  public eliminar(){

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed()
      .subscribe( resp => {
        if( resp ){
          this.heroeService.eliminar(this.heroe.id!)
            .subscribe( resp => {
              this.router.navigate(['heroes/listado'])
            })
        }
      })
  }

  public mostrarSnackBar(mensaje: string){
    this.snackBar.open(mensaje, 'OK', {duration: 3000});
  }

}
