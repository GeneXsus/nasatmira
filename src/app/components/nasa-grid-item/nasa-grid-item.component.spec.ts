import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaGridItemComponent } from './nasa-grid-item.component';

describe('NasaGridItemComponent', () => {
  let component: NasaGridItemComponent;
  let fixture: ComponentFixture<NasaGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
