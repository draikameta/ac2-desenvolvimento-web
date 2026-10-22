import { Injectable } from '@angular/core';

export interface Inscricao {
  id: number;
  nome: string;
  email: string;
  oficina: string;
  status: 'Pendente' | 'Confirmada';
}

@Injectable({
  providedIn: 'root',
})
export class InscricaoService {
  private inscricoes: Inscricao[] = [];
  private proximoId = 1;

  listar(): Inscricao[] {
    return this.inscricoes;
  }

  adicionar(nome: string, email: string, oficina: string): void {
    const novaInscricao: Inscricao = {
      id: this.proximoId++,
      nome,
      email,
      oficina,
      status: 'Pendente',
    };
    this.inscricoes.push(novaInscricao);
  }

  remover(id: number): void {
    this.inscricoes = this.inscricoes.filter((inscricao) => inscricao.id !== id);
  }

  confirmarInscricao(id: number): void {
    const inscricao = this.inscricoes.find((item) => item.id === id);
    if (inscricao) {
      inscricao.status = 'Confirmada';
    }
  }
}