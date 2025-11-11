import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillamultipleComponent } from './plantillamultiple.component';

describe('PlantillamultipleComponent', () => {
  let component: PlantillamultipleComponent;
  let fixture: ComponentFixture<PlantillamultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillamultipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillamultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
