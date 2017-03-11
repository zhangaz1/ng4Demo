import { Component, OnInit } from '@angular/core';

import { Observable, 
        Subject, 
        BehaviorSubject,
        ReplaySubject,
        AsyncSubject,
        Scheduler }   from 'rxjs';

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
    // testObservableToSubject();
    // testMulticast();
    // testAutoConnect();
    // testBehaviorSubject();
    // testReplaySubject();
    // testAsyncSubject();
    // testMultiplyByTenOperator();
    // testStaticOperator();
    // testAsyncScheduler();
    // testConvertingToObservable();
    // testCreateObservable();
    // testControllingFlow();
    // testProduceingValue();
    // testApplication();
    // testCombineLatest();
    // testConcat1();
    // testConcat2();
    // testCreate();
    // testDefer();
    // testReturn();
    // testPromise();
    // testEmpty();
    // testMergeMap();
    testForkJoin();
  }
}

function testForkJoin() {
  let source = Observable.forkJoin(
    Observable.of(42),
    Observable.range(3, 4),
    Observable.empty(),
    Observable.from([1, 2, 3]),
    Promise.resolve(56),
  );

  source.subscribe({
    next: x => console.log('onNext:', x),
    error: err => console.log('onError:', err),
    complete: () => console.log('onComplete'),
  });
}

function testMergeMap() {
  let interval = Observable.interval(1000);
  let result = interval.mergeMap(
    x => {
      console.log(x);
      return x % 2 === 1
        ? Observable.of('a', 'b', 'c')
        : Observable.empty();
    }
  );

  result.subscribe(x => console.log(x));
}

function testEmpty() {
  let result = Observable.empty()
                      .startWith(7);
  result.subscribe({
    next: x => console.log('onNext:', x),
    error: err => console.log('onError:', err),
    complete: () => console.log('onComplete'),
  });
}

function testPromise() {
  let source = Observable.defer(() => Promise.resolve(42));
  let subscription = source.subscribe(
    x => console.log(`onNext: ${x}`),
    e => console.log(`onError: ${e}`),
    () => console.log('onComplete'),
  );
}

function testReturn() {
  let source = Observable.defer(() => Observable.of(42, 43)); // return 不可用
  let subscription = source.subscribe(
    x => console.log(`onNext: ${x}`),
    e => console.log(`onError: ${e}`),
    () => console.log('onComplete'),
  );
}

function testDefer() {
  let clickOrInterval = Observable.defer(function() {
    // if(Math.random() > 0.5) {
    //   return Observable.fromEvent(document, 'click');
    // } else {
    //   return Observable.interval(1000);
    // }
    return Observable.interval(Math.random() * 3000)
                    .scan((n: number) => n + 1, 0);
  });

  clickOrInterval.subscribe(x => console.log('sub1:', x));
  clickOrInterval.subscribe(x => console.log('sub2:', x));
  clickOrInterval.subscribe(x => console.log('sub3:', x));
}

function testCreate() {
  let result = Observable.create(function(subscriber) {
    subscriber.next(Math.random());
    subscriber.next(Math.random());
    subscriber.next(Math.random());
    subscriber.complete();
  });
  result.subscribe(x => console.log(x));
}

function testConcat2() {
  let timer1 = Observable.interval(1000).take(10);
  timer1.subscribe({
    next: n => console.log('timer1:', n),
    complete: () => console.log('timer1 complete'),
  });
  let timer2 = Observable.interval(2000).take(6);
  timer2.subscribe({
    next: n => console.log('timer2:', n),
    complete: () => console.log('timer2 complete'),
  });
  let timer3 = Observable.interval(500).take(10);
  timer3.subscribe({
    next: n => console.log('timer3:', n),
    complete: () => console.log('timer3 complete'),
  });
  var result = Observable.concat(timer1, timer2, timer3);
  result.subscribe({
    next: n => console.log('result:', n),
    complete: () => console.log('result complete'),
  });
}

function testConcat1() {
  let timer = Observable.interval(1000).take(4);
  timer.subscribe({
    complete: () => console.log('timer complete'),
  });
  var sequence = Observable.range(1, 10);
  sequence.subscribe({
    complete: () => console.log('sequence complete'),
  });
  let result = Observable.concat(timer, sequence);
  result.subscribe(n => console.log(n));
}

function testCombineLatest() {
  let weight = Observable.of(70, 72, 76, 79, 75);
  let height = Observable.from([1.76, 1.77, 1.78]);
  let bmi = Observable.combineLatest(weight, height, (w, h) => w / (h * h));
  bmi.subscribe(x => console.log('BMI is:', x))
}

function testApplication() {
  let button = document.createElement('input');
  button.type = 'button';
  button.value = 'count';
  
  let body = document.querySelector('body');
  body.appendChild(button);

  Observable.fromEvent(button, 'click')
          .scan((count: number) => count + 1,  0)
          .subscribe(count => console.log('count:', count));
}

function testProduceingValue() {
  let input = document.createElement('input');
  input.type = 'text';
  input.value = 'val';
  
  let body = document.querySelector('body');
  body.appendChild(input);

  let inputObservable = Observable.fromEvent(input, 'keypress');

  inputObservable.map(event => event['target'].value.split(''))
                .subscribe(value => console.log('map:', value));

  inputObservable.pluck('target', 'value')
                // .map((value: string) => value.split(''))
                .subscribe(value => console.log('pluck:', value));

  inputObservable.pluck('target', 'value')
                // .map((value: string) => value.split(''))
                .pairwise()
                .subscribe(value => console.log('pairwise:', value));

  inputObservable.pluck('target', 'value')
                // .map((value: string) => value.split(''))
                .distinct()
                .subscribe(value => console.log('distinct:', value));

  inputObservable.pluck('target', 'value')
                // .map((value: string) => value.split(''))
                .distinctUntilChanged()
                .subscribe(value => console.log('distinctUntilChanged:', value));
}

