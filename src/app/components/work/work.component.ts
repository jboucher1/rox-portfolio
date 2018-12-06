import { DataService } from './../../services/data/data.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  $work : any
  constructor(private data: DataService) { }

  ngOnInit() {
    this.$work = this.data.getPortfolios()
  };

};
