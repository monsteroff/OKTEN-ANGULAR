import {Component, Input, OnInit} from '@angular/core';
import {UserDataService} from "../../users-services/user-data.service";
import {UserModel} from "../../../models/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: UserModel = {} as UserModel;
  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
  }

}
