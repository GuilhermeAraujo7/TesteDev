import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from '../shared/cliente';
import { ClienteService } from '../shared/cliente.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
})
export class ClienteFormComponent implements OnInit {
  formulario: any;
  formularioTel: any;
  tituloFormulario: string;
  clientes: Cliente[];
  id: number;
  resultado = null;

  visibilidadeFormTel: boolean = false;
  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;
  visibilidadeFormularioTel: boolean = false;

  modalRef: BsModalRef;

  constructor(private clienteService: ClienteService,
    private modalService: BsModalService) {}

  ngOnInit(): void {
    this.clienteService.ListarClientes().subscribe((resultado) => {
      this.clientes = resultado;
    });
  }

  ExibirFormularioCadastro(): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.visibilidadeFormTel = false;

    this.tituloFormulario = 'Novo Cliente';
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      cpf: new FormControl(null),
      dataNasc: new FormControl(null),
    });
  }

  ExibirFormularioTelefone(): void {
    this.visibilidadeFormularioTel = true;
    this.formularioTel = new FormGroup({
      numero: new FormControl(null)
    });
  }

  ExibirFormularioAtualizacao(id): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.visibilidadeFormTel = true;


    this.clienteService.FiltrarPeloId(id).subscribe((resultado) => {
      this.tituloFormulario = 'Atualizar Cliente';

      this.formulario = new FormGroup({
        id: new FormControl(resultado.id),
        nome: new FormControl(resultado.nome),
        cpf: new FormControl(resultado.cpf),
        dataNasc: new FormControl(resultado.dataNasc),
      });
    });
  }

  EnviarFormulario(): void {
    const cliente: Cliente = this.formulario.value;
    this.clienteService.FiltrarPeloCpf(cliente.cpf).subscribe((resultado) => {
      if (resultado != null) {
        alert('CPF já cadastrado no sistema!');
      } else if (cliente.id > 0) {
        this.clienteService.AtualizarCliente(cliente).subscribe((resultado) => {
          this.visibilidadeFormulario = false;
          this.visibilidadeTabela = true;
          alert('Cliente atualizado com sucesso!');
          this.clienteService.ListarClientes().subscribe((registros) => {
            this.clientes = registros;
          });
        });
      } else {
            this.clienteService.InserirCliente(cliente).subscribe((resultado) => {
              this.visibilidadeFormulario = false;
              this.visibilidadeTabela = true;
              alert('Cliente inserido com sucesso!');
                this.clienteService.ListarClientes().subscribe((registros) => {
                this.clientes = registros;
                });
                });
          }
    });
  }

  Voltar(): void {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }
}
