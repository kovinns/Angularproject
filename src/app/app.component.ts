import { Component } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
  login: string;
  name: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}
