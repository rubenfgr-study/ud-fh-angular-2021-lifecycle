import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuestraNombreComponent } from './components/muestra-nombre/muestra-nombre.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';

const routes: Routes = [
  {path: '', component: Pagina1Component},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
