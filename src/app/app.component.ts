import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { init as initWebex } from 'webex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('ngOnInit');
    const webex = initWebex({
      credentials: {
        access_token: '',
      },
    });
  }
}
