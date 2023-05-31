import { Component } from '@angular/core';
import { Cenausd } from 'src/app/Models/cenausd';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-usdrate',
  templateUrl: './usdrate.component.html',
  styleUrls: ['./usdrate.component.css'],
})
export class UsdrateComponent {
  pricies = new Array<Cenausd>();
  priciesFromCount = new Array<Cenausd>();
  priciesFromDate = new Array<Cenausd>();

  constructor(private restService: RestService) {}

  topCount: any;
  date: any;

  ngOnInit(): void {
    this.getUsd();
  }

  getUsd() {
    this.restService
      .getjson('http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json')
      .subscribe((data) => {
        data.rates.map((x: any) => {
          const c = new Cenausd();
          c.effectiveDate = x.effectiveDate;
          c.mid = x.mid;
          this.pricies.push(c);
        });
      });
  }

  onSubmitDate() {
    this.priciesFromDate = [];
    this.restService
      .getjson(
        'http://api.nbp.pl/api/exchangerates/rates/a/usd/' +
          this.date +
          '?format=json'
      )
      .subscribe((data) => {
        data.rates.map((x: any) => {
          const c = new Cenausd();
          c.effectiveDate = x.effectiveDate;
          c.mid = x.mid;
          this.priciesFromDate.push(c);
        });
      });
  }
}
