import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users-service.service';
import { UserInterface } from './user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'json-server-api';
  users: UserInterface[] = [];
  openAddUser!: boolean;
  name: string = '';
  age!: number;
  img: string = '';

  constructor(private service: UsersService) {}

  ngOnInit() {
    console.log('ONINIT');
    this.service.getUsers().subscribe((users: UserInterface[]) => {
      this.users = users;
      console.log(this.users);
    });
  }

  removeUser(id: any) {
    this.service.removeUser(id).subscribe(() => {
      this.users = this.users.filter((user: any) => user.id !== id);
    });
  }

  addUser(name: string, age: number, img: string): void {
    this.service.addUser(this.name, this.age, this.img).subscribe((newUser) => {
      this.users.push(newUser);
    });
  }

  onOpenAddUser() {
    this.openAddUser = true;
    // this.openAddUser !== this.openAddUser;
    console.log(this.openAddUser);
  }
}
