import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './views/pages/headers/headers.component';
import { MainsComponent } from './views/pages/mains/mains.component';
import { FootersComponent } from './views/pages/footers/footers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    MainsComponent,
    FootersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
