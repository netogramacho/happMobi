import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  public filterDisplay: string;
  constructor() {
    this.filterDisplay = 'none';
  }

  ngOnInit(): void {
  }

  openFilters() {
    this.filterDisplay = 'block';
  }

  aplicarFiltro(event: any) {
    console.log(event);
  }
}
