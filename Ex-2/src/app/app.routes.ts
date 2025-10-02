import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { ChoicesComponent } from './choices/choices.component';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent,pathMatch:"full"},
    {path:"courses",component:CoursesComponent,pathMatch:"full"},
    {path:"choices",component:ChoicesComponent,pathMatch:"full"},
    {path:"repeat",component:CustomdirectiveComponent,pathMatch:"full"},
];
