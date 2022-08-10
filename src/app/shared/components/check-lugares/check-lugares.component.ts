import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-check-lugares',
  templateUrl: './check-lugares.component.html',
  styleUrls: ['./check-lugares.component.scss']
})
export class CheckLugaresComponent implements OnInit {

  @Input() public lugar?:string;
  @Output() public checkValue = new EventEmitter<any>();

  public value?: number;

  constructor() { }

  ngOnInit(): void {
    this.value = parseInt(this.lugar!);
  }

  checkboxClick(event: any) {
    this.checkValue.emit({"value": String(this.value), "operation": event.target.checked});
  }

}
