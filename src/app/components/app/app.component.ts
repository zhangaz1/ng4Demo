import { Component } from '@angular/core';
import { Router, NavigationExtras, } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Router!';

  constructor(
    private router: Router,
  ) { }

  toHeroList() {
    let sessionId = 123456789;

    let navigationExtras: NavigationExtras = {
        queryParams: { 'session_id': sessionId, },
        fragment: 'anchor',
    };

    this.router.navigate(['hero'], navigationExtras);
  }

  toCrisisCenter() {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true,
    };
    this.router.navigate(['crisis-center'], navigationExtras);
  }
}
