import { Component, OnInit } from '@angular/core';

import { Observable, Subject }   from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    console.clear();
    // testUnsubscribe1();
    // testObservable1();
    // testObservable2();    
    // testObservable3();
    // testSubscribeAdd();
    // testSubject();
    testObservableToSubject();
  }
}

function testObservableToSubject() {
  var subject = new Subject();

  subject.subscribe({
    next: v => console.log('observerA:', v),
  });
  subject.subscribe(v => console.log('observerB:', v));

  var observable = Observable.from([1, 2, 3]);
  observable.subscribe(subject);
}

function testSubject() {
  var subject = new Subject();

  subject.subscribe({
    next: v => console.log('observerA:', v),
  });
  subject.subscribe(v => console.log('observerB:', v));

  subject.next(1);
  subject.next(2);
}

function testSubscribeAdd() {
  var observable1 = Observable.interval(400);
  var observable2 = Observable.interval(300);

  var subscription = observable1.subscribe(x => console.log('first:', x));
  var childSubscription = observable1.subscribe(x => console.log('second:', x));

  subscription.add(childSubscription);

  setTimeout(() => {
    subscription.unsubscribe();
  }, 1000);
}

function testObservable3() {
  let observable = Observable.create(observer => {
    console.log('Hello');
    observer.next(42);
  });

  console.log('just before subscribe');
  let sub1 = observable.subscribe(n => console.log(n));
  observable.subscribe(n => console.log(n));
  console.log('just after subscribe');
}

function testObservable2() {
  let observable = Observable.create(function(observer) {
    try{
      if(5 === 5){
        throw new Error('emmit error');
      }
      var n = observer.next(1);
      console.log('n:', n);
      observer.next(2);
      observer.next(3);
      let intervalId = setTimeout(() => {
        console.log('next 4');
        observer.next(4);
        observer.complete();
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
        console.log('unsubscrib');
      }
    } catch(err) {
      observer.error(err);
    }    
  });

  console.log('just before subscribe');
  let sub1 = observable.subscribe({
    next: function(x) {      
      console.log('got value ' + x, sub1);
      if(sub1 && x!=='recursion'){
        sub1.next('recursion');
      }

      if(x===1) {
        throw new Error('trigger error');
        // return 5;
      }
    },
    error: err => console.error('something wrong occurred:', err),
    complete: function() {
      console.log('done', sub1);
      setTimeout(function() {
        console.log(sub1);
      }, 10);
    },
  });

  console.log(sub1);
  sub1.next('sub2');
  sub1.destination.next('distaination2');
  var ur = sub1.unsubscribe();
  sub1.next('sub3');
  sub1.destination.next('distaination3');  
  console.log(sub1);

  sub1.destination.next(6);

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
  let sub1 = observable.subscribe({
    next: function(x) {      
      console.log('got value ' + x, sub1);
    },
    error: err => console.error('something wrong occurred:', err),
    complete: function() {
      console.log('done', sub1);
      setTimeout(function() {
        console.log(sub1);
      }, 10);
    },
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