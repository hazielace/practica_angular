import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
  usuarios = [
    { nombre: 'Juan Pérez', email: 'juan.perez@example.com', rol: 'Administrador' },
    { nombre: 'María López', email: 'maria.lopez@example.com', rol: 'Usuario' },
    { nombre: 'Carlos Gómez', email: 'carlos.gomez@example.com', rol: 'Usuario' },
    { nombre: 'Ana Torres', email: 'ana.torres@example.com', rol: 'Administrador' },
    { nombre: 'Pedro Sánchez', email: 'pedro.sanchez@example.com', rol: 'Usuario' },
    { nombre: 'Luis Ramírez', email: 'luis.ramirez@example.com', rol: 'Administrador' },
    { nombre: 'Carmen Díaz', email: 'carmen.diaz@example.com', rol: 'Usuario' },
    { nombre: 'Sofía Morales', email: 'sofia.morales@example.com', rol: 'Usuario' },
    { nombre: 'Miguel Ángel', email: 'miguel.angel@example.com', rol: 'Administrador' },
    { nombre: 'Laura Fernández', email: 'laura.fernandez@example.com', rol: 'Usuario' },
    { nombre: 'Diego Herrera', email: 'diego.herrera@example.com', rol: 'Usuario' },
    { nombre: 'Patricia Castro', email: 'patricia.castro@example.com', rol: 'Administrador' },
    { nombre: 'José Ruiz', email: 'jose.ruiz@example.com', rol: 'Usuario' },
    { nombre: 'Sandra Vega', email: 'sandra.vega@example.com', rol: 'Usuario' },
    { nombre: 'Ricardo Mendoza', email: 'ricardo.mendoza@example.com', rol: 'Administrador' }
  ];

}
