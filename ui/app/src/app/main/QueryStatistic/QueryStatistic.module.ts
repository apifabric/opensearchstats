import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {QUERYSTATISTIC_MODULE_DECLARATIONS, QueryStatisticRoutingModule} from  './QueryStatistic-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    QueryStatisticRoutingModule
  ],
  declarations: QUERYSTATISTIC_MODULE_DECLARATIONS,
  exports: QUERYSTATISTIC_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QueryStatisticModule { }