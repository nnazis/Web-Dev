import { Routes } from '@angular/router';
import {User1} from './components/user1/user1';
import {Home} from './components/home/home';

export const routes: Routes = [
    {
        path: 'user1',
        title: 'App User1 Page',
        component: User1,
    },
    {
        path: '',
        title: 'App Home Page',
        component: Home,
    },
];
