import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSessionHomeComponent } from './home/UserSession-home.component';
import { UserSessionNewComponent } from './new/UserSession-new.component';
import { UserSessionDetailComponent } from './detail/UserSession-detail.component';

const routes: Routes = [
  {path: '', component: UserSessionHomeComponent},
  { path: 'new', component: UserSessionNewComponent },
  { path: ':id', component: UserSessionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserSession-detail-permissions'
      }
    }
  }
];

export const USERSESSION_MODULE_DECLARATIONS = [
    UserSessionHomeComponent,
    UserSessionNewComponent,
    UserSessionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSessionRoutingModule { }