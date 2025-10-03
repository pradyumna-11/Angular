import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookComponent } from './book/book.component';
import { authGuard } from './login-gaurd.service';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'books', loadChildren: () => import('./book/book.module').then(m => m.BookModule) },
    { path: 'detail/:id', component: BookDetailComponent },
    {path: 'login',component:LoginComponent},
    { path: '**', component: PageNotFoundComponent },
];
