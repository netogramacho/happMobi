import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public color?: string;
  @Input() public content?: string;
  @Input() public contentBold?: string;

  public styles: any;

  constructor() {

  }

  ngOnInit(): void {
    this.styles = {
      'background-color': this.color
    }}
}
