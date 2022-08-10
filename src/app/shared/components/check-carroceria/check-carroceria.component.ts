import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-check-carroceria',
  templateUrl: './check-carroceria.component.html',
  styleUrls: ['./check-carroceria.component.scss']
})
export class CheckCarroceriaComponent implements OnInit {

  @Input() public carroceria?: string;
  @Output() public checkValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  checkboxClick(event: any) {
    this.checkValue.emit({"value": String(this.carroceria), "operation": event.target.checked});
  }

}
