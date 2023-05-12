import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './commons/services/in-memory-data.service';
import { SpinnerModule } from './generic-components/spinner/spinner.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpinnerInterceptor } from './commons/interceptors/spinner.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingcardComponent } from './components/shoppingcard/shoppingcard.component';
import { MaterialModule } from 'src/material.module';
import { DashboardcardsComponent } from './generic-components/dashboardcards/dashboardcards.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShoppingcardComponent,
    DashboardcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SpinnerModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
