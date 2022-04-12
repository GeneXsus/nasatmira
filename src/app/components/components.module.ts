import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NasaGridComponent } from './nasa-grid/nasa-grid.component';
import { NasaGridItemComponent } from './nasa-grid-item/nasa-grid-item.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NasaGridComponent,
    NasaGridItemComponent
  ],
  exports:[
    NavbarComponent,
    NasaGridComponent,
    NasaGridItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
