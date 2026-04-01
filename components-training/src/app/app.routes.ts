import { Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { CurrentThemeComponent } from './theme/current-theme/current-theme.component';
import { AddThemeComponent } from './theme/add-theme/add-theme.component';

export const routes: Routes = [

    {path: 'home', component: MainComponent },

    // User
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},

    //Theme routing
    {path: 'themes', children: [
        {path: '', component: MainComponent},
        {path: ':themeId', component: CurrentThemeComponent},
    ]},
    {path: 'add-theme', component: AddThemeComponent },

    {path: '**', component: ErrorComponent}

];
