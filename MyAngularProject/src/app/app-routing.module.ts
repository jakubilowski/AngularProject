import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/main/home/home.component';
import { ExchangerateComponent } from './MyComponents/main/exchangerate/exchangerate.component';
import { AboutComponent } from './MyComponents/main/about/about.component';
import { ContactComponent } from './MyComponents/main/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'exchangeRate', component: ExchangerateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
