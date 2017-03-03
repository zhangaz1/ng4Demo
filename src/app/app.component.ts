import { Component, OnInit } from '@angular/core';

import { Observable }   from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    testUnsubscribe1();
  }
}

function testUnsubscribe1() {
    let observable = Observable.create(function subscribe(observer) {
      let i = 0;

      let intervalID = setInterval(() => {
        observer.next(i++);
      }, 1000);
      
      return function unsubscribe() {
        clearInterval(intervalID);
      };
    });

    let unsubscrib1 = observable.subscribe(x => console.log('sub1:', x));
    let unsubscrib2;

    setTimeout(() => {
      unsubscrib2 = observable.subscribe(x => console.log('sub2:', x));
    }, 3000);

    setTimeout(() => unsubscrib2.unsubscribe(), 7000);
    setTimeout(() => unsubscrib1.unsubscribe(), 10000);
}