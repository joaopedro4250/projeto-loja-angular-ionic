import { Injectable } from '@angular/core';
import { Produto } from './produtos.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: Produto[] = [];

  constructor() {}

  adicionar(produto: Produto) {
    this.itens.push(produto);
    console.log('Produto adicionado ao carrinho:', produto);
  }

  listar(): Produto[] {
    return this.itens;
  }

  limpar() {
    this.itens = [];
  }
}
