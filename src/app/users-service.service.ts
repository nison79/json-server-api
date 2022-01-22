import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserInterface } from './user';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('http://localhost:3000/users').pipe(
      map((users: UserInterface[]) => {
        return users.map((user) => ({
          id: user.id,
          name: user.name,
          age: user.age,
          img: user.img,
        }));
      })
    );
  }

  removeUser(id: string): Observable<{}> {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }

  addUser(name: string, age: number, img: string): Observable<UserInterface> {
    const user = {
      name,
      age,
      img,
    };
    return this.http.post<UserInterface>('http://localhost:3000/users', user);
  }

  onlyKids(): Observable<{}> {
    return this.http.get<UserInterface[]>('http://localhost:3000/users').pipe(
      map((users: UserInterface[]) => {
        return users.filter((user) => user.age < 12);
      })
    );
  }
}
