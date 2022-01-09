import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users-service.service';
import { UserInterface } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'json-server-api';
  users: UserInterface[] = [];

  constructor(private service: UsersService) {}

  ngOnInit() {
    console.log('ONINIT');
    this.service.getUsers().subscribe((users: UserInterface[]) => (this.users = users));
  }

  removeUser(id: any) {
    this.service.removeUser(id).subscribe(() => {
      this.users = this.users.filter((user: any) => user.id !== id);
    });
  }
}
