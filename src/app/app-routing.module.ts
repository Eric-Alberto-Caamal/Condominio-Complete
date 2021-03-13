import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondominoCreateComponent } from './proyectos/condominos/condomino-create/condomino-create.component';
import { CondominoListComponent } from './proyectos/condominos/condomino-list/condomino-list.component';
import { FormEditComponent } from './proyectos/condominos/form-edit/form-edit.component';
import {CitaCreateComponent} from './ventas/citas/cita-create/cita-create.component';
import { IndexComponent } from './ventas/citas/index/index.component';

const routes: Routes = [
  {path: '', component: CondominoCreateComponent},
  {path: 'citas/create', component: CitaCreateComponent},
  {path: 'index', component: IndexComponent},
  {path: 'condomino', component: CondominoCreateComponent},
  {path: 'condomino/list', component: CondominoListComponent},
  { path: 'condomino/edit/:indice', component: FormEditComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
