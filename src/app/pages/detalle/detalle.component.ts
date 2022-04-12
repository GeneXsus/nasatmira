import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  } from 'rxjs';
import { NasaDetalle } from 'src/app/interfaces/nasa-response';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  public detalle: NasaDetalle;

  constructor(private activatedRoute: ActivatedRoute,
    private nasaService: NasaService,
    private location: Location,
    private router: Router

  ) { }

  ngOnInit(): void {

    const { date } = this.activatedRoute.snapshot.params;



    this.nasaService.getDayDates( new Date(date) ).subscribe( ( detalle ) => {

      if ( !detalle ) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.detalle = detalle;

    });




  }

  onRegresar() {
    this.location.back();
  }

}
