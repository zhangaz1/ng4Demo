import { Component, OnInit, Output, Inject, Optional } from '@angular/core';

import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titlePrefix = '>>';
  title = 'Hero Detail';
  msg = 'no clicked';
  @Output('outputName') name = 'not inited';

  constructor(
      @Inject(DataService) @Optional() private dataService: DataService
    ) {
    this.name = dataService.getHeroName();
  }
  
  ok() {
    this.msg = 'clicked';
    console.log('heroName:', this.dataService.getHeroName());
  }

  ngOnInit() {
    setTimeout(()=> {
      this.name = 'init named'
    }, 2500);
  }
}