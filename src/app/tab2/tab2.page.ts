import { Component } from '@angular/core';
import { BartService } from '../bart.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  stations = [];

  /**
   *
   */
  constructor(private bartService : BartService) {
    
  }

  source : String = ""
  destination : String = ""
  trips = {}
  lat: number = 51.678418;
  lng: number = 7.809007;
  sourceDir = {};
  destDir = {};
  travelMode :String = "TRANSIT";
  ngOnInit(){
    this.bartService.getStations().subscribe(data=> {
      // console.log("inside oninit")
      this.stations = data.data.station
      console.log(this.stations);
    })
  }

  sourceChanged(){
    console.log(this.source);
    this.bartService.getStationDetails(this.source).subscribe(data=>{
      this.sourceDir = {"lat": Number(data.data.gtfs_latitude),
                        "lng": Number(data.data.gtfs_longitude)};
    })
    if(this.source != "" && this.destination != ""){
      this.trips = this.bartService.getTripss(this.source, this.destination);
    }
  }

  destChanged(){
    console.log(this.destination);
    this.bartService.getStationDetails(this.destination).subscribe(data=>{
      this.destDir = {"lat": Number(data.data.gtfs_latitude),
                        "lng": Number(data.data.gtfs_longitude)};
    })
    if(this.source != "" && this.destination != ""){
      this.bartService.getTripss(this.source, this.destination).subscribe(response=>{
        this.trips = response.data.request.trip;
        console.log(this.trips)
      });
      
    }
  }
}
