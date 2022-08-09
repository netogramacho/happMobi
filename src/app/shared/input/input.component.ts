import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() public placeholder?: string;
  @Input() public isSearch?: boolean;
  @Input() public type?: string;
  @Input() public content?: string;
  @Input() public color?: string;
  @Input() public value?: string;

  constructor() {
    this.placeholder = '';
    this.isSearch = false;
    this.type = 'text';
    this.content = '';
    this.color = '';
    this.value = '';
  }

  ngOnInit(): void {
  }

}
