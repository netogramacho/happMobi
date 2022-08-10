import { Car } from './../../interfaces/cars';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-cards',
  templateUrl: './cars-cards.component.html',
  styleUrls: ['./cars-cards.component.scss']
})
export class CarsCardsComponent implements OnInit {
  @Input() public car?: Car;
  constructor() { }

  ngOnInit(): void {
  }

}
