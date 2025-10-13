import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesZone } from './categories-zone';

describe('CategoriesZone', () => {
  let component: CategoriesZone;
  let fixture: ComponentFixture<CategoriesZone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesZone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesZone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
