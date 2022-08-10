import { FormsModule } from '@angular/forms';

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
import { CheckCarroceriaComponent } from './components/check-carroceria/check-carroceria.component';
import { CheckMotorComponent } from './components/check-motor/check-motor.component';
import { CheckLugaresComponent } from './components/check-lugares/check-lugares.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    BottomMenuComponent,
    MenuOptionComponent,
    CarsCarouselComponent,
    CarsCardsComponent,
    CheckCarroceriaComponent,
    CheckMotorComponent,
    CheckLugaresComponent,
    FilterComponent,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    BottomMenuComponent,
    MenuOptionComponent,
    CarsCarouselComponent,
    CarsCardsComponent,
    CheckCarroceriaComponent,
    CheckMotorComponent,
    CheckLugaresComponent,
    FilterComponent,
  ],
  imports: [CommonModule, SwiperModule, HttpClientModule, FormsModule],
})
export class SharedModule {}
