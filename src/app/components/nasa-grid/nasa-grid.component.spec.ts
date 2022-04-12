import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaGridComponent } from './nasa-grid.component';

describe('NasaGridComponent', () => {
  let component: NasaGridComponent;
  let fixture: ComponentFixture<NasaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
