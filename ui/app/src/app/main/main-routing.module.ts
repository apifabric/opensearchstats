import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Bookmark', loadChildren: () => import('./Bookmark/Bookmark.module').then(m => m.BookmarkModule) },
    
        { path: 'Document', loadChildren: () => import('./Document/Document.module').then(m => m.DocumentModule) },
    
        { path: 'Feedback', loadChildren: () => import('./Feedback/Feedback.module').then(m => m.FeedbackModule) },
    
        { path: 'IndexingTask', loadChildren: () => import('./IndexingTask/IndexingTask.module').then(m => m.IndexingTaskModule) },
    
        { path: 'OpensearchConfig', loadChildren: () => import('./OpensearchConfig/OpensearchConfig.module').then(m => m.OpensearchConfigModule) },
    
        { path: 'Query', loadChildren: () => import('./Query/Query.module').then(m => m.QueryModule) },
    
        { path: 'QueryStatistic', loadChildren: () => import('./QueryStatistic/QueryStatistic.module').then(m => m.QueryStatisticModule) },
    
        { path: 'SearchResult', loadChildren: () => import('./SearchResult/SearchResult.module').then(m => m.SearchResultModule) },
    
        { path: 'SystemLog', loadChildren: () => import('./SystemLog/SystemLog.module').then(m => m.SystemLogModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserActivity', loadChildren: () => import('./UserActivity/UserActivity.module').then(m => m.UserActivityModule) },
    
        { path: 'UserSession', loadChildren: () => import('./UserSession/UserSession.module').then(m => m.UserSessionModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }