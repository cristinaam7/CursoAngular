import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreemComponent } from './pages/full-screem/full-screem.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'fullScreem', component: FullScreemComponent},
      { path: 'zoom-range', component: ZoomRangeComponent},
      { path: 'marcadores', component: MarcadoresComponent},
      { path: 'propiedades', component: PropiedadesComponent},
      { path: '**', redirectTo: 'fullScreem'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
