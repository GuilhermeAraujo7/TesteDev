import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://localhost:5001/api/usuarios';

  constructor(private http: HttpClient) {}

  login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  async criarUsuario(usuario: any) {
    const result = await this.http.post<any>(this.url, usuario).toPromise();
    return result;
  }

}
