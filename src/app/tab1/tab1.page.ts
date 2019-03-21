import { Component } from '@angular/core';
import { BartService } from '../bart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  /**
   *
   */
  constructor(private bartService : BartService, private router : Router) {  
  }

  stations = [];

  ngOnInit(){
    this.bartService.getStations().subscribe(data=> {
      // console.log("inside oninit")
      this.stations = data.data.station
      console.log(this.stations);
    })
  }

  getStationDetails(abbr){
    this.bartService.setStationAbbr(abbr);
    this.router.navigate(['/station']);
  }
  
}
