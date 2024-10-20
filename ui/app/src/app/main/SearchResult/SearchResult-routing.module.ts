import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultHomeComponent } from './home/SearchResult-home.component';
import { SearchResultNewComponent } from './new/SearchResult-new.component';
import { SearchResultDetailComponent } from './detail/SearchResult-detail.component';

const routes: Routes = [
  {path: '', component: SearchResultHomeComponent},
  { path: 'new', component: SearchResultNewComponent },
  { path: ':id', component: SearchResultDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SearchResult-detail-permissions'
      }
    }
  }
];

export const SEARCHRESULT_MODULE_DECLARATIONS = [
    SearchResultHomeComponent,
    SearchResultNewComponent,
    SearchResultDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultRoutingModule { }