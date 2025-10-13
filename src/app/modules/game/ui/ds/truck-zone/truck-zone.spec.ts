import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckZoneComponent } from './truck-zone';

describe('TruckZone', () => {
  let component: TruckZoneComponent;
  let fixture: ComponentFixture<TruckZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckZoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TruckZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
