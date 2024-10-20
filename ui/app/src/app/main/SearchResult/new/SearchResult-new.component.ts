import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SearchResult-new',
  templateUrl: './SearchResult-new.component.html',
  styleUrls: ['./SearchResult-new.component.scss']
})
export class SearchResultNewComponent {
  @ViewChild("SearchResultForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}