import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuarios/login/login.component';
import { ClienteService } from './clientes/shared/cliente.service';
import { UsuarioService } from './usuarios/shared/usuario.service';
import { NewLoginComponent } from './usuarios/new-login/new-login.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { MenuComponent } from './layout/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewLoginComponent,
    ClienteFormComponent,
    HomeComponent,
    AuthenticationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [HttpClientModule, ClienteService, UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
