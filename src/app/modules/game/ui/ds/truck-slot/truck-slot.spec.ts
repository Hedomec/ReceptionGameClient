import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckSlot } from './truck-slot';

describe('TruckSlot', () => {
  let component: TruckSlot;
  let fixture: ComponentFixture<TruckSlot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckSlot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckSlot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
