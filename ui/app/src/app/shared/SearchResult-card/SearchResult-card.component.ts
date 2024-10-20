import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SearchResult-card.component.html',
  styleUrls: ['./SearchResult-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SearchResult-card]': 'true'
  }
})

export class SearchResultCardComponent {


}