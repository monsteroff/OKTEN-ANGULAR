import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../../users-services/user-data.service";
import {UserModel} from "../../../models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[] = [];
  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.getAll().subscribe(value => this.users = value);
  }

}
