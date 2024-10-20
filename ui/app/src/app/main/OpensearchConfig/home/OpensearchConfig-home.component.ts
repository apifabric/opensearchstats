import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OTableButtonComponent, OTableComponent } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import {OReportModule,OReportStoreService} from 'ontimize-web-ngx-report'
import { OGridComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'OpensearchConfig-home',
  templateUrl: './OpensearchConfig-home.component.html',
  styleUrls: ['./OpensearchConfig-home.component.scss']
})
export class OpensearchConfigHomeComponent implements AfterViewInit {

  @ViewChild('table', { static: true }) table: OTableComponent;

  @ViewChild('button')
  protected button: OTableButtonComponent;

  ngAfterViewInit() {
  
  }

}