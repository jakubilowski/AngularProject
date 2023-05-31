import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  strEmail = '';
  strMessage = '';

  btnSendClick() {
    alert(
      'Udało się skorzystać z formularza, Twoje wpisane dane:' +
        '\n Email: ' +
        this.strEmail +
        '\n Wiadomosć: ' +
        this.strMessage
    );
  }
}
