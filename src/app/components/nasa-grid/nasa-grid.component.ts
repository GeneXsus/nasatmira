import { Component, Input, OnInit } from '@angular/core';
import { NasaDetalle } from 'src/app/interfaces/nasa-response';

@Component({
  selector: 'app-nasa-grid',
  templateUrl: './nasa-grid.component.html',
  styleUrls: ['./nasa-grid.component.css']
})
export class NasaGridComponent implements OnInit {

  @Input() detalles: NasaDetalle[];

  constructor() { }

  ngOnInit(): void {
  }

}
