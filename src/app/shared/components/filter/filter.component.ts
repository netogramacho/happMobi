import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() public filters = new EventEmitter<any>();
  @Output() public changeDisplay = new EventEmitter<string>();
  @Input() public display?: string;

  public carrocerias: string[];
  public motores: string[];
  public lugares: string[];

  public filterLugares: string[];
  public filterMotores: string[];
  public filterCarrocerias: string[];

  constructor() {

    this.carrocerias = [
      'Hatch compacto',
      'Hatch médio',
      'SUV compacto',
      'SUV médio',
      'SUV grande',
      'Crossover',
      'Coupé',
      'Picape leve',
      'Picape leve-média',
      'Picape média',
      'Sedan compacto',
      'Sedan médio',
      'Sedan grande',
      'Minivan/monovolume',
      'Utilitário leve',
      'Utilitário',
    ];

    this.motores = ['1.0', '1.4', '1.6', '1.8', '2.0'];

    this.lugares = ['02', '03', '04', '05', '06', '07'];

    this.filterLugares = [];
    this.filterMotores = [];
    this.filterCarrocerias = [];

  }

  ngOnInit(): void {
  }


  updateLugar(event: any) {
    if (event.operation) {
      this.filterLugares.push(event.value);
    } else {
      const index: number = this.filterLugares.indexOf(event.value);
      this.filterLugares.splice(index, 1);
    }
  }

  updateMotores(event: any) {
    if (event.operation) {
      this.filterMotores.push(event.value);
    } else {
      const index: number = this.filterMotores.indexOf(event.value);
      this.filterMotores.splice(index, 1);
    }
  }

  updateCarrocerias(event: any) {
    if (event.operation) {
      this.filterCarrocerias.push(event.value);
    } else {
      const index: number = this.filterCarrocerias.indexOf(event.value);
      this.filterCarrocerias.splice(index, 1);
    }
  }

  aplicarFiltros() {
    const objEmit = {
      lugares: this.filterLugares,
      motores: this.filterMotores,
      carrocerias: this.filterCarrocerias,
    }

    this.changeDisplay.emit('none');
    this.filters.emit(objEmit);
  }
}
