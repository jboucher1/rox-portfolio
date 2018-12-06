import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container',
  template: `
  <nav></nav>
  <div id="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
