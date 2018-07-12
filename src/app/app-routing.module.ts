import { AsadoDetailComponent } from './asado-detail/asado-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsadoListComponent } from './asado-list/asado-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,  data: { title: 'Login'}  },
  { path: 'register', component: RegisterComponent,  data: { title: 'Register'}  },
  { path: 'asado', component: SidenavComponent, children: [
      { path: 'list', component: AsadoListComponent, data: { title: 'Asado List'} },
      { path: 'asado/:id', component: AsadoDetailComponent, data: { title: 'Asado Detail'} }
    ] 
  },
  { path: '**', redirectTo: 'asados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  AsadoListComponent,
  AsadoDetailComponent,
  LoginComponent,
  RegisterComponent
]