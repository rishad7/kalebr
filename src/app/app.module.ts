import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component'; 
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents, // loading routing component for url routing
    LoadingSpinnerComponent // loading spinner component
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // for http services
    AppRoutingModule, // for routing
    FormsModule, // for data binding
    ClickOutsideModule // loading ClickOutsideModule for autocomplete div
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
