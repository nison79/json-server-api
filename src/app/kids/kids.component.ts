import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss'],
})
export class KidsComponent implements OnInit {
  @Input() users: any;

  public kids: any;

  constructor(private service: UsersService) {}

  ngOnInit(): void {
    this.service.onlyKids().subscribe((kids) => {
      this.kids = kids;
      console.log(this.kids);
    });
  }
}
