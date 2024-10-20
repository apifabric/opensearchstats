import { MenuRootItem } from 'ontimize-web-ngx';

import { BookmarkCardComponent } from './Bookmark-card/Bookmark-card.component';

import { DocumentCardComponent } from './Document-card/Document-card.component';

import { FeedbackCardComponent } from './Feedback-card/Feedback-card.component';

import { IndexingTaskCardComponent } from './IndexingTask-card/IndexingTask-card.component';

import { OpensearchConfigCardComponent } from './OpensearchConfig-card/OpensearchConfig-card.component';

import { QueryCardComponent } from './Query-card/Query-card.component';

import { QueryStatisticCardComponent } from './QueryStatistic-card/QueryStatistic-card.component';

import { SearchResultCardComponent } from './SearchResult-card/SearchResult-card.component';

import { SystemLogCardComponent } from './SystemLog-card/SystemLog-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserActivityCardComponent } from './UserActivity-card/UserActivity-card.component';

import { UserSessionCardComponent } from './UserSession-card/UserSession-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Bookmark', name: 'BOOKMARK', icon: 'view_list', route: '/main/Bookmark' }
    
        ,{ id: 'Document', name: 'DOCUMENT', icon: 'view_list', route: '/main/Document' }
    
        ,{ id: 'Feedback', name: 'FEEDBACK', icon: 'view_list', route: '/main/Feedback' }
    
        ,{ id: 'IndexingTask', name: 'INDEXINGTASK', icon: 'view_list', route: '/main/IndexingTask' }
    
        ,{ id: 'OpensearchConfig', name: 'OPENSEARCHCONFIG', icon: 'view_list', route: '/main/OpensearchConfig' }
    
        ,{ id: 'Query', name: 'QUERY', icon: 'view_list', route: '/main/Query' }
    
        ,{ id: 'QueryStatistic', name: 'QUERYSTATISTIC', icon: 'view_list', route: '/main/QueryStatistic' }
    
        ,{ id: 'SearchResult', name: 'SEARCHRESULT', icon: 'view_list', route: '/main/SearchResult' }
    
        ,{ id: 'SystemLog', name: 'SYSTEMLOG', icon: 'view_list', route: '/main/SystemLog' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserActivity', name: 'USERACTIVITY', icon: 'view_list', route: '/main/UserActivity' }
    
        ,{ id: 'UserSession', name: 'USERSESSION', icon: 'view_list', route: '/main/UserSession' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    BookmarkCardComponent

    ,DocumentCardComponent

    ,FeedbackCardComponent

    ,IndexingTaskCardComponent

    ,OpensearchConfigCardComponent

    ,QueryCardComponent

    ,QueryStatisticCardComponent

    ,SearchResultCardComponent

    ,SystemLogCardComponent

    ,UserCardComponent

    ,UserActivityCardComponent

    ,UserSessionCardComponent

];