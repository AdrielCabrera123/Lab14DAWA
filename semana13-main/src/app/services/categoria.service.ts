import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categorias: Categoria[] = [
    new Categoria(1, 'Electrónica'),
    new Categoria(2, 'Ropa'),
    new Categoria(3, 'Hogar'),
    // Agrega más categorías según sea necesario
  ];


  constructor() { }

  getCategorias(): Observable<Categoria[]> {
    return of(this.categorias);
  }

  addCategoria(categoria: Categoria): void {
    this.categorias.push(categoria);
  }
}
