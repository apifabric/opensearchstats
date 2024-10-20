import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './OpensearchConfig-card.component.html',
  styleUrls: ['./OpensearchConfig-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.OpensearchConfig-card]': 'true'
  }
})

export class OpensearchConfigCardComponent {


}