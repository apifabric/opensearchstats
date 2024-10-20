import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {OPENSEARCHCONFIG_MODULE_DECLARATIONS, OpensearchConfigRoutingModule} from  './OpensearchConfig-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    OpensearchConfigRoutingModule
  ],
  declarations: OPENSEARCHCONFIG_MODULE_DECLARATIONS,
  exports: OPENSEARCHCONFIG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OpensearchConfigModule { }