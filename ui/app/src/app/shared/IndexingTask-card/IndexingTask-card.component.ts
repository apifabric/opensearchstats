import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './IndexingTask-card.component.html',
  styleUrls: ['./IndexingTask-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.IndexingTask-card]': 'true'
  }
})

export class IndexingTaskCardComponent {


}