import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {UserRegister} from "../../model/user.register";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  public registerForm: FormGroup;
  public error: boolean = false;
  public invalidPasswords = false;
  public lastPage: string = '';
  public userId: number = -1;

  constructor(private router: Router,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params['lastPage']) {
          this.lastPage = params['lastPage'];
        }
        if (params['index'] && params['index'] !== '-1'){
          this.userService.getById(params['index']).subscribe(user => {
              this.registerForm.setValue({email: user.email, username: user.username, password: user.password, repeatPassword: user.password});
              this.userId = user.id;
            }
          );
        }
      });
  }

  public registerUser(form: FormGroup): void {
    if (this.registerForm.value.password !== this.registerForm.value.repeatPassword){
      this.invalidPasswords = true;
      return;
    }
    let userRegister: UserRegister = new UserRegister(form.value.email, form.value.username, form.value.password, this.userId);
    this.userService.save(userRegister).subscribe(success => {
      if (success){
        this.router.navigate([this.lastPage]);
      }
      this.registerForm.reset();
      this.error = true;
    })
  }



}
