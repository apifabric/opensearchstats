import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexingTaskHomeComponent } from './home/IndexingTask-home.component';
import { IndexingTaskNewComponent } from './new/IndexingTask-new.component';
import { IndexingTaskDetailComponent } from './detail/IndexingTask-detail.component';

const routes: Routes = [
  {path: '', component: IndexingTaskHomeComponent},
  { path: 'new', component: IndexingTaskNewComponent },
  { path: ':id', component: IndexingTaskDetailComponent,
    data: {
      oPermission: {
        permissionId: 'IndexingTask-detail-permissions'
      }
    }
  }
];

export const INDEXINGTASK_MODULE_DECLARATIONS = [
    IndexingTaskHomeComponent,
    IndexingTaskNewComponent,
    IndexingTaskDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexingTaskRoutingModule { }