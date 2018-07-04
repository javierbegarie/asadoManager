import { AsadoDetailComponent } from './asado-detail/asado-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsadoListComponent } from './asado-list/asado-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'asados', pathMatch: 'full' },
  { path: 'asados', component: AsadoListComponent, data: { title: 'Asado List'} },
  { path: 'asado/:id', component: AsadoDetailComponent, data: { title: 'Asado Detail'} },
  { path: '**', redirectTo: 'asados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  AsadoListComponent,
  AsadoDetailComponent
]