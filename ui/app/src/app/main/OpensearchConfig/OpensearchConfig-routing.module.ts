import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpensearchConfigHomeComponent } from './home/OpensearchConfig-home.component';
import { OpensearchConfigNewComponent } from './new/OpensearchConfig-new.component';
import { OpensearchConfigDetailComponent } from './detail/OpensearchConfig-detail.component';

const routes: Routes = [
  {path: '', component: OpensearchConfigHomeComponent},
  { path: 'new', component: OpensearchConfigNewComponent },
  { path: ':id', component: OpensearchConfigDetailComponent,
    data: {
      oPermission: {
        permissionId: 'OpensearchConfig-detail-permissions'
      }
    }
  }
];

export const OPENSEARCHCONFIG_MODULE_DECLARATIONS = [
    OpensearchConfigHomeComponent,
    OpensearchConfigNewComponent,
    OpensearchConfigDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpensearchConfigRoutingModule { }