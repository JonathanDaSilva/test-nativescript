import { Routes } from '@angular/router';
import { Add } from './Add';
import { List } from './List';

export const ROUTES = [
    { path: '', component: List },
    { path: 'add', component: Add },
];
