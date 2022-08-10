import { Observable } from 'rxjs';
import { CarsService } from './../../services/cars.service';
import { Car } from './../../interfaces/cars';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-cars-carousel',
  templateUrl: './cars-carousel.component.html',
  styleUrls: ['./cars-carousel.component.scss'],
})
@Injectable()
export class CarsCarouselComponent implements OnInit {
  @Input() public cars?: Observable<Car[]>;

  public config: SwiperOptions;


  constructor(private carsService: CarsService) {
    this.config = {
      slidesPerView: 2,
      loop: false,
      lazy: { loadPrevNext: true },
      slidesPerGroup: 2,
    };
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.cars = this.carsService.getCars();
  }
}
