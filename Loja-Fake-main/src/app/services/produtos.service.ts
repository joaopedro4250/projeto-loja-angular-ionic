
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Produto {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}
// pega os produtos da api para mostrar no home.page
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }
}
