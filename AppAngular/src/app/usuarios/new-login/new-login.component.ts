import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';


@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {

  usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.usuarioService.criarUsuario(this.usuario);

      alert('Usuario cadastrado com sucesso');
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

}
