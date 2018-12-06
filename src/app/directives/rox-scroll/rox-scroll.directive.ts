import { Router } from '@angular/router';
import { Directive, HostListener, Input} from '@angular/core';
import { delay } from 'lodash';

@Directive({
  selector: '[roxScroll]'
})
export class RoxScrollDirective {
  @Input('roxScroll') private roxScroll: string;
  @Input('roxScrollTopOffset') private roxScrollTopOffset: number;
  @Input('roxScrollNavigate') private roxScrollNavigate: string;

  constructor(private router: Router) { }

  @HostListener('click')
  onclick():void{
    if(this.roxScrollNavigate && this.router.url !== this.roxScrollNavigate){

      this.router.navigate([this.roxScrollNavigate]).then(() => {
        delay(() => this.scrollIt(), 500)
      });

    }else{
      this.scrollIt();
    };
  };

  scrollIt(){
    let scroll_target = <HTMLElement> document.getElementsByTagName(`${this.roxScroll}`)[0] || document.getElementById(this.roxScroll);

    if(!scroll_target || !scroll_target.offsetTop){
      return;
    }

    let offsetTop : number =  scroll_target.offsetTop - this.roxScrollTopOffset;
    
    let container = <HTMLElement> document.getElementById('container');

    container.scrollTo({top: (offsetTop || scroll_target.offsetTop), behavior:'smooth'})
  };
}
