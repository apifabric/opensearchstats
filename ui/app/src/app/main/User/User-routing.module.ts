import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/Bookmark', loadChildren: () => import('../Bookmark/Bookmark.module').then(m => m.BookmarkModule),
    data: {
        oPermission: {
            permissionId: 'Bookmark-detail-permissions'
        }
    }
},{
    path: ':user_id/Feedback', loadChildren: () => import('../Feedback/Feedback.module').then(m => m.FeedbackModule),
    data: {
        oPermission: {
            permissionId: 'Feedback-detail-permissions'
        }
    }
},{
    path: ':user_id/Query', loadChildren: () => import('../Query/Query.module').then(m => m.QueryModule),
    data: {
        oPermission: {
            permissionId: 'Query-detail-permissions'
        }
    }
},{
    path: ':user_id/UserActivity', loadChildren: () => import('../UserActivity/UserActivity.module').then(m => m.UserActivityModule),
    data: {
        oPermission: {
            permissionId: 'UserActivity-detail-permissions'
        }
    }
},{
    path: ':user_id/UserSession', loadChildren: () => import('../UserSession/UserSession.module').then(m => m.UserSessionModule),
    data: {
        oPermission: {
            permissionId: 'UserSession-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }