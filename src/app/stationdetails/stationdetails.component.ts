import { Component, OnInit } from '@angular/core';
import { BartService } from '../bart.service';

@Component({
  selector: 'app-stationdetails',
  templateUrl: './stationdetails.component.html',
  styleUrls: ['./stationdetails.component.scss'],
})
export class StationdetailsComponent implements OnInit {

  station = {}
  constructor(private bartService: BartService) { }

  ngOnInit() {
    let abbr = this.bartService.getStationAbbr();
    this.bartService.getStationDetails(abbr).subscribe(data=>{
      this.station = data.data;
    })
  }

}
