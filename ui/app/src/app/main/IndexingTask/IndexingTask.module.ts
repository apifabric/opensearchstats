import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INDEXINGTASK_MODULE_DECLARATIONS, IndexingTaskRoutingModule} from  './IndexingTask-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    IndexingTaskRoutingModule
  ],
  declarations: INDEXINGTASK_MODULE_DECLARATIONS,
  exports: INDEXINGTASK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexingTaskModule { }