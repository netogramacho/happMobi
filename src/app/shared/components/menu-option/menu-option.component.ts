import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.scss']
})
export class MenuOptionComponent implements OnInit {

  @Input() public title: string;
  @Input() public icon: string;

  public iconPath: string;

  constructor() {
    this.title = '';
    this.icon = '';
    this.iconPath = '';
   }

  ngOnInit(): void {
    this.iconPath = 'assets/images/' + this.icon;
  }

}
