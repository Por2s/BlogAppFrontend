import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {UserService} from "../../service/user/user.service";
import {UserRequest} from "../../model/user.request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup;
  public wrongValue: boolean = false;

  constructor(private router: Router, private userService: UserService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  public loginUser(form: FormGroup): void {
    let userLogin: UserRequest = new UserRequest(form.value.email, form.value.password);
    this.userService.loginUser(userLogin).subscribe(name => {
      if (name.username !== ''){
        localStorage.setItem('loggedInUser', name.username);
        this.router.navigate(['blogList']);
      }
      else {
        this.wrongValue = true;
      }
    })
  }

  public redirectToRegister(): void {
    this.router.navigate(['register'], {queryParams: {lastPage: this.router.url}})
  }

}
