import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';

export const routes: Routes = [
    {path:"bookings",component:BookComponent,pathMatch:'full'},
];
