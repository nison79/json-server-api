import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'json-server-api';
  public users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('ONINIT');
    this.http.get('http://localhost:3000/users').subscribe((users) => {
      console.log(users);

      this.users = users;
    });
  }
}
