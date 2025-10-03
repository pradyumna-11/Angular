import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
    {path:"registration",component:RegistrationComponent,pathMatch:'full'},
    {path:"reactive",component:ReactiveFormComponent,pathMatch:'full'},
];
