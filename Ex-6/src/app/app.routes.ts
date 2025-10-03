import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ShadowComponent } from './shadow/shadow.component';
import { CycleComponent } from './cycle/cycle.component';

export const routes: Routes = [
    {path:"courses",component:CoursesComponent,pathMatch:'full'},
    {path:"shadow",component:ShadowComponent,pathMatch:'full'},
    {path:"cycle",component:CycleComponent,pathMatch:'full'},
];
