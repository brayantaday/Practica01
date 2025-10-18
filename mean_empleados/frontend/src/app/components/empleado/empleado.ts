import { Component, OnInit } from '@angular/core';
import { EmpleadoService, Empleado } from '../../services/empleado';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.html',
  styleUrls: ['./empleado.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];
  empleadoSeleccionado: Empleado | null = null;
  modoEdicion: boolean = false;
  empleadoForm: Empleado = { nombre: '', cargo: '', departamento: '', sueldo: 0 };

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(
      data => this.empleados = data
    );
  }

  seleccionarEmpleado(empleado: Empleado): void {
    this.empleadoSeleccionado = { ...empleado };
    this.empleadoForm = { ...empleado };
    this.modoEdicion = true;
  }

  limpiarSeleccion(): void {
    this.empleadoSeleccionado = null;
    this.empleadoForm = { nombre: '', cargo: '', departamento: '', sueldo: 0 };
    this.modoEdicion = false;
  }

  crearEmpleado(): void {
    this.empleadoService.createEmpleado(this.empleadoForm).subscribe(
      empleado => {
        this.empleados.push(empleado);
        this.limpiarSeleccion();
      }
    );
  }

  actualizarEmpleado(): void {
    if (!this.empleadoSeleccionado || !this.empleadoSeleccionado._id) return;
    this.empleadoService.updateEmpleado(this.empleadoSeleccionado._id, this.empleadoForm).subscribe(
      empleado => {
        const idx = this.empleados.findIndex(e => e._id === empleado._id);
        if (idx > -1) this.empleados[idx] = empleado;
        this.limpiarSeleccion();
      }
    );
  }

  eliminarEmpleado(id: string): void {
    this.empleadoService.deleteEmpleado(id).subscribe(
      () => {
        this.empleados = this.empleados.filter(e => e._id !== id);
        this.limpiarSeleccion();
      }
    );
  }
}
