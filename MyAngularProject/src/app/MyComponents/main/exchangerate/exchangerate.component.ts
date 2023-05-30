import { Component } from '@angular/core';
import { CenaZlota } from 'src/app/Models/cena-zlota';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-exchangerate',
  templateUrl: './exchangerate.component.html',
  styleUrls: ['./exchangerate.component.css'],
})
export class ExchangerateComponent {
  pricies = new Array<CenaZlota>();
  priciesFromCount = new Array<CenaZlota>();
  priciesFromDate = new Array<CenaZlota>();

  constructor(private restService: RestService) {}

  topCount: any;
  date: any;

  ngOnInit(): void {
    this.getZloto();
  }

  getZloto() {
    this.restService
      .getjson('http://api.nbp.pl/api/cenyzlota?format=json')
      .subscribe((data) => {
        data.map((x: any) => {
          const c = new CenaZlota();
          c.data = x.data;
          c.cena = x.cena;
          console.log(c);
          this.pricies.push(c);
        });
      });
  }

  onSubmit() {
    this.priciesFromCount = [];
    this.restService
      .getjson(
        'http://api.nbp.pl/api/cenyzlota/last/' + this.topCount + '?format=json'
      )
      .subscribe((data) => {
        data.map((x: any) => {
          const c = new CenaZlota();
          c.data = x.data;
          c.cena = x.cena;
          this.priciesFromCount.push(c);
        });
      });
  }

  onSubmitDate() {
    this.priciesFromDate = [];
    this.restService
      .getjson('http://api.nbp.pl/api/cenyzlota/' + this.date + '?format=json')
      .subscribe((data) => {
        data.map((x: any) => {
          const c = new CenaZlota();
          c.data = x.data;
          c.cena = x.cena;
          this.priciesFromDate.push(c);
        });
      });
  }
}
