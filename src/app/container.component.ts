import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

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

  constructor(updates: SwUpdate, @Inject(DOCUMENT) dom: Document) {
     updates.available.subscribe(event => {
      updates.activateUpdate().then(() => dom.location.reload())
    });
  }

  ngOnInit() {

  }

}
