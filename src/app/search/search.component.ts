import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CarsService } from '../shared/services/cars.service';
import { Car } from '../shared/interfaces/cars';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public cars!: Car[];

  public filterDisplay: string;
  constructor(private carsService: CarsService) {
    this.filterDisplay = 'none';
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carsService.getCars().subscribe((json) => {
      this.cars = json;
    });
  }

  openFilters() {
    this.filterDisplay = 'block';
  }

  hideFilters(event: string) {
    this.filterDisplay = event;
  }

  aplicarFiltro(event: any) {
    this.carsService.getCars().subscribe((json) => {
      this.cars = json;

      if (event.carrocerias.length > 0) {
        this.cars = this.filterCarroceria(this.cars, event.carrocerias);
      }
      if (event.motores.length > 0) {
        this.cars = this.filterMotores(this.cars, event.motores);
      }
      if (event.lugares.length > 0) {
        this.cars = this.filterLugares(this.cars, event.lugares);
      }
    });
  }

  filterCarroceria(cars: Car[], carrocerias: string[]) {
    let carsFiltered: Car[] = [];

    cars.filter((car) => {
      carrocerias.forEach((carroceria: string) => {
        if (car.type === carroceria) {
          carsFiltered.push(car);
        }
      });
    });
    return carsFiltered;
  }

  filterMotores(cars: Car[], motores: string[]) {
    let carsFiltered: Car[] = [];

    cars.filter((car) => {
      motores.forEach((motor: string) => {
        if (car.engine === motor) {
          carsFiltered.push(car);
        }
      });
    });
    return carsFiltered;
  }

  filterLugares(cars: Car[], lugares: string[]) {
    let carsFiltered: Car[] = [];

    cars.filter((car) => {
      lugares.forEach((lugar: string) => {
        if (car.size === lugar) {
          carsFiltered.push(car);
        }
      });
    });
    return carsFiltered;
  }
}
