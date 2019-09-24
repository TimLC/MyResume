import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myresume';

  route: string;
  currentURL='';

  constructor() {
    this.currentURL = window.location.href;
  }

  ngOnInit() { }
}
