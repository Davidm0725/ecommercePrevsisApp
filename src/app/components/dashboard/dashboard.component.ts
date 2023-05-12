import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/commons/services/data.service';
import { environment } from 'src/enviroments/environment';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
const urlBase = environment.URL_BASE;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private dataSvc = inject(DataService);
  carStorage: any[] = JSON.parse(sessionStorage.getItem("data")!);
  itemsInCar = this.carStorage ? this.carStorage.length : 0;
  selectOption: number = 1;
  categories: any[] = [];
  dataXcategoria: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }


  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.dataSvc.getProducts(`${urlBase}`).subscribe(respData => {
      this.categories = respData.categorias;
      if (this.itemsInCar > 0)
        respData.categorias[0].data.forEach((e: any) => {
          let findItem = this.carStorage.find((item: any) => item.id == e.id);
          if (findItem) e.select = true;
        })
      this.dataXcategoria = respData.categorias[0];
    })
  }

  chooseOptions(option: number, element: any) {
    this.carStorage = JSON.parse(sessionStorage.getItem("data")!);
    this.selectOption = option;
    if (element != '') {
      element.data.forEach((e: any) => {
        let findItem = this.carStorage != null ? this.carStorage.find((item: any) => item.id == e.id) : null;
        if (findItem != null) {
          e.select = true;
        } else {
          e.select = false;
        }
      });
    }
    this.dataXcategoria = element;
  }

  addItem(eItem: any) {
    this.itemsInCar = eItem.length;
  }
}
