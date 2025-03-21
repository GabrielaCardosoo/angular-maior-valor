import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  standalone: false,
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  valor1!: number;
  valor2!: number;
  valor3!: number;
  maiorValor?: number;

  calcularMaior() {
    this.maiorValor = Math.max(this.valor1, this.valor2, this.valor3);
  }
}
