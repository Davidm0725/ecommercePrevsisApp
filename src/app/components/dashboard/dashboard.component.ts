import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/commons/services/data.service';
import { environment } from 'src/enviroments/environment';
const urlBase = environment.URL_BASE;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private hotelsSvc = inject(DataService);


  ngOnInit() {
    this.hotelsSvc.getHotels(`${urlBase}`).subscribe(data => {
      console.log(data, 'data')

      // setTimeout(() => {
      //   console.log(data, 'data')

      // }, 2000);
      // data.splice(0, 1);
      // bookings = data.filter((e: any) => e.bookings.length > 0);
      // this.dataSource = bookings.map((e: any) => e.bookings);
    })
  }
}
