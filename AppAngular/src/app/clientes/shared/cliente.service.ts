import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../shared/cliente';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = 'https://localhost:5001/api/clientes';

  constructor(private http: HttpClient) {}


  ListarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  FiltrarPeloId(Id: number): Observable<Cliente> {
    const apiUrl = `${this.url}/${Id}`;
    return this.http.get<Cliente>(apiUrl);
  }

  FiltrarPeloCpf(cpf: string): Observable<Cliente> {
    const apiUrl = `${this.url}/${cpf}`;
    return this.http.get<Cliente>(apiUrl);
  }

  InserirCliente(cliente: Cliente): Observable<any> {
    return this.http.post<Cliente>(this.url, cliente, httpOptions);
  }

  AtualizarCliente(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(this.url, cliente, httpOptions);
  }

}
