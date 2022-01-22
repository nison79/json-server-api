import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersService } from './users-service.service';
import { KidsComponent } from './kids/kids.component';

@NgModule({
  declarations: [AppComponent, KidsComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule, FormsModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
