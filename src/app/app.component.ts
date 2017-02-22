import { Component, OnInit, Output } from '@angular/core';

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
  
  ok() {
    this.msg = 'clicked';
  }

  ngOnInit() {
    setTimeout(()=> {
      this.name = 'init named'
    }, 2500);
  }
}