
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';
import { CarsCardsComponent } from './components/cars-cards/cars-cards.component';
import { SwiperModule } from 'swiper/angular';
import { CarsCarouselComponent } from './components/cars-carousel/cars-carousel.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    BottomMenuComponent,
    MenuOptionComponent,
    CarsCarouselComponent,
    CarsCardsComponent,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    BottomMenuComponent,
    MenuOptionComponent,
    CarsCarouselComponent,
    CarsCardsComponent,
  ],
  imports: [CommonModule, SwiperModule, HttpClientModule],
})
export class SharedModule {}
