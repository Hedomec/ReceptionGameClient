import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckZone } from './truck-zone';

describe('TruckZone', () => {
  let component: TruckZone;
  let fixture: ComponentFixture<TruckZone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckZone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckZone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
