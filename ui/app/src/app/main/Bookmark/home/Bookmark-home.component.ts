import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OTableButtonComponent, OTableComponent } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import {OReportModule,OReportStoreService} from 'ontimize-web-ngx-report'
import { OGridComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Bookmark-home',
  templateUrl: './Bookmark-home.component.html',
  styleUrls: ['./Bookmark-home.component.scss']
})
export class BookmarkHomeComponent implements AfterViewInit {

  @ViewChild('table', { static: true }) table: OTableComponent;

  @ViewChild('button')
  protected button: OTableButtonComponent;

  ngAfterViewInit() {
  
  }

}