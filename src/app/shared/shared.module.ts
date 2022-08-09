import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { MenuOptionComponent } from './menu-option/menu-option.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    BottomMenuComponent,
    MenuOptionComponent
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    BottomMenuComponent,
    MenuOptionComponent
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
