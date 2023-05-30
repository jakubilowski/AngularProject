import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyMaterialModule } from './mymaterial.module';
import { HomeComponent } from './MyComponents/main/home/home.component';

import { ExchangerateComponent } from './MyComponents/main/exchangerate/exchangerate.component';
import { MainComponent } from './MyComponents/main/main.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/main/about/about.component';
import { ContactComponent } from './MyComponents/main/contact/contact.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExchangerateComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
