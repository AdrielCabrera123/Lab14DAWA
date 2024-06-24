import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';  
import { Categoria } from '../../models/categoria';


@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent {
  categoriaForm: FormGroup;
  titulo = 'Crear categoría';

  constructor(private fb: FormBuilder, private categoriaService: CategoriaService) {
    this.categoriaForm = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  crearCategoria() {
    if (this.categoriaForm.valid) {
      const { nombre } = this.categoriaForm.value;
      const nuevaCategoria = new Categoria(0, nombre);
      this.categoriaService.addCategoria(nuevaCategoria);
      console.log(nuevaCategoria);
    } else {
      console.log('Formulario inválido');
    }
  }
}
