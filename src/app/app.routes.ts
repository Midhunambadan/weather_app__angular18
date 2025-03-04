import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { LoginComponent } from './core/pages/login/login.component';
import { AboutComponent } from './core/pages/about/about.component';
import { NewsComponent } from './core/pages/news/news.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent,
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'news',
        component:NewsComponent
    },

];
