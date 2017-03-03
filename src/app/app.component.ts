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
    // testUnsubscribe1();
    // testObservable1();
    testObservable2();    
  }
}

function testObservable2() {
  let observable = Observable.create(observer => {
    console.log('Hello');
    observer.next(42);
  });

  console.log('just before subscribe');
  observable.subscribe(n => console.log(n));
  observable.subscribe(n => console.log(n));
  console.log('just after subscribe');
}

function testObservable1() {
  let observable = Observable.create(function(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    });
  });

  console.log('just before subscribe');
  observable.subscribe({
    next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred:', err),
    complete: () => console.log('done'),
  });
  console.log('just after subscribe');
}

function testUnsubscribe1() {
    let i = 0;
  
    let observable = Observable.create(function(observer) {
      let intervalID = setInterval(() => {
        observer.next(i++);
      }, 1000);
      
      return function() {
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