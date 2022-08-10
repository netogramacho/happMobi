import { Observable } from 'rxjs';
import { CarsService } from './../../services/cars.service';
import { Car } from './../../interfaces/cars';
import { Component, Injectable, Input, OnInit, OnChanges } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-cars-carousel',
  templateUrl: './cars-carousel.component.html',
  styleUrls: ['./cars-carousel.component.scss'],
})
@Injectable()
export class CarsCarouselComponent implements OnInit {
  @Input() public cars!: Car[] | null;

  public config: SwiperOptions;


  constructor() {
    this.config = {
      slidesPerView: 2,
      loop: false,
      lazy: { loadPrevNext: true },
      slidesPerGroup: 2,
    };
  }

  ngOnInit(): void {
  }

  ngOnChanges():void {

  }

}
