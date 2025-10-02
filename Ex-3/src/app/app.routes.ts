import { Routes } from '@angular/router';
import { StylesComponent } from './styles/styles.component';
import { ClassComponent } from './class/class.component';
import { CustomComponent } from './custom/custom.component';

export const routes: Routes = [
    {path:"styles",component:StylesComponent,pathMatch:"full"},
    {path:"class",component:ClassComponent,pathMatch:"full"},
    {path:"custom",component:CustomComponent,pathMatch:"full"}
];
