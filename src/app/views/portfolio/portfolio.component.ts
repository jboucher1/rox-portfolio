import { DataService } from './../../services/data/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { keyBy } from 'lodash';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  id: number;
  $portfolios: any;
  max_index:number;
  navigation: any;

  constructor( private data: DataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.id = parseInt(params.id));
  }

  ngOnInit() {
    this.$portfolios = keyBy(this.data.getPortfolios(), (port) => port.id);
    this.max_index = this.data.getPortfolios().length;
    let container = <HTMLElement> document.getElementById('container');
    container.scrollTo(0,0);
  };
  
  getAssetById(id){
    return this.data.getAssetById(id);
  };

  getNavigation(){
    let index = this.id

    this.navigation = {}
    
    switch(index){
      case 1 :
      this.navigation.left_label = this.$portfolios[this.max_index].title;
      this.navigation.left_id = this.$portfolios[this.max_index].id;
      this.navigation.right_label = this.$portfolios[index + 1].title;
      this.navigation.right_id = this.$portfolios[index + 1].id;
      break;
      case this.max_index :
      this.navigation.left_label = this.$portfolios[index - 1].title;
      this.navigation.left_id = this.$portfolios[index - 1].id;
      this.navigation.right_label = this.$portfolios[1].title;
      this.navigation.right_id = this.$portfolios[1].id;
      break;
      default :
      this.navigation.right_label = this.$portfolios[index + 1].title;
      this.navigation.right_id = this.$portfolios[index + 1].id;
      this.navigation.left_label = this.$portfolios[index - 1].title;
      this.navigation.left_id = this.$portfolios[index - 1].id;
      break;
    }
    return this.navigation;
  }

  setView(id){
    this.router.navigate([`/my-work/${id}`])
    this.id = id;
    window.scrollTo(0,0);
  };

}
