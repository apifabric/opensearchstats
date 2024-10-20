import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryStatisticHomeComponent } from './home/QueryStatistic-home.component';
import { QueryStatisticNewComponent } from './new/QueryStatistic-new.component';
import { QueryStatisticDetailComponent } from './detail/QueryStatistic-detail.component';

const routes: Routes = [
  {path: '', component: QueryStatisticHomeComponent},
  { path: 'new', component: QueryStatisticNewComponent },
  { path: ':id', component: QueryStatisticDetailComponent,
    data: {
      oPermission: {
        permissionId: 'QueryStatistic-detail-permissions'
      }
    }
  }
];

export const QUERYSTATISTIC_MODULE_DECLARATIONS = [
    QueryStatisticHomeComponent,
    QueryStatisticNewComponent,
    QueryStatisticDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryStatisticRoutingModule { }