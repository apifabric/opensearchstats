import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserSession-card.component.html',
  styleUrls: ['./UserSession-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserSession-card]': 'true'
  }
})

export class UserSessionCardComponent {


}