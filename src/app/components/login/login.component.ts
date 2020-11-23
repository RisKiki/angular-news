import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    email    : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.setCurrentUser(new User(this.loginForm.value.email, this.loginForm.value.password));
    this.loginService.setLogged(true);
  }

  isLogged() : boolean {
    return this.loginService.isLogged();
  }

  logOut() : void {
    this.loginService.setLogged(false);
  }

}
