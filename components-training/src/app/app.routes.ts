import { Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HeaderComponent } from './core/header/header.component';

export const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HeaderComponent},

    // User
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
];
