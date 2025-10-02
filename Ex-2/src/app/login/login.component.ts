import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = ""
  password = ""
  loginText = ""
  changeUsername(event: any) {
    this.username = event.target.value
  }
  changePassword(event: any) {
    this.password = event.target.value
  }
  login() {
    console.log(this.username, this.password)
    if(this.username === "admin" && this.password === "admin") {
      this.loginText = "Welcome Admin"
    } else {
      this.loginText = "Login Failed"
    }
    this.username = ""
    this.password = ""
  }
}
