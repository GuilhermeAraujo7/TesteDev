import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './usuarios/login/login.component';
import { NewLoginComponent } from './usuarios/new-login/new-login.component';
import { MenuComponent } from './layout/menu/menu.component';
import { AuthGuard } from './usuarios/shared/auth.guard';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: MenuComponent },
      { path: 'cliente', component: ClienteFormComponent },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'new-login', component: NewLoginComponent  }
    ]
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
