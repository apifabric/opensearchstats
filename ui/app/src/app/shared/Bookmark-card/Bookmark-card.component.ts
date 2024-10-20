import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Bookmark-card.component.html',
  styleUrls: ['./Bookmark-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Bookmark-card]': 'true'
  }
})

export class BookmarkCardComponent {


}