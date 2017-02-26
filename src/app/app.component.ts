import { Component, OnInit, Inject, Optional } from '@angular/core';

import { APP_CONFIG, AppConfig }     from './app-config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(
    @Inject(APP_CONFIG) @Optional() private config: AppConfig
  ) { }

  ngOnInit(): void {
    if(this.config){
      this.title = this.config.title;
    }
  }
}
