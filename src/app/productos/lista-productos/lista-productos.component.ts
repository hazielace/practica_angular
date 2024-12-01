import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos = [
    { nombre: 'Teclado Mecánico', categoria: 'Accesorios', precio: 80, stock: 15 },
    { nombre: 'Monitor 4K', categoria: 'Electrónica', precio: 300, stock: 8 },
    { nombre: 'Mouse Gamer', categoria: 'Accesorios', precio: 40, stock: 25 },
    { nombre: 'Silla Ergonomica', categoria: 'Muebles', precio: 150, stock: 10 },
    { nombre: 'Cámara Web', categoria: 'Electrónica', precio: 120, stock: 5 },
    { nombre: 'Laptop HP', categoria: 'Computadoras', precio: 900, stock: 3 },
    { nombre: 'Impresora Multifuncional', categoria: 'Electrónica', precio: 250, stock: 7 },
    { nombre: 'Auriculares Bluetooth', categoria: 'Accesorios', precio: 60, stock: 20 },
    { nombre: 'Disco Duro Externo', categoria: 'Almacenamiento', precio: 100, stock: 12 },
    { nombre: 'Memoria USB 64GB', categoria: 'Almacenamiento', precio: 20, stock: 30 },
    { nombre: 'Tablet Samsung', categoria: 'Electrónica', precio: 400, stock: 4 },
    { nombre: 'Smartphone Xiaomi', categoria: 'Electrónica', precio: 350, stock: 6 },
    { nombre: 'Router WiFi', categoria: 'Redes', precio: 70, stock: 14 },
    { nombre: 'Cable HDMI', categoria: 'Accesorios', precio: 15, stock: 50 },
    { nombre: 'Micro SD 128GB', categoria: 'Almacenamiento', precio: 35, stock: 22 }
  ];
  
}
