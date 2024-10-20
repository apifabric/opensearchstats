import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryHomeComponent } from './home/Query-home.component';
import { QueryNewComponent } from './new/Query-new.component';
import { QueryDetailComponent } from './detail/Query-detail.component';

const routes: Routes = [
  {path: '', component: QueryHomeComponent},
  { path: 'new', component: QueryNewComponent },
  { path: ':id', component: QueryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Query-detail-permissions'
      }
    }
  },{
    path: ':query_id/Bookmark', loadChildren: () => import('../Bookmark/Bookmark.module').then(m => m.BookmarkModule),
    data: {
        oPermission: {
            permissionId: 'Bookmark-detail-permissions'
        }
    }
},{
    path: ':query_id/Feedback', loadChildren: () => import('../Feedback/Feedback.module').then(m => m.FeedbackModule),
    data: {
        oPermission: {
            permissionId: 'Feedback-detail-permissions'
        }
    }
},{
    path: ':query_id/QueryStatistic', loadChildren: () => import('../QueryStatistic/QueryStatistic.module').then(m => m.QueryStatisticModule),
    data: {
        oPermission: {
            permissionId: 'QueryStatistic-detail-permissions'
        }
    }
},{
    path: ':query_id/SearchResult', loadChildren: () => import('../SearchResult/SearchResult.module').then(m => m.SearchResultModule),
    data: {
        oPermission: {
            permissionId: 'SearchResult-detail-permissions'
        }
    }
}
];

export const QUERY_MODULE_DECLARATIONS = [
    QueryHomeComponent,
    QueryNewComponent,
    QueryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }