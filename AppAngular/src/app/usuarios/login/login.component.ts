import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../shared/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    senha: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.usuarioService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      //navego para a rota vazia novamente
      this.router.navigate(['']);
    } catch (error) {
        console.error(error);
    }
  }

}
