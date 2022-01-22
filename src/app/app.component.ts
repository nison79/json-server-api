import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsersService } from './users-service.service';
import { UserInterface } from './user';
import { animate } from 'motion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('myElement') myElement: ElementRef | undefined;
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
    this.service.removeUser(id).subscribe((user) => {
      if (this.users) {
        this.users = this.users.filter((user: any) => user.id !== id);
      }
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
