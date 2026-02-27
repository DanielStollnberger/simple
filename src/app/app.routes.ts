import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { UserComponent } from './user/user';
import { UserInfo } from './user/user-info/user-info';

export const routes: Routes = [
    {
        path: '', component: Dashboard
    },
    {
        path: 'user', component: UserComponent
    },
    { 
        path: 'user/:id', component: UserInfo
    }
];
