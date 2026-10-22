import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Inscricao, InscricaoService } from '../inscricao-service';

@Component({
  selector: 'app-lista-inscricoes',
  imports: [RouterLink],
  templateUrl: './lista-inscricoes.html',
  styleUrl: './lista-inscricoes.css',
})
export class ListaInscricoes {
  constructor(private inscricaoService: InscricaoService) {}

  get inscricoes(): Inscricao[] {
    return this.inscricaoService.listar();
  }

  get total(): number {
    return this.inscricoes.length;
  }

  get confirmadas(): number {
    return this.inscricoes.filter((inscricao) => inscricao.status === 'Confirmada').length;
  }

  get pendentes(): number {
    return this.inscricoes.filter((inscricao) => inscricao.status === 'Pendente').length;
  }

  confirmar(id: number): void {
    this.inscricaoService.confirmarInscricao(id);
  }

  remover(id: number): void {
    this.inscricaoService.remover(id);
  }
}