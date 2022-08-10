import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-check-motor',
  templateUrl: './check-motor.component.html',
  styleUrls: ['./check-motor.component.scss'],
})
export class CheckMotorComponent implements OnInit {
  @Input() public motor?: string;
  @Output() public checkValue = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {}

  checkboxClick(event: any) {
    this.checkValue.emit({"value": String(this.motor), "operation": event.target.checked});
  }
}
