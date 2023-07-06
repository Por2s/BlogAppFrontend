import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {UserRegister} from "../../model/user.register";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  public userList: UserRegister[] = [];

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(userList => this.userList = userList);
  }

  public redirectToRegister(): void {
    this.router.navigate(['/register'], {queryParams: {lastPage: this.router.url}});
  }

  public redirectToEdit(user: UserRegister): void {
    this.router.navigate(['/register'], {queryParams: {lastPage: this.router.url, index: user.id}})
  }


}
