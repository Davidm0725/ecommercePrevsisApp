import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShoppingcardComponent } from './components/shoppingcard/shoppingcard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'card', component: ShoppingcardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
