import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  model = new User();

  submitted = false;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    console.log(this.model.username);
    console.log(this.model.password);
    this.userService.validateUser(
        this.model.username, this.model.password
    ).subscribe();
  }

}
