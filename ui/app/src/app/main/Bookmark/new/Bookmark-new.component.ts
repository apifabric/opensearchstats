import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Bookmark-new',
  templateUrl: './Bookmark-new.component.html',
  styleUrls: ['./Bookmark-new.component.scss']
})
export class BookmarkNewComponent {
  @ViewChild("BookmarkForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}