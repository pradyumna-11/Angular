import { Routes } from '@angular/router';
import { BuiltInComponent } from './built-in/built-in.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    {path:"built-in",component:BuiltInComponent,pathMatch:"full"},
    {path:"courses",component:CoursesComponent,pathMatch:"full"},
];
