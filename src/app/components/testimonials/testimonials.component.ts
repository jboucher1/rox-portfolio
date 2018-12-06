import { DataService } from './../../services/data/data.service';
import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  $testimonials: Array<any>;
  showindex: number = 0;
  maxindex: number;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.$testimonials = this.data.getTestimonials();
    this.maxindex = this.$testimonials.length - 1
  }


  showToggle(direction) {
    if (direction === 'left') {
      let min = this.showindex === 0;

      min ? this.showindex = this.maxindex : this.showindex = this.showindex - 1;

    } else {

    let max = this.showindex === this.maxindex;

     max ? this.showindex = 0 : this.showindex = this.showindex + 1;
    };

    let element = document.getElementById(`testimonial-${this.showindex}`)

    element.scrollIntoView({behavior: "smooth",block:'nearest'})
  };

}
