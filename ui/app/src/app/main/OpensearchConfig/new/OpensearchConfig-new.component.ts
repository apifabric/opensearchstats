import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'OpensearchConfig-new',
  templateUrl: './OpensearchConfig-new.component.html',
  styleUrls: ['./OpensearchConfig-new.component.scss']
})
export class OpensearchConfigNewComponent {
  @ViewChild("OpensearchConfigForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}