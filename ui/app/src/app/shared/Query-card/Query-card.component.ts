import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Query-card.component.html',
  styleUrls: ['./Query-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Query-card]': 'true'
  }
})

export class QueryCardComponent {


}