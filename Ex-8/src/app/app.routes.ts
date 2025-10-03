import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ObserverComponent } from './observer/observer.component';

export const routes: Routes = [
    {path:"books",component:BookComponent,pathMatch:'full'},
    {path:"observer",component:ObserverComponent,pathMatch:'full'},
];
