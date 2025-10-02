import { Routes } from '@angular/router';
import { HelloComponentComponent } from './hello-component/hello-component.component';

export const routes: Routes = [
    {path:"hello",component:HelloComponentComponent,pathMatch:"full"},
];
