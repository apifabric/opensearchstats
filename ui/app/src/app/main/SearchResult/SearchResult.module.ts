import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SEARCHRESULT_MODULE_DECLARATIONS, SearchResultRoutingModule} from  './SearchResult-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SearchResultRoutingModule
  ],
  declarations: SEARCHRESULT_MODULE_DECLARATIONS,
  exports: SEARCHRESULT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchResultModule { }