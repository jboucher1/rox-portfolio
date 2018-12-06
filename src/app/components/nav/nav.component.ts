import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({height:0, opacity:0}),
          animate('500ms', style({height:'calc(100vh - 70px)', opacity:1}))
        ]),
        transition(':leave', [
          style({height:'calc(100vh - 70px)', opacity:1}),
          animate('500ms', style({height:0, opacity:0}))
        ])
      ]
    )
  ],
})
export class NavComponent implements OnInit {
  open: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
