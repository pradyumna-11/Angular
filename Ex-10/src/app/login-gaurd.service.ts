import { inject} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
export const authGuard=()=>{
const loginService=inject(LoginService)
const router=inject(Router)
if (loginService.isUserLoggedIn()) {
              return true;
          }
    router.navigate(['/login']);
    return false;
}
