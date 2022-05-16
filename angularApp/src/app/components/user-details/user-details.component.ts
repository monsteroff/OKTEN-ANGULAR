import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IUserDetails} from '../../interfaces/IUserDetails';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    // this.activatedRoute.url.subscribe(v => console.log(v))
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getById(id).subscribe(v => {
        console.log(v)
        this.userDetailsObj = v
      })
    })
  }

}
