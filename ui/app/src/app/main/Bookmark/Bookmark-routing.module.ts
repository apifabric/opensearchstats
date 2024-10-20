import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkHomeComponent } from './home/Bookmark-home.component';
import { BookmarkNewComponent } from './new/Bookmark-new.component';
import { BookmarkDetailComponent } from './detail/Bookmark-detail.component';

const routes: Routes = [
  {path: '', component: BookmarkHomeComponent},
  { path: 'new', component: BookmarkNewComponent },
  { path: ':id', component: BookmarkDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Bookmark-detail-permissions'
      }
    }
  }
];

export const BOOKMARK_MODULE_DECLARATIONS = [
    BookmarkHomeComponent,
    BookmarkNewComponent,
    BookmarkDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarkRoutingModule { }