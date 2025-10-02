import { Routes } from '@angular/router';
import { AttributeComponent } from './attribute/attribute.component';
import { EventComponent } from './event/event.component';

export const routes: Routes = [
    {path:"attribute",component:AttributeComponent,pathMatch:"full"},
    {path:"event",component:EventComponent,pathMatch:"full"},
];
