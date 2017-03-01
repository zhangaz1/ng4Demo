import { Component, OnInit, Inject, Optional, Injector } from '@angular/core';

import { APP_CONFIG, AppConfig }     from './../app-config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {  
  fontSizePx: number;
  title = 'Tour of Heroes';
  subtitle = '(v1)';
  
  constructor(
    @Inject(APP_CONFIG) @Optional() private config: AppConfig,
    private injector: Injector
  ) { }

  ngOnInit(): void {
    let config = require('app/test.json')
    console.log(config);

    this.fontSizePx = 28;

    if(this.config){
      this.title = this.config.title;
    }
    
    console.log('title2:', this.injector.get(APP_CONFIG, { title: 'temp' }).title);    
  }
}
