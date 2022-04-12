import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NasaDetalle } from 'src/app/interfaces/nasa-response';

@Component({
  selector: 'app-nasa-grid-item',
  templateUrl: './nasa-grid-item.component.html',
  styleUrls: ['./nasa-grid-item.component.css']
})
export class NasaGridItemComponent implements OnInit {
  @Input() detalle: NasaDetalle;
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onDetalleClick( detalle: NasaDetalle ) {
    this.router.navigate(['/detalle', detalle.date ]);
  }

}
