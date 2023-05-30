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

  constructor(private restService: RestService) {}

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
}
