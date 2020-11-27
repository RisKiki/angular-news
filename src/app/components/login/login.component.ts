import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorLogin          : boolean;
  errorLoginMessage   : string;
  errorCreation       : boolean;
  errorCreationMessage: string;

  loginForm : FormGroup = new FormGroup({
    email    : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  creationForm : FormGroup = new FormGroup({
    name     : new FormControl('', [Validators.required]),
    email    : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(
    private loginService : LoginService,
    private router       : Router
  ) {
    this.errorLogin           = false;
    this.errorLoginMessage    = '';
    this.errorCreation        = false;
    this.errorCreationMessage = '';
  }

  ngOnInit(): void {
  }

  submitLogin() {
    this.loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).then(
      (user : User) => {
        if (user) {
          this.router.navigate(['/accueil'])
        } else {
          this.errorLogin = true;
        }
      }
    ).catch(
      (err : any) => {
        this.errorLogin        = true;
        this.errorLoginMessage = err.error.error.message;
      }
    )
  }

  submitCreation() {
    this.loginService.create(
      this.creationForm.value.name,
      this.creationForm.value.email,
      this.creationForm.value.password
    ).then(
      (user : User) => {
        this.errorCreation = false;
      }
    ).catch(
      (err : any) => {
        this.errorCreation        = true;
        this.errorCreationMessage = err;
      }
    )
  }

  isLogged() : boolean {
    return this.loginService.isLogged();
  }

  logOut() : void {
    this.loginService.setLogged(false);
  }

}
