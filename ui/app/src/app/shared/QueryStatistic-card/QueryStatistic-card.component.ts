import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './QueryStatistic-card.component.html',
  styleUrls: ['./QueryStatistic-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.QueryStatistic-card]': 'true'
  }
})

export class QueryStatisticCardComponent {


}