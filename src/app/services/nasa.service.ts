import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { NasaDetalle } from '../interfaces/nasa-response';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private API_KEY = "zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb";
  private baseUrl= `https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`
  constructor(private http: HttpClient) {


  }
  getRangeDates(initDate:Date,endDate:Date):Observable<NasaDetalle[]>{
    console.log(initDate);
    console.log(endDate);
    return this.http.get<NasaDetalle[]>(`${this.baseUrl}&start_date=${this.transformDateFormat(initDate)}&end_date=${this.transformDateFormat(endDate)}`)
  }
  getDayDates(day:Date):Observable<NasaDetalle>{
    console.log(day);
    return this.http.get<NasaDetalle>(`${this.baseUrl}&date=${this.transformDateFormat(day)}`)
  }

  transformDateFormat(date:Date):string{



    return (moment(date)).format('YYYY-MM-DD');
  }
}


