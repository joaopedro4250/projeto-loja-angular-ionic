import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from '../services/produtos.service';
 import { CarrinhoService } from '../services/carrinho.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  products: Produto[] = [];
  carregando: boolean = true;

  constructor(private ProdutoService: ProdutoService,private carrinhoService: CarrinhoService)  {}

  ngOnInit() {
    this.simularCarregando(); // inicia em modo carregando
  }

  simularCarregando() {
    this.carregando = true;
    setTimeout(() => {
      this.carregando = false;
      this.products = this.products.length ? this.products : []; // nada ainda
    }, 1500);
  }

  mostrarVazio() {
    this.products = [];
    this.carregando = false;
  }

  mostrarComProdutos() {
    this.ProdutoService.getProdutos().subscribe((data) => {
      this.products = data;
      this.carregando = false;
    });
  }
  comprar(produto: Produto) {
  this.carrinhoService.adicionar(produto);
  alert('Produto adicionado ao carrinho!');
}
}
