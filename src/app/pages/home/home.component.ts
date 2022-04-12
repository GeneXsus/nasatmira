import { Component, OnInit } from '@angular/core';
import { NasaDetalle } from 'src/app/interfaces/nasa-response';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public detalles: NasaDetalle[]=[];
  public loading:boolean=true;

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.loading=true;
    let now= new Date();
    let initDate= new Date(now.getFullYear(), now.getMonth(), now.getDate() - 5);
    this.nasaService.getRangeDates(initDate,now)
      .subscribe(
        resp=>{
            this.detalles=resp;
            this.loading=false;
        })
  }


}
