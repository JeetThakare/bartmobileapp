import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BartService {

  station : String;
  constructor(private caller : HttpClient) { 
    }
  
  getStations(): Observable<any>{
    let url = "http://bart.jeetthakare.com/stations/";
    return this.caller.get(url);
  }
  getStationDetails(abbr): Observable<any>{
    let url = "http://bart.jeetthakare.com/station/"+abbr;
    return this.caller.get(url);
  }
  setStationAbbr(station){
    this.station = station;
  }

  getStationAbbr(){
    return this.station;
  }
  
  getTripss(src, dest): Observable<any>{
    let url = "http://bart.jeetthakare.com/trips/"+src+"/"+dest;
    return this.caller.get(url);
  }
}
