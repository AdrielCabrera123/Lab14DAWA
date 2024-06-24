import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-categorias', 
  templateUrl: './listar-categorias.component.html',  
  styleUrls: ['./listar-categorias.component.css']  
})
export class ListarCategoriasComponent {
  categorias: any[] = []; 
}
