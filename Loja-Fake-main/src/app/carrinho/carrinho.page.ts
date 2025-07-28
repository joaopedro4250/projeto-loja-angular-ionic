import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { Produto } from '../services/produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  standalone: false,
})
export class CarrinhoPage implements OnInit {
  itens: Produto[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.itens = this.carrinhoService.listar();
  }

  limparCarrinho() {
    this.carrinhoService.limpar();
    this.itens = [];
  }
}
