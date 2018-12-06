import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent{

  @Input() label: string;
  @Input() icon:string;
  @Input() size:any;
  @Input() reverse:boolean = false;

  constructor() { }

}
