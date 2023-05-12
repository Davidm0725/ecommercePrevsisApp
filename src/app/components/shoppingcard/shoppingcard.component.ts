import { Component, Input, Output, EventEmitter, inject } from '@angular/core';


@Component({
  selector: 'app-shoppingcard',
  templateUrl: './shoppingcard.component.html',
  styleUrls: ['./shoppingcard.component.css']
})
export class ShoppingcardComponent {
  @Output() updateCar = new EventEmitter<any>();
  storeItemsCar = JSON.parse(sessionStorage.getItem("data")!);
  shopCar = this.storeItemsCar ? this.storeItemsCar : [];
  fullPayment = 0;
  // itemsCards = [
  //   {
  //     id: 123,
  //     name: 'Airpods',
  //     mark: 'Apple',
  //     price: 300,
  //     amount: 1,
  //     img: 'https://hips.hearstapps.com/hmg-prod/images/airpods-pro-2022-1663797595.jpg?crop=0.5xw:1xh;center,top&resize=1200:*'
  //   },
  //   {
  //     id: 324,
  //     name: 'Lo que el viendo se llevo',
  //     category: 'Book',
  //     mark: 'Margaret',
  //     price: 30,
  //     amount: 1,
  //     img: 'https://www.milcomics.com/1299115-thickbox_default/lo-que-el-viento-se-llevo.jpg'
  //   }
  // ]


  ngOnInit() {
    this.calculateTotalPay();
  }

  calculateTotalPay() {
    this.shopCar.forEach((e: any) => {
      this.fullPayment = this.fullPayment + e.precio;
    })
  }

  deleteItem(item: any) {
    let indexItem = this.shopCar.indexOf(item);
    let itemFind = this.shopCar.find((e: any) => e.id == item.id);
    this.fullPayment = this.fullPayment - itemFind!.precio;
    this.shopCar.splice(indexItem, 1);
    sessionStorage.setItem("data", JSON.stringify(this.shopCar));
    this.updateCar.emit(this.shopCar);
  }
}