function testControllingFlow() {
  let input = document.createElement('input');
  input.type = 'text';
  input.value = 'val';

  let button = document.createElement('input');
  button.type = 'button';
  button.value = 'stope';
  
  let body = document.querySelector('body');
  body.appendChild(input);
  body.appendChild(button);

  let inputObservable = Observable.fromEvent(document.querySelector('input'), 'keypress');
  
  inputObservable.filter(event => event['target'].value.length > 2)
                .subscribe(value => console.log('filter:', value));

  inputObservable.delay(200)
                .subscribe(value => console.log('delay200:', value));

  inputObservable.throttleTime(200)
                .subscribe(value => console.log('throttle:', value));

  inputObservable.debounceTime(200)
                .subscribe(value => console.log('debounce:', value));
  
  inputObservable.take(3)
                .subscribe(value => console.log('take:', value));

  let stopStream = Observable.fromEvent(button, 'click');
  inputObservable.takeUntil(stopStream)
                .subscribe(value => console.log('takeUntil:', value));
}

function testCreateObservable() {
  function createSubject() {
    let myObservable = new Subject();
    myObservable.subscribe(v => console.log(v));
    myObservable.next('foo');
  }

  function observableCreate() {
    let myObservable = Observable.create(observer => {
      observer.next('foo');
      setTimeout(() => observer.next('bar'), 1000);
    });
    
    myObservable.subscribe(v => console.log(v));
  }

  createSubject();
  observableCreate();
}

function testConvertingToObservable() {
  Observable.of('foo', 'bar');
  Observable.from([1, 2, 3]);
  Observable.fromEvent(document.querySelector('button'), 'click');
  Observable.fromPromise(new Promise(() => {}));
  (Observable.bindCallback(function(any, cb) { cb();}))('any');
  // bindNodeCallback
}

function testAsyncScheduler() {
  var observable = Observable.create(function(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  })
  .observeOn(Scheduler.async);

  console.log('just before subscribe');
  observable.subscribe({
    next: x => console.log('got value:', x),
    error: err => console.error('something wrong occurred:', err),
    complete: () => console.log('done')
  });
  console.log('just after subscribe');
}

function testStaticOperator() {
  let observable1 = Observable.interval(1000);
  let observable2 = Observable.interval(400);

  var merged = Observable.merge(observable1, observable2);
  merged.subscribe(v => console.log(v));
}

function testMultiplyByTenOperator() {
  Observable.prototype['multiplyByTen'] = function(): Observable<any> {
    let input = this;
    let output = Observable.create(function(observer) {
      input.subscribe({
        next: v => observer.next(10 * v),
        error: err => observer.error(err),
        complete: () => observer.complete(),
      });
    });

    return output;
  }

  let input = Observable.from([1, 2, 3,4]);
  let output = input['multiplyByTen']();
  output.subscribe(x => console.log(x));
}

function testAsyncSubject() {
  let subject = new AsyncSubject();
  subject.subscribe(v => console.log('observerA:', v));
  
  subject.next(1);
  subject.next(2);
  subject.next(3);
  subject.next(4);

  subject.subscribe(v => console.log('observerB:', v));

  subject.next(5);
  subject.complete();  
}

function testReplaySubject() {
  let subject = new ReplaySubject(3, 500);
  subject.subscribe(v => console.log('observerA:', v));

  let i = 1;
  let intervalId = setInterval(() => {
    subject.next(i++);
    if(i > 10) {
      clearInterval(intervalId);
    }
  }, 200);

  setTimeout(() => 
    subject.subscribe(v => console.log('observerB:', v))
  , 1000);
}

function testBehaviorSubject() {
  let subject = new BehaviorSubject(0);
  let subscriber = subject.subscribe(v => console.log('observerA:', v));

  subject.next(1);
  subject.next(2);

  subject.subscribe(v => console.log('observerB:', v));

  subject.next(3);
}

function testAutoConnect() {
  let source = Observable.interval(500);
  let subject = new Subject();
  let multicasted = source.multicast(subject).refCount();

  console.log('observerA subscribed');
  let subscription1 = multicasted.subscribe(v => console.log('observerA:', v));
  // let subscriptionConnect = multicasted.connect();

  let subscription2;
  setTimeout(() => {
    console.log('observerB subscribed');    
    subscription2 = multicasted.subscribe(v => console.log('observerB:', v));
  }, 600);
  
  setTimeout(() => {
    console.log('observerA unsubscribed');
    subscription1.unsubscribe();
  }, 1600);

  setTimeout(() => {
    console.log('observerB unsubscribed');    
    subscription2.unsubscribe();
    // subscriptionConnect.unsubscribe();
  }, 2600);
}

function testMulticast() {
  var source = Observable.from([1, 2, 3]);
  var subject = new Subject();
  var multicasted = source.multicast(subject);
  console.log(multicasted);

  var subscriber = multicasted.subscribe({
    next: v => console.log('observerA:', v),
  });
  console.log(subscriber);

  var subscriber2 = multicasted.subscribe(v => console.log('observerB:', v));

  var subscription = multicasted.connect();
  console.log(subscription);
}

function testObservableToSubject() {
  var subject = new Subject();

  var subscriber = subject.subscribe({
    next: v => console.log('observerA:', v),
  });
  console.log(subscriber);
  subject.subscribe(v => console.log('observerB:', v));

  var observable = Observable.from([1, 2, 3]);
  var subjectSubscriber = observable.subscribe(subject);
  
  console.log(subjectSubscriber);
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