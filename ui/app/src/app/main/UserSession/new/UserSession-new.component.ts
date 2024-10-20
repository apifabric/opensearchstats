import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserSession-new',
  templateUrl: './UserSession-new.component.html',
  styleUrls: ['./UserSession-new.component.scss']
})
export class UserSessionNewComponent {
  @ViewChild("UserSessionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}