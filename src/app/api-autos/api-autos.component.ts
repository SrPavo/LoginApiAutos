import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface Auto {
  id: number;
  marca: string;
  modelo: string;
  año: string;
  color: string;
  matricula: string;
  precio: string;
  estado: string;
  descripcion: string;
  imagen: string;
  created_at: string;
  updated_at: string;
}

const AUTO_DATA: Auto[] = [
  // Puedes agregar datos de ejemplo aquí si deseas
];

@Component({
  selector: 'app-api-autos',
  templateUrl: './api-autos.component.html',
  styleUrls: ['./api-autos.component.css']
})
export class ApiAutosComponent {
  displayedColumns: string[] = ['id', 'marca', 'modelo', 'año', 'color', 'matricula', 'precio', 'estado', 'descripcion', 'imagen', 'created_at', 'updated_at'];
  dataSource = AUTO_DATA;
}
