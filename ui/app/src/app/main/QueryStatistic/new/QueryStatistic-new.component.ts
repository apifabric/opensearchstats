import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'QueryStatistic-new',
  templateUrl: './QueryStatistic-new.component.html',
  styleUrls: ['./QueryStatistic-new.component.scss']
})
export class QueryStatisticNewComponent {
  @ViewChild("QueryStatisticForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}