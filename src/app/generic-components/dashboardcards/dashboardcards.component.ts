import { Component, Input, Output, EventEmitter, inject } from '@angular/core';


@Component({
  selector: 'app-dashboardcards',
  templateUrl: './dashboardcards.component.html',
  styleUrls: ['./dashboardcards.component.css']
})
export class DashboardcardsComponent {
  @Input() dataXcategoria!: any;
  @Output() dataToCar = new EventEmitter<any>();
  goods: any[] = [];
  dataStorage = JSON.parse(sessionStorage.getItem("data")!);
  shopCar: any[] = this.dataStorage ? this.dataStorage : [];

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.dataXcategoria) this.goods = this.dataXcategoria.data;
  }

  addCar(item: any) {
    item.select = true;
    this.shopCar.push(item);
    sessionStorage.setItem("data", JSON.stringify(this.shopCar))
    this.dataToCar.emit(this.shopCar);
  }
}
