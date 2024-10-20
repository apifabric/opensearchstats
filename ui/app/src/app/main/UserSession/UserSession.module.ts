import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERSESSION_MODULE_DECLARATIONS, UserSessionRoutingModule} from  './UserSession-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserSessionRoutingModule
  ],
  declarations: USERSESSION_MODULE_DECLARATIONS,
  exports: USERSESSION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserSessionModule { }