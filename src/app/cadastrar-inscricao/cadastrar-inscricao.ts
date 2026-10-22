import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../inscricao-service';

@Component({
  selector: 'app-cadastrar-inscricao',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-inscricao.html',
  styleUrl: './cadastrar-inscricao.css',
})
export class CadastrarInscricao {
  nome = '';
  email = '';
  oficina = '';
  mensagem = '';

  oficinas = ['Introdução ao Angular', 'TypeScript na Prática', 'Testes de Front-end'];

  constructor(private inscricaoService: InscricaoService) {}

  cadastrar(formulario: NgForm): void {
    this.inscricaoService.adicionar(this.nome, this.email, this.oficina);
    this.mensagem = 'Inscrição cadastrada com sucesso!';
    formulario.resetForm({ nome: '', email: '', oficina: '' });
  }
}